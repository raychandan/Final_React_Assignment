import { Link } from "react-router-dom";
import starter1 from "../assets/img/starter1.jpg";

export default function Checkout() {
  return (
    <>
      <div className="osahan-checkout">
        <div className="container position-relative">
          <div className="py-5 row">
            <div className="col-md-8 mb-3">
              <div>
                <div className="osahan-cart-item mb-3 rounded shadow-sm bg-white overflow-hidden">
                  <div className="osahan-cart-item-profile bg-white p-3">
                    <div className="d-flex flex-column">
                      <h6 className="mb-3 font-weight-bold">
                        Delivery Address
                      </h6>
                      <div className="row">
                        <div className="custom-control col-lg-6 custom-radio mb-3 position-relative border-custom-radio">
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label w-100"
                            htmlFor="customRadioInline1"
                          >
                            <div>
                              <div className="p-3 bg-white rounded shadow-sm w-100">
                                <div className="d-flex align-items-center mb-2">
                                  <h6 className="mb-0">Home</h6>
                                  <p className="mb-0 badge badge-success ml-auto">
                                    <i className="icofont-check-circled"></i>{" "}
                                    Default
                                  </p>
                                </div>
                                <p className="small text-muted m-0">
                                  1001 Veterans Blvd
                                </p>
                                <p className="small text-muted m-0">
                                  Redwood City, CA 94063
                                </p>
                              </div>
                              <a
                                href={void 0}
                                data-toggle="modal"
                                data-target="#exampleModal"
                                className="btn btn-block btn-light border-top"
                              >
                                Edit
                              </a>
                            </div>
                          </label>
                        </div>
                        <div className="custom-control col-lg-6 custom-radio position-relative border-custom-radio">
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label w-100"
                            htmlFor="customRadioInline2"
                          >
                            <div>
                              <div className="p-3 rounded bg-white shadow-sm w-100">
                                <div className="d-flex align-items-center mb-2">
                                  <h6 className="mb-0">Work</h6>
                                  <p className="mb-0 badge badge-light ml-auto">
                                    <i className="icofont-check-circled"></i>{" "}
                                    Select
                                  </p>
                                </div>
                                <p className="small text-muted m-0">
                                  Model Town, Ludhiana
                                </p>
                                <p className="small text-muted m-0">
                                  Punjab 141002, India
                                </p>
                              </div>
                              <a
                                href={void 0}
                                data-toggle="modal"
                                data-target="#exampleModal"
                                className="btn btn-block btn-light border-top"
                              >
                                Edit
                              </a>
                            </div>
                          </label>
                        </div>
                      </div>
                      <a
                        className="btn btn-primary"
                        href={void 0}
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        {" "}
                        ADD NEW ADDRESS{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion mb-3 rounded shadow-sm bg-white overflow-hidden"
                  id="accordionExample"
                >
                  <div className="osahan-card bg-white border-bottom overflow-hidden">
                    <div className="osahan-card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="d-flex p-3 align-items-center btn btn-link w-100"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <i className="feather-credit-card mr-3"></i>{" "}
                          Credit/Debit Card
                          <i className="feather-chevron-down ml-auto"></i>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="osahan-card-body border-top p-3">
                        <h6 className="m-0">Add new card</h6>
                        <p className="small">
                          WE ACCEPT{" "}
                          <span className="osahan-card ml-2 font-weight-bold">
                            ( Master Card / Visa Card / Rupay )
                          </span>
                        </p>
                        <form>
                          <div className="form-row">
                            <div className="col-md-12 form-group">
                              <label className="form-label font-weight-bold small">
                                Card number
                              </label>
                              <div className="input-group">
                                <input
                                  placeholder="Card number"
                                  type="number"
                                  className="form-control"
                                />
                                <div className="input-group-append">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                  >
                                    <i className="feather-credit-card"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8 form-group">
                              <label className="form-label font-weight-bold small">
                                Valid through(MM/YY)
                              </label>
                              <input
                                placeholder="Enter Valid through(MM/YY)"
                                type="number"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-4 form-group">
                              <label className="form-label font-weight-bold small">
                                CVV
                              </label>
                              <input
                                placeholder="Enter CVV Number"
                                type="number"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-12 form-group">
                              <label className="form-label font-weight-bold small">
                                Name on card
                              </label>
                              <input
                                placeholder="Enter Card number"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-12 form-group mb-0">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  id="custom-checkbox1"
                                  className="custom-control-input"
                                />
                                <label
                                  title=""
                                  type="checkbox"
                                  htmlFor="custom-checkbox1"
                                  className="custom-control-label small pt-1"
                                >
                                  Securely save this card for a faster checkout
                                  next time.
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="osahan-card bg-white border-bottom overflow-hidden">
                    <div className="osahan-card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="d-flex p-3 align-items-center btn btn-link w-100"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i className="feather-globe mr-3"></i> Net Banking
                          <i className="feather-chevron-down ml-auto"></i>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="osahan-card-body border-top p-3">
                        <form>
                          <div
                            className="btn-group btn-group-toggle w-100"
                            data-toggle="buttons"
                          >
                            <label className="btn btn-outline-secondary active">
                              <input type="radio" name="options" id="option1" />{" "}
                              HDFC
                            </label>
                            <label className="btn btn-outline-secondary">
                              <input type="radio" name="options" id="option2" />{" "}
                              ICICI
                            </label>
                            <label className="btn btn-outline-secondary">
                              <input type="radio" name="options" id="option3" />{" "}
                              AXIS
                            </label>
                          </div>
                          <hr />
                          <div className="form-row">
                            <div className="col-md-12 form-group mb-0">
                              <label className="form-label small font-weight-bold">
                                Select Bank
                              </label>
                              <br />
                              <select className="custom-select form-control">
                                <option>Bank</option>
                                <option>KOTAK</option>
                                <option>SBI</option>
                                <option>UCO</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="osahan-card bg-white overflow-hidden">
                    <div className="osahan-card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="d-flex p-3 align-items-center btn btn-link w-100"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <i className="feather-dollar-sign mr-3"></i> Cash on
                          Delivery
                          <i className="feather-chevron-down ml-auto"></i>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body border-top">
                        <h6 className="mb-3 mt-0 mb-3 font-weight-bold">
                          Cash
                        </h6>
                        <p className="m-0">
                          Please keep exact change handy to help us serve you
                          better
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
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
                      <i className="feather-map-pin"></i> 2036 2ND AVE, NEW
                      YORK, NY 10029
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
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Delivery Address</h5>
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
              <form className="">
                <div className="form-row">
                  <div className="col-md-12 form-group">
                    <label className="form-label">Delivery Area</label>
                    <div className="input-group">
                      <input
                        placeholder="Delivery Area"
                        type="text"
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          <i className="feather-map-pin"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <label className="form-label">Complete Address</label>
                    <input
                      placeholder="Complete Address e.g. house number, street name, landmark"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label className="form-label">Delivery Instructions</label>
                    <input
                      placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-0 col-md-12 form-group">
                    <label className="form-label">Nickname</label>
                    <div
                      className="btn-group btn-group-toggle w-100"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-outline-secondary active">
                        <input type="radio" name="options" id="option12" /> Home
                      </label>
                      <label className="btn btn-outline-secondary">
                        <input type="radio" name="options" id="option22" /> Work
                      </label>
                      <label className="btn btn-outline-secondary">
                        <input type="radio" name="options" id="option32" />{" "}
                        Other
                      </label>
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
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
