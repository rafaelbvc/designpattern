import { useState } from "react";
import Bars from "../../svgs/Bars";
import CoatOfArms from "../../svgs/CoatOfArms";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-coatofarms">
        <CoatOfArms svgWidth="46px" svgHeight="46px" svgFillColor="gold" />
        <div className="navbar-coatofarms-write">
          <span className="navbar-coatofarms-motorista">MOTORISTA</span>
          <span className="navbar-coatofarms-particular">PARTICULAR</span>
        </div>
      </div>
      <div className="navbar-menu">
        <Bars
          svgWidth="38px"
          svgHeight="38px"
          svgOnClick={() => setIsOpen(!isOpen)}
        />
        <div
          className={isOpen ? "navbar-modal-menu" : "navbar-modal-menu-hidden"}
        >
          modalmenu
        </div>
      </div>
    </div>
  );
};

export default Navbar;
