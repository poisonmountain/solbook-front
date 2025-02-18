import toby from '../assets/토비.jpg';
import gaeksaoe from '../assets/객사오.jpg';
import grimh from '../assets/그배에.jpg';

export function getBookThumbnailImage(bookId) {
  switch (bookId) {
    case 1:
      return toby;
    case 2:
      return gaeksaoe;
    case 3:
      return grimh;
    default:
      return toby;
  }
}
