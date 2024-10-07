import React from 'react';

function Banner() {
  return (
    <div>
      <div className="banner-job"> {/* Changed class to className */}
        <div className="banner-overlay"></div>
        <div className="container text-center">
          <h1 className="title">The Easiest Way to Get Your New Job</h1>
          <h3>We offer 12000 jobs vacation right now</h3>
          <div className="banner-form">
            <form action="#" className="clearfix"> {/* Speculative improvement on action */}
              <input type="text" className="form-control" placeholder="Type your key word" />
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#"><span className="change-text">Job Location</span> <i className="fa fa-angle-down"></i></a>
                <ul className="dropdown-menu category-change">
                  <li><a href="#">Location 1</a></li>
                  <li><a href="#">Location 2</a></li>
                  <li><a href="#">Location 3</a></li>
                </ul>
              </div>
              <button type="submit" className="btn btn-primary">Search</button> {/* Removed value attribute */}
            </form>
          </div>
          <ul className="banner-social list-inline"> {/* Corrected 'socail' to 'social' */}
            <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#" title="Youtube"><i className="fa fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
