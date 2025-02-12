import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header({ left_child, center_child, right_child }) {
  const navigate = useNavigate();

  return (
    <header className="Header">
      <div className="header_left">{left_child}</div>
      <div className="header_center"></div>
      <div className="header_right">{right_child}</div>
    </header>
  );
}
