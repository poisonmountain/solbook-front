import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import BookCard from '../components/BookCard';
import toby from '../assets/토비.jpg';
import '../styles/Home.css';

const books = [
  { id: 1, title: '토비의 스프링 3.1', image: toby },
  { id: 2, title: '토비의 스프링 3.1', image: toby },
  { id: 3, title: '토비의 스프링 3.1', image: toby },
  { id: 4, title: '토비의 스프링 3.1', image: toby },
  { id: 5, title: '토비의 스프링 3.1', image: toby },
];

export default function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  return (
    <>
      <div className="home-container">
        <h2>스프링 관련 도서 🌱</h2>
        <div className="book-slider-container">
          <div className="book-slider" ref={scrollRef}>
            {books.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => navigate(`/quiz/${book.id}`)} />
            ))}
          </div>
        </div>
        <h2>스프링 관련 도서 🌱</h2>
        <div className="book-slider-container">
          <div className="book-slider" ref={scrollRef}>
            {books.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => navigate(`/quiz/${book.id}`)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
