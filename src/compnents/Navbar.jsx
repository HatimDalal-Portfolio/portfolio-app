import logo from '../assets/new.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-1">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src={logo} alt="logo" />
      </div>

      {/* Social Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hatimdalalin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedinIn />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/HatimDalal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
