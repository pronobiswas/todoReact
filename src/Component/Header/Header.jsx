import React from 'react'
import './headerStyle.css'

const Header = () => {
  return (
    <>
      <div id="header">
        <div className="container">
          <nav>

            <div className="logo">
              <h1>Logo</h1>
            </div>

            <ul className="menuList">
              <li className="menuItem"><a href="#">Home</a></li>
              <li className="menuItem"><a href="#">About</a></li>
              <li className="menuItem"><a href="/blog">Blog</a></li>
              <li className="menuItem"><a href="/contact">Contact</a></li>
            </ul>

            <div className="user">
              <a href="#" className="login">LogIn</a>
              <a href="#" className="signup">SignUp</a>
            </div>

          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
