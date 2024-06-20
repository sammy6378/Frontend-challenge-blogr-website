import React from "react";
import icond from '..//images/iconl.svg'
import iconl from '..//images/iconl.svg'
import bar from '..//images/bar.svg'
import toggle from "../scripts/nav";
 function Header(){
    return(
        <>
        <div className="hero">
            <div className="mobile">
            <h2>BLOGR</h2>
            <img src={bar} alt="" onClick={toggle} />
            </div>
        <div className="nav">
            <div className="logo">
                <h2>BLOGR</h2>
                <nav>
                    <ul>
                        <li><a href="#">Product<img src={iconl} alt="" /></a></li>
                        <li><a href="#" >Company<img src={iconl} alt="" /></a></li>
                        <li className="dropdown"><a href="#">Connect<img src={iconl} alt="" /></a>
                        <div className="dropmenu">
                            <li><a href="#">Linkedln</a></li>
                            <li><a href="#">NewsLetter</a></li>
                            <li><a href="#">Contact</a></li>
                        </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="logs">
                <a href="#" className="login">Login</a>
                <a href="#" className="sign">Sign Up</a>
            </div>
            </div>

            <div className="about">
                <h2>A modern publishing platform</h2>
                <h3>Grow your audience and build your online brand</h3>
                <div className="links">
                <a href="#" className="btn">Start for Free</a>
                <a href="#" className="more">Learn More</a>
                </div>
            </div>
            </div>
            </>
    )
}

export default Header;