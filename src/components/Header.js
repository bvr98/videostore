import "../css/Header.css";
import React from "react";


const Header = () => {

  return (
    <React.Fragment>
    <span onClick={() => window.scroll(0, 0)} className="header">
      VUDU  
    </span>
      </React.Fragment>
  );


};

export default Header;
