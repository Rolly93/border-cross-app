import React from "react";
import {Link} from "react-router-dom";

const NavigationLinks :React.FC = () => {

    return (
            <nav className="navbar">
              <ul className="navlist">
                <li>
                    <Link to='/DashboardPage'>DashBoard</Link>
                </li>
              </ul>                
            </nav>

    )
}
export default NavigationLinks