import { useNavigate } from 'react-router-dom';
import "../styles/Header.css";

export default function Header({ logo }) {
  const navigate = useNavigate();

  return (
    <header className="Header">
      <div className="logo-container" onClick={() => navigate('/')}>
        {logo ? <img src={logo} alt="Logo" className="logo-image" /> : null}
        <span className="logo-text">SolBook</span>
      </div>
    </header>
  );
}
