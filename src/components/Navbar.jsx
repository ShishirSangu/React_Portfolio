// import logo from "../assets/shishirlogo.png";
// import logo from "../assets/kevinRus hLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSalesforce } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10 " src={logo} alt="logo" /> */}
        {/* <h1 className="mx-2 w-20 text-white-500 font-serif text-2xl">$h!$h!R</h1> */}
        {/* <img src={logo} alt="logo" /> */}
      </div> 
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shishirsangu/" target="_blank" >< FaLinkedin /></a>
        <a href="https://github.com/ShishirSangu" target="_blank">< FaGithub /></a>
        <a href="https://x.com/Shishir_sangu" target="_blank">< FaSquareXTwitter /></a>
        <a href="https://www.salesforce.com/trailblazer/shishirmp" target="_blank">< FaSalesforce /></a>
      </div>
    </nav>
  )
}

export default Navbar;