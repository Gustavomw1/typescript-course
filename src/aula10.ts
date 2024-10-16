// Classe que representa um livro.
class Book {
  // Construtor da classe 'Book' que define as propriedades do livro.
  // O parâmetro 'available' tem um valor padrão 'true', indicando que o livro está disponível.
  constructor(
    public title: string, // Título do livro.
    public author: string, // Autor do livro.
    public yearPublished: number, // Ano em que o livro foi publicado.
    public available: boolean = true // Status de disponibilidade do livro (disponível por padrão).
  ) {}

  // Método que alterna a disponibilidade do livro.
  // Se o livro estiver disponível, ele se torna indisponível, e vice-versa.
  toggleAvailability(): void {
    this.available = !this.available; // Inverte o valor de 'available' (de true para false, ou de false para true).
  }
}

// Classe que representa uma biblioteca.
class Library {
  // Propriedade privada que armazena os livros da biblioteca em um array.
  // 'private' significa que essa propriedade só pode ser acessada dentro da classe 'Library'.
  private books: Book[] = [];

  // Método para adicionar um livro à biblioteca.
  // O livro recebido como argumento é adicionado ao array 'books'.
  addBook(book: Book): void {
    this.books.push(book); // Insere o livro no array de livros.
  }

  // Método para listar todos os livros da biblioteca.
  // Retorna o array de livros, que contém todas as instâncias de 'Book' adicionadas.
  listBooks(): Book[] {
    return this.books; // Retorna a lista de todos os livros armazenados.
  }

  // Método para encontrar livros por autor.
  // Recebe uma string com o nome do autor e retorna todos os livros que correspondem a esse autor.
  findBooksByAuthor(author: string): Book[] {
    // Usa o método 'filter' para criar uma nova lista contendo apenas os livros com o autor correspondente.
    return this.books.filter((book) => book.author === author);
  }

  // Método para encontrar todos os livros que estão disponíveis para empréstimo.
  // Retorna uma lista de livros onde a propriedade 'available' é 'true'.
  findAvailableBooks(): Book[] {
    // Filtra o array 'books', retornando apenas os livros que estão disponíveis (available == true).
    return this.books.filter((book) => book.available);
  }
}

// criar uma nova instância de 'Library', que representa a nossa biblioteca.
const library = new Library();

// Crir alguns livros com diferentes autores, títulos e anos de publicação.
// O terceiro livro (book3) está indisponível inicialmente, porque foi passado 'false' como argumento para 'available'.
const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
const book2 = new Book("The Pragmatic Programmer", "Andrew Hunt", 1999);
const book3 = new Book("Refactoring", "Martin Fowler", 2018, false);

// Adicionar os livros criados à biblioteca usando o método 'addBook'.
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Exibir a lista de todos os livros da biblioteca.
console.log(library.listBooks()); // Lista todos os livros que foram adicionados à biblioteca.

// Procur por todos os livros do autor "Robert C. Martin".
console.log(library.findBooksByAuthor("Robert C. Martin")); // Filtra livros pelo autor especificado.

// Listar todos os livros disponíveis para empréstimo.
console.log(library.findAvailableBooks()); // Lista apenas os livros que estão disponíveis para empréstimo.
