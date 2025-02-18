import './App.css';
import Home from './pages/Home/Home';
import BookDetail from './pages/Home/BookDetail';
import { Routes, Route } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    thumbnailImage: './assets/토비.jpg',
    title: '토비의 스프링 3.1 Vol.1',
    author: '토비',
  },
  {
    id: 2,
    thumbnailImage: './assets/토비.jpg',
    title: '토비의 스프링 3.1 Vol.1',
    author: '토비',
  },
  {
    id: 3,
    thumbnailImage: './assets/토비.jpg',
    title: '토비의 스프링 3.1 Vol.1',
    author: '토비',
  },
  {
    id: 4,
    thumbnailImage: './assets/토비.jpg',
    title: '토비의 스프링 3.1 Vol.1',
    author: '토비',
  },
];

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </>
  );
}
