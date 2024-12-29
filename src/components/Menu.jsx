import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/menu.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="menu">
      <h1 className="menu__logo" onClick={() => handleNavigation('/')}>
        Relatos de Papel
      </h1>
      <ul className="menu__list">
        <li className="menu__item">
          <button className="menu__link" onClick={() => handleNavigation('/')}>
            Inicio
          </button>
        </li>
        <li className="menu__item">
          <button className="menu__link" onClick={() => handleNavigation('/main')}>
            Libros
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
