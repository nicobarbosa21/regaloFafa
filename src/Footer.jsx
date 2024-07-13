import { IoLogoInstagram } from 'react-icons/io';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import Twitter and LinkedIn icons

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#175145b0', color: 'white', padding: '20px', textAlign: 'center' }}>
      <p>Hecho por el pseudo-ingeniero Nicolas Barbosa</p>
      <a href="https://www.instagram.com/nicobarbosa21" target="_blank" rel="noopener noreferrer">
        <IoLogoInstagram />
      </a>
      {' | '}
      <a href="https://x.com/_nicobarbosa_" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      {' | '}
      <a href="https://www.linkedin.com/in/nicolas-barbosa-marchi-402314269/" target='_blank' rel='noopener noreferrer'>
        <FaLinkedinIn />
      </a>
    </footer>
  );
};

export default Footer;