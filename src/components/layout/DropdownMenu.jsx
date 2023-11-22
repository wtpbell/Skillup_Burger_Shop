import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      {name:"Orders", path:"/myorders"},
      {name:"Logout", path:"/login"}
      
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger" >
        <div className="container" >
          {/* <a className="navbar-brand" href="#"></a> */}
          <div className="btn-group">
            <button
              type="button"
              className="btn bg-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
            <IoPersonCircle size={25} style={{color: 'white'}}/>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;