import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import trending1 from "../assets/img/trending1.png";
import trending2 from "../assets/img/trending2.png";
import trending3 from "../assets/img/trending3.png";
import starter1 from "../assets/img/starter1.jpg";
import starter2 from "../assets/img/starter2.jpg";
import starter3 from "../assets/img/starter3.jpg";
import reviewer1 from "../assets/img/reviewer1.png";
import reviewer2 from "../assets/img/reviewer2.png";
import reviewer3 from "../assets/img/reviewer3.png";
import reviewer4 from "../assets/img/reviewer4.png";
import reviewer5 from "../assets/img/reviewer5.png";
import reviewer6 from "../assets/img/reviewer6.png";
import logo_web from "../assets/img/logo_web.png";
import appstore from "../assets/img/appstore.png";
import playmarket from "../assets/img/playmarket.png";

export default function Restaurant() {
  return (
    <>
      <div className="offer-section py-4">
        <div className="container position-relative">
          <img alt="#" src={trending1} className="restaurant-pic" />
          <div className="pt-3 text-white">
            <h2 className="font-weight-bold">Conrad Chicago Restaurant</h2>
            <p className="text-white m-0">963 Madyson Drive Suite 679</p>
            <div className="rating-wrap d-flex align-items-center mt-2">
              <ul className="rating-stars list-unstyled">
                <li>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star"></i>
                </li>
              </ul>
              <p className="label-rating text-white ml-2 small">
                {" "}
                (245 Reviews)
              </p>
            </div>
          </div>
          <div className="pb-4">
            <div className="row">
              <div className="col-6 col-md-2">
                <p className="text-white-50 font-weight-bold m-0 small">
                  Delivery
                </p>
                <p className="text-white m-0">Free</p>
              </div>
              <div className="col-6 col-md-2">
                <p className="text-white-50 font-weight-bold m-0 small">
                  Open time
                </p>
                <p className="text-white m-0">8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-3 bg-primary bg-primary mt-n3 rounded position-relative">
          <div className="d-flex align-items-center">
            <div className="feather_icon">
              <a href={void 0} className="text-decoration-none text-dark">
                <i className="p-2 bg-light rounded-circle font-weight-bold  feather-upload"></i>
              </a>
              <a href={void 0} className="text-decoration-none text-dark mx-2">
                <i className="p-2 bg-light rounded-circle font-weight-bold  feather-star"></i>
              </a>
              <a href={void 0} className="text-decoration-none text-dark">
                <i className="p-2 bg-light rounded-circle font-weight-bold feather-map-pin"></i>
              </a>
            </div>
            <a href={void 0} className="btn btn-sm btn-outline-light ml-auto">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <p className="font-weight-bold pt-4 m-0">FEATURED ITEMS</p>
          <OwlCarousel
            items={4}
            margin={8}
            slideBy={1}
            className="trending-slider rounded owl-carousel owl-theme"
            nav={true}
            navText={[
              "<div class='nav-btn prev-slide'></div>",
              "<div class='nav-btn next-slide'></div>",
            ]}
          >
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href={void 0}>
                    <img
                      alt="#"
                      src={trending1}
                      className="img-fluid item-img w-100"
                    />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href={void 0} className="text-black">
                        Famous Dave's Bar-B-Que
                      </a>
                    </h6>
                    <p className="text-gray mb-3">
                      Vegetarian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      {" "}
                      <span className="text-black-50"> $350 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href={void 0}>
                    <img
                      alt="#"
                      src={trending2}
                      className="img-fluid item-img w-100"
                    />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href={void 0} className="text-black">
                        Thai Famous Cuisine
                      </a>
                    </h6>
                    <p className="text-gray mb-3">
                      North Indian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      {" "}
                      <span className="text-black-50"> $250 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href={void 0}>
                    <img
                      alt="#"
                      src={trending3}
                      className="img-fluid item-img w-100"
                    />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href={void 0} className="text-black">
                        The osahan Restaurant
                      </a>
                    </h6>
                    <p className="text-gray mb-3">
                      North • Hamburgers • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      {" "}
                      <span className="text-black-50"> $500 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <a href={void 0}>
                    <img
                      alt="#"
                      src={trending2}
                      className="img-fluid item-img w-100"
                    />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href={void 0} className="text-black">
                        Thai Famous Cuisine
                      </a>
                    </h6>
                    <p className="text-gray mb-3">
                      North Indian • Indian • Pure veg
                    </p>
                    <p className="text-gray m-0">
                      {" "}
                      <span className="text-black-50"> $250 FOR TWO</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-md-8 pt-3">
            <div className="shadow-sm rounded bg-white mb-3 overflow-hidden">
              <div className="d-flex item-aligns-center">
                <p className="font-weight-bold h6 p-3 border-bottom mb-0 w-100">
                  Menu
                </p>
              </div>
              <div className="row m-0">
                <h6 className="p-3 m-0 bg-light w-100">
                  Quick Bites <small className="text-black-50">3 ITEMS</small>
                </h6>
                <div className="col-md-12 px-0 border-top">
                  <div className="">
                    <div className="p-3 border-bottom gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-danger non_veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Chicken Tikka Sub </h6>
                          <p className="text-muted mb-0">$250</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-danger non_veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">
                            Cheese corn Roll{" "}
                            <span className="badge badge-danger">
                              BEST SELLER
                            </span>
                          </h6>
                          <p className="text-muted mb-0">$600</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-danger non_veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">
                            Chicken Tikka Sub{" "}
                            <span className="badge badge-danger text-white">
                              Non veg
                            </span>
                          </h6>
                          <p className="text-muted mb-0">$250</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <h6 className="p-3 m-0 bg-light w-100">
                  Starters <small className="text-black-50">3 ITEMS</small>
                </h6>
                <div className="col-md-12 px-0 border-top">
                  <div className="">
                    <div className="p-3 border-bottom menu-list">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <img
                          alt="#"
                          src={starter1}
                          className="mr-3 rounded-pill "
                        />
                        <div className="media-body">
                          <h6 className="mb-1">Chicken Tikka Sub </h6>
                          <p className="text-muted mb-0">$250</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom menu-list">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <img
                          alt="#"
                          src={starter2}
                          className="mr-3 rounded-pill "
                        />
                        <div className="media-body">
                          <h6 className="mb-1">
                            Cheese corn Roll{" "}
                            <span className="badge badge-danger">
                              BEST SELLER
                            </span>
                          </h6>
                          <p className="text-muted mb-0">$600</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom menu-list">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <img
                          alt="#"
                          src={starter3}
                          className="mr-3 rounded-pill "
                        />
                        <div className="media-body">
                          <h6 className="mb-1">
                            Chicken Tikka Sub{" "}
                            <span className="badge badge-success">
                              Pure Veg
                            </span>
                          </h6>
                          <p className="text-muted mb-0">$250</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <h6 className="p-3 m-0 bg-light w-100">
                  Soups <small className="text-black-50">8 ITEMS</small>
                </h6>
                <div className="col-md-12 px-0 border-top">
                  <div className="bg-white">
                    <div className="p-3 border-bottom gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-danger non_veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Chicken Tikka Sub </h6>
                          <p className="text-muted mb-0">$250</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-danger non_veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">
                            Cheese corn Roll{" "}
                            <span className="badge badge-danger">
                              BEST SELLER
                            </span>
                          </h6>
                          <p className="text-muted mb-0">$600</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-success veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">
                            Chicken Tikka Sub{" "}
                            <span className="badge badge-success">
                              Pure Veg
                            </span>
                          </h6>
                          <p className="text-muted mb-0">$250</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-success veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">Chicken Tikka Sub </h6>
                          <p className="text-muted mb-0">$250</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-danger non_veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">
                            Cheese corn Roll{" "}
                            <span className="badge badge-danger">
                              BEST SELLER
                            </span>
                          </h6>
                          <p className="text-muted mb-0">$600</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 gold-members">
                      <span className="float-right">
                        <a
                          href={void 0}
                          className="btn btn-outline-secondary btn-sm"
                          data-toggle="modal"
                          data-target="#extras"
                        >
                          ADD
                        </a>
                      </span>
                      <div className="media">
                        <div className="mr-3 font-weight-bold text-success veg">
                          .
                        </div>
                        <div className="media-body">
                          <h6 className="mb-1">
                            Chicken Tikka Sub{" "}
                            <span className="badge badge-success">
                              Pure Veg
                            </span>
                          </h6>
                          <p className="text-muted mb-0">$250</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div
                id="ratings-and-reviews"
                className="bg-white shadow-sm d-flex align-items-center rounded p-3 mb-3 clearfix restaurant-detailed-star-rating"
              >
                <h6 className="mb-0">Rate this Place</h6>
                <div className="star-rating ml-auto">
                  <div className="d-inline-block h6 m-0">
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star text-warning"></i>
                    <i className="feather-star"></i>
                  </div>
                  <b className="text-black ml-2">334</b>
                </div>
              </div>
              <div className="bg-white rounded p-3 mb-3 clearfix graph-star-rating rounded shadow-sm">
                <h6 className="mb-0 mb-1">Ratings and Reviews</h6>
                <p className="text-muted mb-4 mt-1 small">Rated 3.5 out of 5</p>
                <div className="graph-star-rating-body">
                  <div className="rating-list">
                    <div className="rating-list-left font-weight-bold small">
                      5 Star
                    </div>
                    <div className="rating-list-center">
                      <div className="progress">
                        <div
                          role="progressbar"
                          className="progress-bar bg-info"
                          aria-valuenow="56"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "56%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-list-right font-weight-bold small">
                      56 %
                    </div>
                  </div>
                  <div className="rating-list">
                    <div className="rating-list-left font-weight-bold small">
                      4 Star
                    </div>
                    <div className="rating-list-center">
                      <div className="progress">
                        <div
                          role="progressbar"
                          className="progress-bar bg-info"
                          aria-valuenow="23"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "23%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-list-right font-weight-bold small">
                      23 %
                    </div>
                  </div>
                  <div className="rating-list">
                    <div className="rating-list-left font-weight-bold small">
                      3 Star
                    </div>
                    <div className="rating-list-center">
                      <div className="progress">
                        <div
                          role="progressbar"
                          className="progress-bar bg-info"
                          aria-valuenow="11"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "11%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-list-right font-weight-bold small">
                      11 %
                    </div>
                  </div>
                  <div className="rating-list">
                    <div className="rating-list-left font-weight-bold small">
                      2 Star
                    </div>
                    <div className="rating-list-center">
                      <div className="progress">
                        <div
                          role="progressbar"
                          className="progress-bar bg-info"
                          aria-valuenow="6"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "6%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-list-right font-weight-bold small">
                      6 %
                    </div>
                  </div>
                  <div className="rating-list">
                    <div className="rating-list-left font-weight-bold small">
                      1 Star
                    </div>
                    <div className="rating-list-center">
                      <div className="progress">
                        <div
                          role="progressbar"
                          className="progress-bar bg-info"
                          aria-valuenow="4"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "4%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="rating-list-right font-weight-bold small">
                      4 %
                    </div>
                  </div>
                </div>
                <div className="graph-star-rating-footer text-center mt-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-block btn-sm"
                  >
                    Rate and Review
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 mb-3 restaurant-detailed-ratings-and-reviews shadow-sm rounded">
                <a className="text-primary float-right" href={void 0}>
                  Top Rated
                </a>
                <h6 className="mb-1">All Ratings and Reviews</h6>
                <div className="reviews-members py-3">
                  <div className="media">
                    <a href={void 0}>
                      <img
                        alt="#"
                        src={reviewer1}
                        className="mr-3 rounded-pill"
                      />
                    </a>
                    <div className="media-body">
                      <div className="reviews-members-header">
                        <div className="star-rating float-right">
                          <div
                            className="d-inline-block"
                            style={{ fontSize: "14px" }}
                          >
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star"></i>
                          </div>
                        </div>
                        <h6 className="mb-0">
                          <a className="text-dark" href={void 0}>
                            Trump
                          </a>
                        </h6>
                        <p className="text-muted small">Tue, 20 Mar 2020</p>
                      </div>
                      <div className="reviews-members-body">
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of
                          classNameNameical Latin literature from 45 BC, making
                          it over 2000 years old.
                        </p>
                      </div>
                      <div className="reviews-members-footer">
                        <a
                          className="total-like btn btn-sm btn-outline-primary"
                          href={void 0}
                        >
                          <i className="feather-thumbs-up"></i> 856M
                        </a>{" "}
                        <a
                          className="total-like btn btn-sm btn-outline-primary"
                          href={void 0}
                        >
                          <i className="feather-thumbs-down"></i> 158K
                        </a>
                        <span className="total-like-user-main ml-2" dir="rtl">
                          <a href={void 0} aria-describedby="tooltip-top0">
                            <img
                              alt="#"
                              src={reviewer3}
                              className="total-like-user rounded-pill"
                            />
                          </a>
                          <a href={void 0} aria-describedby="tooltip-top1">
                            <img
                              alt="#"
                              src={reviewer4}
                              className="total-like-user rounded-pill"
                            />
                          </a>
                          <a href={void 0}>
                            <img
                              alt="#"
                              src={reviewer5}
                              className="total-like-user rounded-pill"
                            />
                          </a>
                          <a href={void 0} aria-describedby="tooltip-top3">
                            <img
                              alt="#"
                              src={reviewer6}
                              className="total-like-user rounded-pill"
                            />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="reviews-members py-3">
                  <div className="media">
                    <a href={void 0}>
                      <img
                        alt="#"
                        src={reviewer2}
                        className="mr-3 rounded-pill"
                      />
                    </a>
                    <div className="media-body">
                      <div className="reviews-members-header">
                        <div className="star-rating float-right">
                          <div
                            className="d-inline-block"
                            style={{ fontSize: "14px" }}
                          >
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star"></i>
                          </div>
                        </div>
                        <h6 className="mb-0">
                          <a className="text-dark" href={void 0}>
                            Jhon Smith
                          </a>
                        </h6>
                        <p className="text-muted small">Tue, 20 Mar 2020</p>
                      </div>
                      <div className="reviews-members-body">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                      <div className="reviews-members-footer">
                        <a
                          className="total-like btn btn-sm btn-outline-primary"
                          href={void 0}
                        >
                          <i className="feather-thumbs-up"></i> 88K
                        </a>{" "}
                        <a
                          className="total-like btn btn-sm btn-outline-primary"
                          href={void 0}
                        >
                          <i className="feather-thumbs-down"></i> 1K
                        </a>
                        <span className="total-like-user-main ml-2" dir="rtl">
                          <a href={void 0}>
                            <img
                              alt="#"
                              src={reviewer3}
                              className="total-like-user rounded-pill"
                            />
                          </a>
                          <a href={void 0}>
                            <img
                              alt="#"
                              src={reviewer4}
                              className="total-like-user rounded-pill"
                            />
                          </a>
                          <a href={void 0}>
                            <img
                              alt="#"
                              src={reviewer5}
                              className="total-like-user rounded-pill"
                            />
                          </a>
                          <a href={void 0}>
                            <img
                              alt="#"
                              src={reviewer6}
                              className="total-like-user rounded-pill"
                            />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <a
                  className="text-center w-100 d-block mt-3 font-weight-bold"
                  href={void 0}
                >
                  See All Reviews
                </a>
              </div>
              <div className="bg-white p-3 rating-review-select-page rounded shadow-sm">
                <h6 className="mb-3">Leave Comment</h6>
                <div className="d-flex align-items-center mb-3">
                  <p className="m-0 small">Rate the Place</p>
                  <div className="star-rating ml-auto">
                    <div className="d-inline-block">
                      <i className="feather-star text-warning"></i>
                      <i className="feather-star text-warning"></i>
                      <i className="feather-star text-warning"></i>
                      <i className="feather-star text-warning"></i>
                      <i className="feather-star"></i>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label className="form-label small">Your Comment</label>
                    <textarea className="form-control"></textarea>
                  </div>
                  <div className="form-group mb-0">
                    <button type="button" className="btn btn-primary btn-block">
                      {" "}
                      Submit Comment{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-3">
            <div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
              <div className="d-flex border-bottom osahan-cart-item-profile bg-white p-3">
                <img
                  alt="osahan"
                  src={starter1}
                  className="mr-3 rounded-circle img-fluid"
                />
                <div className="d-flex flex-column">
                  <h6 className="mb-1 font-weight-bold">
                    Spice Hut Indian Restaurant
                  </h6>
                  <p className="mb-0 small text-muted">
                    <i className="feather-map-pin"></i> 2036 2ND AVE, NEW YORK,
                    NY 10029
                  </p>
                </div>
              </div>
              <div className="bg-white border-bottom py-2">
                <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                    <div className="mr-2 text-danger">&middot;</div>
                    <div className="media-body">
                      <p className="m-0">Chicken Tikka Sub</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="count-number float-right">
                      <button
                        type="button"
                        className="btn-sm left dec btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-minus"></i>{" "}
                      </button>
                      <input
                        className="count-number-input"
                        type="text"
                        readOnly=""
                      />
                      <button
                        type="button"
                        className="btn-sm right inc btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-plus"></i>{" "}
                      </button>
                    </span>
                    <p className="text-gray mb-0 float-right ml-2 text-muted small">
                      $628
                    </p>
                  </div>
                </div>
                <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                    <div className="mr-2 text-danger">&middot;</div>
                    <div className="media-body">
                      <p className="m-0">Methi Chicken Dry</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="count-number float-right">
                      <button
                        type="button"
                        className="btn-sm left dec btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-minus"></i>{" "}
                      </button>
                      <input
                        className="count-number-input"
                        type="text"
                        readOnly=""
                      />
                      <button
                        type="button"
                        className="btn-sm right inc btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-plus"></i>{" "}
                      </button>
                    </span>
                    <p className="text-gray mb-0 float-right ml-2 text-muted small">
                      $628
                    </p>
                  </div>
                </div>
                <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                    <div className="mr-2 text-danger">&middot;</div>
                    <div className="media-body">
                      <p className="m-0">Reshmi Kebab</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="count-number float-right">
                      <button
                        type="button"
                        className="btn-sm left dec btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-minus"></i>{" "}
                      </button>
                      <input
                        className="count-number-input"
                        type="text"
                        readOnly=""
                      />
                      <button
                        type="button"
                        className="btn-sm right inc btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-plus"></i>{" "}
                      </button>
                    </span>
                    <p className="text-gray mb-0 float-right ml-2 text-muted small">
                      $628
                    </p>
                  </div>
                </div>
                <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                    <div className="mr-2 text-success">&middot;</div>
                    <div className="media-body">
                      <p className="m-0">Lemon Cheese Dry</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="count-number float-right">
                      <button
                        type="button"
                        className="btn-sm left dec btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-minus"></i>{" "}
                      </button>
                      <input
                        className="count-number-input"
                        type="text"
                        readOnly=""
                      />
                      <button
                        type="button"
                        className="btn-sm right inc btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-plus"></i>{" "}
                      </button>
                    </span>
                    <p className="text-gray mb-0 float-right ml-2 text-muted small">
                      $628
                    </p>
                  </div>
                </div>
                <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2">
                  <div className="media align-items-center">
                    <div className="mr-2 text-success">&middot;</div>
                    <div className="media-body">
                      <p className="m-0">Rara Paneer</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="count-number float-right">
                      <button
                        type="button"
                        className="btn-sm left dec btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-minus"></i>{" "}
                      </button>
                      <input
                        className="count-number-input"
                        type="text"
                        readOnly=""
                      />
                      <button
                        type="button"
                        className="btn-sm right inc btn btn-outline-secondary"
                      >
                        {" "}
                        <i className="feather-plus"></i>{" "}
                      </button>
                    </span>
                    <p className="text-gray mb-0 float-right ml-2 text-muted small">
                      $628
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 py-3 border-bottom clearfix">
                <div className="input-group-sm mb-2 input-group">
                  <input
                    placeholder="Enter promo code"
                    type="text"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary">
                      <i className="feather-percent"></i> APPLY
                    </button>
                  </div>
                </div>
                <div className="mb-0 input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="feather-message-square"></i>
                    </span>
                  </div>
                  <textarea
                    placeholder="Any suggestions? We will pass it on..."
                    aria-label="With textarea"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="bg-white p-3 clearfix border-bottom">
                <p className="mb-1">
                  Item Total{" "}
                  <span className="float-right text-dark">$3140</span>
                </p>
                <p className="mb-1">
                  Restaurant Charges{" "}
                  <span className="float-right text-dark">$62.8</span>
                </p>
                <p className="mb-1">
                  Delivery Fee
                  <span className="text-info ml-1">
                    <i className="feather-info"></i>
                  </span>
                  <span className="float-right text-dark">$10</span>
                </p>
                <p className="mb-1 text-success">
                  Total Discount
                  <span className="float-right text-success">$1884</span>
                </p>
                <hr />
                <h6 className="font-weight-bold mb-0">
                  TO PAY <span className="float-right">$1329</span>
                </h6>
              </div>
              <div className="p-3">
                <a className="btn btn-success btn-block btn-lg" href={void 0}>
                  PAY $1329<i className="feather-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <footer className="section-footer border-top bg-dark">
        <div className="container">
          <section className="footer-top padding-y py-5">
            <div className="row pt-3">
              <aside className="col-md-4 footer-about">
                <article className="d-flex pb-3">
                  <div>
                    <img
                      alt="#"
                      src={logo_web}
                      className="logo-footer mr-3"
                    />
                  </div>
                  <div>
                    <h6 className="title text-white">About Us</h6>
                    <p className="text-muted">
                      Some short text about company like You might remember the
                      Dell computer commercials in which a youth reports.
                    </p>
                    <div className="d-flex align-items-center">
                      <a
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Facebook"
                        target="_blank"
                        href={void 0}
                      >
                        <i className="feather-facebook"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Instagram"
                        target="_blank"
                        href={void 0}
                      >
                        <i className="feather-instagram"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Youtube"
                        target="_blank"
                        href={void 0}
                      >
                        <i className="feather-youtube"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Twitter"
                        target="_blank"
                        href={void 0}
                      >
                        <i className="feather-twitter"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </aside>
              <aside className="col-sm-3 col-md-2 text-white">
                <h6 className="title">Error Pages</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Not found
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Maintence
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Coming Soon
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-3 col-md-2 text-white">
                <h6 className="title">Services</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Delivery Support
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-3  col-md-2 text-white">
                <h6 className="title">For users</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      {" "}
                      User Login{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      {" "}
                      User register{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      {" "}
                      Forgot Password{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      {" "}
                      Account Setting{" "}
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-3  col-md-2 text-white">
                <h6 className="title">More Pages</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      {" "}
                      Trending{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      {" "}
                      Most popular{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      {" "}
                      Restaurant Details{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      {" "}
                      Favorites{" "}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="footer-center border-top padding-y py-5">
            <h6 className="title text-white">Countries</h6>
            <div className="row">
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      India
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Indonesia
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Ireland
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Italy
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Lebanon
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Malaysia
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      New Zealand
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Philippines
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Poland
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Portugal
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Australia
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Brasil
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Canada
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Chile
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Czech Republic
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Turkey
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      UAE
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      United Kingdom
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      United States
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Sri Lanka
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Qatar
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Singapore
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Slovakia
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      South Africa
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Green Land
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Pakistan
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Bangladesh
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Bhutaan
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href={void 0} className="text-muted">
                      Nepal
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>
        </div>

        <section className="footer-copyright border-top py-3 bg-light">
          <div className="container d-flex align-items-center">
            <p className="mb-0"> © 2020 Company All rights reserved </p>
            <p className="text-muted mb-0 ml-auto d-flex align-items-center">
              <a href={void 0} className="d-block">
                <img alt="#" src={appstore} height="40" />
              </a>
              <a href={void 0} className="d-block ml-3">
                <img alt="#" src={playmarket} height="40" />
              </a>
            </p>
          </div>
        </section>
      </footer> */}

      <div
        className="modal fade"
        id="extras"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Extras</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="recepie-body">
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio1f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1f"
                    >
                      Tuna <span className="text-muted">+$35.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio2f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio2f"
                    >
                      Salmon <span className="text-muted">+$20.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio3f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio3f"
                    >
                      Wasabi <span className="text-muted">+$25.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio4f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio4f"
                    >
                      Unagi <span className="text-muted">+$10.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio5f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio5f"
                    >
                      Vegetables <span className="text-muted">+$5.00</span>
                    </label>
                  </div>
                  <div className="custom-control custom-radio border-bottom py-2">
                    <input
                      type="radio"
                      id="customRadio6f"
                      name="location"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio6f"
                    >
                      Noodles <span className="text-muted">+$30.00</span>
                    </label>
                  </div>
                  <h6 className="font-weight-bold mt-4">QUANTITY</h6>
                  <div className="d-flex align-items-center">
                    <p className="m-0">1 Item</p>
                    <div className="ml-auto">
                      <span className="count-number">
                        <button
                          type="button"
                          className="btn-sm left dec btn btn-outline-secondary"
                        >
                          {" "}
                          <i className="feather-minus"></i>{" "}
                        </button>
                        <input
                          className="count-number-input"
                          type="text"
                          readOnly=""
                        />
                        <button
                          type="button"
                          className="btn-sm right inc btn btn-outline-secondary"
                        >
                          {" "}
                          <i className="feather-plus"></i>{" "}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer p-0 border-0">
              <div className="col-6 m-0 p-0">
                <button
                  type="button"
                  className="btn border-top btn-lg btn-block"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
              <div className="col-6 m-0 p-0">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
