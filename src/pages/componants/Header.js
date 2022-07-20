import { Link } from "react-router-dom";
import logo_web from "../../assets/img/logo_web.png";
import one from "../../assets/img/user/1.jpg";

export default function Header() {
  return (
    <>
      <header className="section-header">
        <section className="header-main shadow-sm bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-1">
                <a href="home.html" className="brand-wrap mb-0">
                  <img alt="#" className="img-fluid" src={logo_web} />
                </a>
              </div>
              <div className="col-3 d-flex align-items-center m-none">
                <div className="dropdown mr-3">
                  <a
                    className="text-dark dropdown-toggle d-flex align-items-center py-3"
                    onClick={() => false}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div>
                      <i className="feather-map-pin mr-2 bg-light rounded-pill p-2 icofont-size"></i>
                    </div>
                    <div>
                      <p className="text-muted mb-0 small">Select Location</p>
                      Jawaddi Ludhiana...
                    </div>
                  </a>
                  <div
                    className="dropdown-menu p-0 drop-loc"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="osahan-country">
                      <div className="search_location bg-primary p-3 text-right">
                        <div className="input-group rounded shadow-sm overflow-hidden">
                          <div className="input-group-prepend">
                            <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
                              <i className="feather-search"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="shadow-none border-0 form-control"
                            placeholder="Enter Your Location"
                          />
                        </div>
                      </div>
                      <div className="p-3 border-bottom">
                        <a
                          onClick={() => false}
                          className="text-decoration-none"
                        >
                          <p className="font-weight-bold text-primary m-0">
                            <i className="feather-navigation"></i> New York, USA
                          </p>
                        </a>
                      </div>
                      <div className="filter">
                        <h6 className="px-3 py-3 bg-light pb-1 m-0 border-bottom">
                          Choose your country
                        </h6>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio1"
                          >
                            Afghanistan
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio2"
                          >
                            India
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio3"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio3"
                          >
                            USA
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio4"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio4"
                          >
                            Australia
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio5"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio5"
                          >
                            Japan
                          </label>
                        </div>
                        <div className="custom-control  px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio6"
                            name="location"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label py-3 w-100 px-3"
                            htmlFor="customRadio6"
                          >
                            China
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-8">
                <div className="d-flex align-items-center justify-content-end pr-5">
                  <a
                    onClick={() => false}
                    className="widget-header mr-4 text-dark"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-search h6 mr-2 mb-0"></i>{" "}
                      <span>Search</span>
                    </div>
                  </a>

                  <a
                    onClick={() => false}
                    className="widget-header mr-4 text-white btn bg-primary m-none"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-disc h6 mr-2 mb-0"></i>{" "}
                      <span>Offers</span>
                    </div>
                  </a>

                  <a
                    onClick={() => false}
                    className="widget-header mr-4 text-dark m-none"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-user h6 mr-2 mb-0"></i>{" "}
                      <span>Sign in</span>
                    </div>
                  </a>

                  <div className="dropdown mr-4 m-none">
                    <a
                      onClick={() => false}
                      className="dropdown-toggle text-dark py-3 d-block"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        alt="#"
                        src={one}
                        className="img-fluid rounded-circle header-user mr-2 header-user"
                      />{" "}
                      Hi Osahan
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" onClick={() => false}>
                        My account
                      </a>
                      <a className="dropdown-item" onClick={() => false}>
                        Delivery support
                      </a>
                      <a className="dropdown-item" onClick={() => false}>
                        Contant us
                      </a>
                      <a className="dropdown-item" onClick={() => false}>
                        Term of use
                      </a>
                      <a className="dropdown-item" onClick={() => false}>
                        Privacy policy
                      </a>
                      <a className="dropdown-item" onClick={() => false}>
                        Logout
                      </a>
                    </div>
                  </div>

                  <a
                    onClick={() => false}
                    className="widget-header mr-4 text-dark"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-shopping-cart h6 mr-2 mb-0"></i>{" "}
                      <span>Cart</span>
                    </div>
                  </a>
                  <a className="toggle" href={void 0}>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <div className="d-none">
        <div className="bg-primary p-3 d-flex align-items-center">
          <a className="toggle togglew toggle-2" href={void 0}>
            <span></span>
          </a>
          <h4 className="font-weight-bold m-0 text-white">Thanks :)</h4>
        </div>
      </div>

      <nav id="main-nav">
        <ul className="second-nav">
          <li>
            <a href={void 0}>
              <i className="feather-home mr-2"></i> Homepage
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-list mr-2"></i> My Orders
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-edit-2 mr-2"></i> Authenticationnnn
            </a>
            <ul>
              <li>
                <a href={void 0}>Login</a>
              </li>
              <li>
                <a href={void 0}>Register</a>
              </li>
              <li>
                <a href={void 0}>Forgot Password</a>
              </li>
              <li>
                <a href={void 0}>Verification</a>
              </li>
              <li>
                <a href={void 0}>Location</a>
              </li>
            </ul>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-heart mr-2"></i> Favorites
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-trending-up mr-2"></i> Trending
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-award mr-2"></i> Most Popular
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-paperclip mr-2"></i> Restaurant Detail
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-list mr-2"></i> Checkout
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-check-circle mr-2"></i> Successful
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-map-pin mr-2"></i> Live Map
            </a>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-user mr-2"></i> Profile
            </a>
            <ul>
              <li>
                <a href={void 0}>Profile</a>
              </li>
              <li>
                <a href={void 0}>Delivery support</a>
              </li>
              <li>
                <a href={void 0}>Contact Us</a>
              </li>
              <li>
                <a href={void 0}>Terms of use</a>
              </li>
              <li>
                <a href={void 0}>Privacy & Policy</a>
              </li>
            </ul>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-alert-triangle mr-2"></i> Error
            </a>
            <ul>
              <li>
                <a href={void 0}>Not Found</a>
              </li>
              <li>
                <a href={void 0}> Maintence</a>
              </li>
              <li>
                <a href={void 0}>Coming Soon</a>
              </li>
            </ul>
          </li>
          <li>
            <a href={void 0}>
              <i className="feather-link mr-2"></i> Navigation Link Example
            </a>
            <ul>
              <li>
                <a href={void 0}>Link Example 1</a>
                <ul>
                  <li>
                    <a href={void 0}>Link Example 1.1</a>
                    <ul>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href={void 0}>Link Example 1.2</a>
                    <ul>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                      <li>
                        <a href={void 0}>Link</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href={void 0}>Link Example 2</a>
              </li>
              <li>
                <a href={void 0}>Link Example 3</a>
              </li>
              <li>
                <a href={void 0}>Link Example 4</a>
              </li>
              <li data-nav-custom-content>
                <div className="custom-message">
                  You can add any custom content to your navigation items. This
                  text is just an example.
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className="email">
            <a className="text-danger" href={void 0}>
              <p className="h5 m-0">
                <i className="feather-home text-danger"></i>
              </p>
              Home
            </a>
          </li>
          <li className="github">
            <a href={void 0}>
              <p className="h5 m-0">
                <i className="feather-message-circle"></i>
              </p>
              FAQ
            </a>
          </li>
          <li className="ko-fi">
            <a href={void 0}>
              <p className="h5 m-0">
                <i className="feather-phone"></i>
              </p>
              Help
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
