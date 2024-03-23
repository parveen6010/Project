import React, { useState, useEffect } from 'react';
import logo from "./logo.jpeg";
import more from "./chevron-down.png";
import { IoSearch } from "react-icons/io5";
import "../Sass/Navbar.scss"; // Import your custom CSS file

const Navbar1 = () => {
  const [isMore, setIsMore] = useState(false);
  const [value, setValue] = useState(-1); 
  const [searchterm, setSearchterm] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const menuItems = ['Home', 'Electronics', 'Books', 'Music', 'Movies', 'Clothing', 'Games' , 'Furniture', 'Travel' , 'Botanical' , 'category name'];

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    setWindowWidth(windowWidth);

    if (windowWidth >= 1200) {
      setValue(Math.floor(windowWidth / 250));
    } else if (windowWidth >= 1035 && windowWidth < 1200) {
      setValue(2);
    } else if (windowWidth < 1035 && windowWidth >= 980) {
      setValue(1);
    } else if (windowWidth < 980 && windowWidth >= 850) {
      setValue(0);
    } else {
      setValue(-1);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar-content">
        <div className='logo-container'>
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="logo-text">E-COMM</h1>
        </div>
       

       <div className='menu-search'>
        <div className="menu-items-container">
          {menuItems.map((item, index) => (
            index <= value && (
              <a key={item} href="#" className="menu-item">
                {item.toUpperCase()}
              </a>
            )
          ))}
          {value < menuItems.length - 1 && (
            <div className="more-dropdown">
              <button className='more-button' onClick={() => setIsMore(!isMore)}>
                <h1 className="more-text">MORE</h1>
                <img src={more} alt="More" className="more-icon" />
              </button>
              {isMore && (
                <div className="more-dropdown-content">
                  {menuItems.map((item, index) => (
                    index > value && (
                      <a key={item} href="#" className="more-dropdown-item">
                        {item.toUpperCase()}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      
        <div className="search-container">
          <div className="search-icon-container">
            <IoSearch className="search-icon" />
          </div>
          <input
            type="text"
            placeholder="Search Something"
            value={searchterm}
            onChange={(e) => setSearchterm(e.target.value)}
            className="search-input"
          />
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
