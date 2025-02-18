import { getBookThumbnailImage } from '../../util/get-book-thumbnail-image';
import { MdOutlineQuiz } from 'react-icons/md';
import './BookCard.css';

const BookCard = ({ bookId, bookTitle, quizCount }) => {
  return (
    <div className="BookCard">
      <img className="book-thumbnail-img" src={getBookThumbnailImage(bookId)} />
      <div className="book-title">{bookTitle}</div>
      <div className="quiz-count-section">
        <div className="quiz-count-icon">
          <MdOutlineQuiz />
        </div>
        <div className="quiz-count">{quizCount}</div>
      </div>
    </div>
  );
};

export default BookCard;
