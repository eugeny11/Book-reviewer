import { FC } from "react";
import { BooksInformation } from "./types";

const Card: FC<{ book: BooksInformation }> = ({ book }) => {
    return (
      <div className="card">
        <h3>{book.name}</h3>
        <p>
          <b>Author</b>: {book.author.name}
        </p>
        <p>
          <b>Description</b>: {book.description}
        </p>
        <p>
          <b>Review: </b>
          {book.reviews.map((r) => `${r.text} (${r.user.name})`).join(", ") ||
            "-"}
        </p>
      </div>
    );
  };
  
  export default Card