// import logo from "../assets/shishirlogo.png";
// import logo from "../assets/kevinRus hLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10 " src={logo} alt="logo" /> */}
        <h1 className="mx-2 w-20 text-orange-300 font-serif text-2xl">$h!<span className="text-yellow-200">$h!</span><span className="text-sky-200">R</span></h1>
        {/* <img src={logo} alt="logo" /> */}
      </div> 
      <div className="flex items-center justify-center gap-4 text-2xl">
        < FaLinkedin />
        < FaGithub />
        < FaSquareXTwitter />
        < FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar;