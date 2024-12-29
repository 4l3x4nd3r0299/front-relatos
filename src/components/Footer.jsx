import React from 'react';
import '../css/footer.css'; // Archivo CSS para estilos del footer

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.</p>
      <ul className="footer__list">
        <li className="footer__item"><a href="/terms" className="footer__link">Términos y condiciones</a></li>
        <li className="footer__item"><a href="/privacy" className="footer__link">Política de privacidad</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
