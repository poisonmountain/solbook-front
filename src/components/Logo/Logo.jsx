import { useNavigate } from 'react-router-dom';
import logo from '../../../public/solbook-logo.png';
import './Logo.css';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate('/')}>
      <img src={logo} alt="솔북 로고" className="logo-image" />
    </div>
  );
};

export default Logo;
