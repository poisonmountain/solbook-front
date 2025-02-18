import toby from '../../assets/토비.jpg';
import './Home.css';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import { FaSearch, FaBars } from 'react-icons/fa';
import BookList from '../../components/BookList/BookList';

const books = [
  { id: 1, title: '토비의 스프링 3.1', image: toby },
  { id: 2, title: '토비의 스프링 3.1', image: toby },
  { id: 3, title: '토비의 스프링 3.1', image: toby },
  { id: 4, title: '토비의 스프링 3.1', image: toby },
  { id: 5, title: '토비의 스프링 3.1', image: toby },
];

export default function Home() {
  return (
    <>
      <Header
        left_child={<Logo />}
        right_child={
          <div>
            <FaSearch className="icon" />
            <FaBars className="icon" />
          </div>
        }
      />
      <div className="home-container">
        <div className="home-body-header">
          <h2 className="home-body-title">📖 퀴즈를 풀어보세요.</h2>
          <p className="home-body-content">풀고 싶은 분야를 선택해보세요.</p>
        </div>

        <BookList />
      </div>
    </>
  );
}
