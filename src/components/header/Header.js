import './header.css';
import {
  IoChevronBackOutline,
  IoMicSharp,
  IoSettingsSharp,
} from 'react-icons/io5';

function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <IoChevronBackOutline
          className="backOutline"
          color="#112a46"
          size="4rem"
        />
        <p className="year">2023</p>
        <p className="view-title">Fruits/Calories</p>
        <IoMicSharp className="mic-icon" color="#112a46" size="4rem" />
        <IoSettingsSharp className="gear-icon" color="#112a46" size="4rem" />
      </nav>
    </div>
  );
}

export default Header;
