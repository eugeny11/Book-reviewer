export interface User {
    id: string;
    name: string;
}

export interface Review{
    id: string;
    text: string;
    userId: string;
}

export interface Book{
    id: number;
    name: string;
    authorId: string;
    reviewIds: string[];
    description: string;
}

export interface ReviewInformation{
    id: string;
    text: string;
    user: User;
}

export interface BooksInformation{
    id: number;
    name: string;
    author: User;
    reviews: ReviewInformation[];
    description: string;
}