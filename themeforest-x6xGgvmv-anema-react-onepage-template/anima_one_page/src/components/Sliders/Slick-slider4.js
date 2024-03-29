import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider4 extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <>
        
        <Slider {...settings}>
            <div  className="full-screen-block">
                <div className="sliderTitleBlock for-light">
                  <h3 className= "homeSliderTitleTop">About me</h3>
                  <h1 className= "homeSliderTitle"> Pablo Huerta <br/>software <span>Dev</span> </h1>  
                </div>
            </div>
            <div   className="full-screen-block">
                <div className="sliderTitleBlock for-light">
                  <h3 className= "homeSliderTitleTop">IT Solutions</h3>
                  <h1 className= "homeSliderTitle">Empowering <br/> <span>your business</span></h1>
                </div>
            </div>
        </Slider>
      </>
    );
  }
}