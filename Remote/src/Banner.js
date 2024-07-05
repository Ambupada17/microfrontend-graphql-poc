import React from "react";
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner__content">
            <h1 className="banner__title"> Welcome to Microfrontend User Details Application</h1>
            <p className="banner__description">Banner Component with a title and Description</p>
        </div>
    </div>
  )
}

export default Banner