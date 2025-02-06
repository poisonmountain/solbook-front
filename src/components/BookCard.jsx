import '../styles/BookCard.css';

export default function BookCard({ book, onClick }) {
  return (
    <div className="book-card" onClick={() => onClick(book.id)}>
      <img src={book.image} alt={book.title} />
      <p>{book.title}</p>
    </div>
  );
}
