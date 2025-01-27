import logo from '../assets/new.png';
import {FaLinkedinIn} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-1">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-16" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedinIn />
          <FaGithub/>
        </div>
    </nav>
  )
}

export default Navbar;