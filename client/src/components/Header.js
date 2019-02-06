import React, { Component } from "react";

class Header extends Component{
    render() {
        return (
            <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Logo</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a>Login With Google</a></li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Header;