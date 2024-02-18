import React, { useState } from 'react'
import MenCategory from './MenCategory';
import WomenCategory from './WomenCategory';
import KidsCategory from './KidsCategory';
import LifestyleCategory from './LifestyleCategory';
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);
  const [lifestyle, setLifestyle] = useState(false);
  const [active, setActive] = useState(true);

  function returnHandler(){
    setActive(true);
    setMen(false);
    setWomen(false);
    setKids(false);
    setLifestyle(false);
  }

  function onClickHandler(event){
    switch(event.target.textContent){
      case "Men":
        console.log("asfasd")
        setMen(true);
        setActive(false);
        break;
        case "Women":
          setWomen(true);
          setActive(false);
          break;
        case "Kids":
          setKids(true);
          setActive(false);
          break;
        case "Lifestyle":
          setLifestyle(true);
          setActive(false);
          break;
    }
  }
  return (
    <div className="hamburger-menu">
      {active && <><h3 className='hamburger-heading'>
      Products by Category
      </h3>
      <div className='hamburger-category'>
        <p onClick={onClickHandler}>Men</p>
        <p onClick={onClickHandler}>Women</p>
        <p onClick={onClickHandler}>Kids</p>
        <p onClick={onClickHandler}>Lifestyle</p>
      </div>
      </>}
      {(men||women||kids||lifestyle) 
        &&
        <div className='back-arrow' onClick={returnHandler}>
          <img className='back-arrow-icon' src="https://cdn-icons-png.flaticon.com/512/507/507257.png" alt="Go back"/>
          Go Back
        </div>
      }
      {men && <MenCategory />}

      {women && <WomenCategory />}

      {kids && <KidsCategory />}

      {lifestyle && <LifestyleCategory />}
    </div>
  );
}

export default HamburgerMenu