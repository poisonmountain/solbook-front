import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

export default function Header({ logo }) {
  const navigate = useNavigate();

  return (
    <header className="Header">
      <div className="header_left">
        <div className="logo-container" onClick={() => navigate('/')}>
          {logo ? <img src={logo} alt="Logo" className="logo-image" /> : null}
          <span className="logo-text">SolBook</span>
        </div>
      </div>
      <div className="header_center">dd</div>
      <div className="header_right">dd</div>
    </header>
  );
}
