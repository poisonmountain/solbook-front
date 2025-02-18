import BookCard from '../BookCard/BookCard';
import './BookList.css';

const bookList = [
  {
    bookId: 1,
    bookTitle: '토비의 스프링 3.1 Vol.1',
    quizCount: 16,
  },
  {
    bookId: 2,
    bookTitle: '객체지향의 사실과 오해',
    quizCount: 13,
  },
  {
    bookId: 3,
    bookTitle: '그림으로 배우는 Http&Network Basic',
    quizCount: 9,
  },
];

const BookList = () => {
  return (
    <div className="BookList">
      <div className="bookcard-list-wrapper">
        {bookList.map((item) => (
          <BookCard key={item.bookId} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
