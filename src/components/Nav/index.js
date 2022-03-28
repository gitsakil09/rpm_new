import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import classes from "../../assets/styles/Nav.module.css";
import CopyIcon from "../Icons/CopyIcon";
import HomeIcon from "../Icons/HomeIcon";
export default function Nav() {
  return (
    <>
      <nav className={classes.mainMenu}>
        <div className="mt-5 ml-3 mb-5">
          <img src={Logo} alt="" />
        </div>
        <div className="w-[232px] ml-2 h-[1px] bg-white"></div>
        <ul>
          <li>
            <Link to="">
              <span className={classes.sidebarIcon}>
                <HomeIcon stroke="#fff" strokeWidth="2" />
              </span>
              <span className={classes.navText}>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/pay">
              <span className={classes.sidebarIcon}>
                <HomeIcon stroke="#fff" strokeWidth="2" />
              </span>
              <span className={classes.navText}>Pay</span>
            </Link>
          </li>
          <li>
            <Link to="/pre-alert">
              <span className={classes.sidebarIcon}>
                <FaHome className="text-3xl" />
              </span>
              <span className={classes.navText}>Pre Alert</span>
            </Link>
          </li>
          <li>
            <Link to="/calculator">
              <span className={classes.sidebarIcon}>
                <FaHome className="text-3xl" />
              </span>
              <span className={classes.navText}>Calculator</span>
            </Link>
          </li>

          <li>
            <a href="#my-modal-2">
              <span className={classes.sidebarIcon}>
                <FaHome className="text-3xl" />
              </span>
              <span className={classes.navText}>RPM Address</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="modal" id="my-modal-2">
        <div class="modal-box relative">
          <h3 class="font-bold text-xl">My web address</h3>
          <p className="mt-6">
            11190 NW 25TH ST STE 120 RPM96158 MIAMI, FL 33172-1917
          </p>
          <p>United States</p>
          <p>Phone number: ‪+18683498135‬</p>
          <div class="modal-action absolute right-4 top-0">
            <a href="#" class="text-blue-dark text-xl flex">
              copy
              <i className="ml-2">
                <CopyIcon stroke="#5888B5" strokeWidth="2" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
