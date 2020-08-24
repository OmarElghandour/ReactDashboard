import React from 'react';
import { Dropdown } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a href="" ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }} >
        {children}
        &#x25bc;
    </a>
));

const Header = () => {
    return (
        // <div className="no-padding col-md-9">
            <div className="header">
                <div className="search-bar">
                    <input className="form-input" type="text" />
                    <a className="search-icon" type="submit">
                        <FontAwesome name="fas fa-search" />
                    </a>
                </div>
                <ul className="user-notfication">
                    {/* <span className="user-name">john doe</span> */}
                    <Dropdown>
                        <Dropdown.Toggle
                            as={CustomToggle}
                            variant="success"
                            id="dropdown-basic"
                        >
                            john doe{" "}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
              </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
              </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="user-image">
                        <img
                            width="100%"
                            height="100%"
                            src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/108371893_3118890418197448_6849241187604723800_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=2RtuthoeXUQAX_SyOps&_nc_ht=scontent-hbe1-1.xx&oh=4658e9d514365bb7d1123cc1ec25f41a&oe=5F63DB93"
                            alt=""
                        />
                    </div>
                    <ul className="notification-icons">
                        <li>
                            <a href>
                                <FontAwesome name="fas fa-bell" size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <FontAwesome name="fas fa-envelope" size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href>
                                <FontAwesome name="fas fa-comment" size="2x" />
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
        // </div>
    )
}

export default Header;