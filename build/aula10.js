"use strict";
class Book {
    title;
    author;
    yearPublished;
    available;
    constructor(title, author, yearPublished, available = true) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.available = available;
    }
    toggleAvailability() {
        this.available = !this.available;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        return this.books;
    }
    findBooksByAuthor(author) {
        return this.books.filter((book) => book.author === author);
    }
    findAvailableBooks() {
        return this.books.filter((book) => book.available);
    }
}
const library = new Library();
const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
const book2 = new Book("The Pragmatic Programmer", "Andrew Hunt", 1999);
const book3 = new Book("Refactoring", "Martin Fowler", 2018, false);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.listBooks());
console.log(library.findBooksByAuthor("Robert C. Martin"));
console.log(library.findAvailableBooks());
