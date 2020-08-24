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


const MainContent = () => {
  return (
          <section className="content">
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
    );
};

export default MainContent;
