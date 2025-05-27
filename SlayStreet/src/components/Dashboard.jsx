import React from 'react';

export default function Dashboard() {
  return (
    <>
      <div className="banner_section layout_padding">
        <div id="my_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row border_1">
                  <div className="col-md-4">
                    <div className="image_1">
                      <img src="images/img-1.png" alt="img-1" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h1 className="banner_taital">Big Sale Offer</h1>
                    <div className="buynow_bt active">
                      <a href="/">Buy Now</a>
                    </div>
                    <div className="contact_bt">
                      <a href="contact.html">Contact Us</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="image_2">
                      <img src="images/img-2.png" alt="img-2" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container">
                <div className="row border_1">
                  <div className="col-md-4">
                    <div className="image_1">
                      <img src="images/img-1.png" alt="img-1" style={{ width: '100%'  }} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h1 className="banner_taital">Big Sale Offer</h1>
                    <div className="buynow_bt active">
                      <a href="/">Buy Now</a>
                    </div>
                    <div className="contact_bt">
                      <a href="contact.html">Contact Us</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="image_2">
                      <img src="images/img-2.png" alt="img-2" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container">
                <div className="row border_1">
                  <div className="col-md-4">
                    <div className="image_1">
                      <img src="images/img-1.png" alt="img-1" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h1 className="banner_taital">Big Sale Offer</h1>
                    <div className="buynow_bt active">
                      <a href="/">Buy Now</a>
                    </div>
                    <div className="contact_bt">
                      <a href="contact.html">Contact Us</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="image_2">
                      <img src="images/img-2.png" alt="img-2" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}
