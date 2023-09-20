import React, { useEffect, useState } from 'react'
import Logo from './images/logo'
import { Navbar } from 'react-bootstrap';
import axios from 'axios';
import Menu from './dropdown';
import Timer from './timer';
import Contact from './Contact';

const NavBar = () => {
    const [names, setNames] = useState([]);
    const fetchData = async () => {
      const fetchedResponses = await axios.get('http://localhost:8080/api/routes/getSymbols');
      setNames(fetchedResponses.data);
    }
    useEffect(() => {
      fetchData()
    }, [])
    const [isToggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!isToggled);
  };
  return (
    <div>
         <div>
      <Navbar expand="lg" className="navbar-container-xy">
        <Navbar.Brand href="#home">
          <Logo/>
        </Navbar.Brand>
        <div className='navbar-container-ab'>
        <div className="non-button">INR</div>
       <Menu names={names}/>
       <div className="non-button">BUY</div>
        </div>
        <div className='navbar-container-ab'>
          <Timer/>
          <Contact/>
          <div className={`toggle-container ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
            <div className={`toggle-circle ${isToggled ? 'right' : 'left'}`}></div>
          </div>
        </div>
      </Navbar>
      {/* <button onClick={handleBgColorChange}>Change Background Color</button> */}
    </div>
    </div>
  )
}

export default NavBar