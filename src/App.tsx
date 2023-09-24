import React, {useState, useEffect, FC} from 'react';
import { Book, User, Review, BooksInformation } from './types';
import { getBooks, getUsers, getReviews } from './api';
import Card from './Card';
import './styles.css'



const toBookInformation = async (book: Book, users: User[], reviews: Review[]): Promise<BooksInformation> => {
  const author = users.find(u => u.id === book.authorId) || { id: "unknown", name: "Неизвестный автор" };
  const bookReviews = book.reviewIds.map(rid => reviews.find(r => r.id === rid)).filter(Boolean) as Review[];
  
  const mappedReviews = bookReviews.map(r => ({
    id: r.id,
    text: r.text,
    user: users.find(u => u.id === r.userId) || { id: "unknown", name: "Unknown user" }
  }));
  
  return {
    id: book.id,
    name: book.name || "Unknown book",
    author: author,
    reviews: mappedReviews,
    description: book.description
  };
};

const App: FC = () => {
  const [bookInformations, setBookInformations] = useState<BooksInformation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedBooks, fetchedUsers, fetchedReviews] = await Promise.all([getBooks(), getUsers(), getReviews()]);
        
        const informations = await Promise.all(fetchedBooks.map(b => toBookInformation(b, fetchedUsers, fetchedReviews)));
        setBookInformations(informations);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Books:</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && bookInformations.map(b => <Card key={b.id} book={b} />)}
    </div>
  );
};

export default App