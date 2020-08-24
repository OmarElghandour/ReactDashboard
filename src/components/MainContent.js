import React from "react";
import { Dropdown } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const MainContent = () => {
  return (
          <div className="no-padding col-md-9">
          <section className="content">
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
            <div className="main-content">
              <h2>content</h2>
              <div className="row">
                <div className="col-3">
                  <div className="box">
                    <div className="overview_inner">
                      <div className="icon">
                        <FontAwesome name="fas fa-user" />
                      </div>
                      <div className="text">
                        <h5>10368</h5>
                        <p>Online member</p>
                      </div>
                      {/* <div class="canvas"> */}
                      <img
                        width="150px"
                        height="120px"
                        src="https://cdn0.iconfinder.com/data/icons/business-381/500/business-work_12-512.png"
                        alt=""
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="box revenue">
                    <div className="overview_inner">
                      <div className="icon">
                        <FontAwesome name="fas fa-user" />
                      </div>
                      <div className="text">
                        <h5>10368</h5>
                        <p>Online member</p>
                      </div>
                      {/* <div class="canvas"> */}
                      <img
                        width="150px"
                        height="120px"
                        src="https://cdn0.iconfinder.com/data/icons/business-381/500/business-work_12-512.png"
                        alt=""
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="box most-visted">
                    <div className="overview_inner">
                      <div className="icon">
                        <FontAwesome name="fas fa-user" />
                      </div>
                      <div className="text">
                        <h5>10368</h5>
                        <p>Online member</p>
                      </div>
                      {/* <div class="canvas"> */}
                      <img
                        width="150px"
                        height="120px"
                        src="https://cdn0.iconfinder.com/data/icons/business-381/500/business-work_12-512.png"
                        alt=""
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="box weelely">
                    <div className="overview_inner">
                      <div className="icon">
                        <FontAwesome name="fas fa-user" />
                      </div>
                      <div className="text">
                        <h5>10368</h5>
                        <p>Online member</p>
                      </div>
                      {/* <div class="canvas"> */}
                      <img
                        width="150px"
                        height="120px"
                        src="https://cdn0.iconfinder.com/data/icons/business-381/500/business-work_12-512.png"
                        alt=""
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="data-section">
                <div className="row">
                  <div className="col-md-9">
                    <h2>Earnings By Items</h2>
                    <div className="table">
                      <table>
                        <thead>
                          <tr>
                            <th>header 1</th>
                            <th>header 1</th>
                            <th>header 1</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>data 1</td>
                            <td>data 2</td>
                            <td>data 3</td>
                          </tr>
                          <tr>
                            <td>data 1</td>
                            <td>data 2</td>
                            <td>data 3</td>
                          </tr>
                          <tr>
                            <td>data 1</td>
                            <td>data 2</td>
                            <td>data 3</td>
                          </tr>
                          <tr>
                            <td>data 1</td>
                            <td>data 2</td>
                            <td>data 3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h3>Top Countries</h3>
                    <div className="top-countries">
                      <ul>
                        <li>
                          <h6>United States </h6>
                          <h6>$199</h6>
                        </li>
                        <li>
                          <h6>United States </h6>
                          <h6>$199</h6>
                        </li>
                        <li>
                          <h6>United States </h6>
                          <h6>$199</h6>
                        </li>
                        <li>
                          <h6>United States </h6>
                          <h6>$199</h6>
                        </li>
                        <li>
                          <h6>United States </h6>
                          <h6>$199</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
  );
};

export default MainContent;
