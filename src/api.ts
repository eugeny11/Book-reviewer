import { mockBooks, mockUsers, mockReviews } from "./mockData";
import { Book, User, Review } from "./types";

export const getBooks = async(): Promise<Book[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockBooks), 1000)
    })
}

export const getUsers = async(): Promise<User[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockUsers), 1000)
    })
}

export const getReviews = async(): Promise<Review[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockReviews), 1000)
    })
}