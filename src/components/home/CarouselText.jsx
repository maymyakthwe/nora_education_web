import Slider from "react-slick";
import React, { Component } from "react";

class CarouselText extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 300,
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,

        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <h4>Welcome To Nora's Academy</h4>
                    </div>
                    <div>
                        <h4 href="#courses-section">Explore Our Courses</h4>
                    </div>
                    <div>
                        <h4>Get Your Discount Before Sale Ends!!!</h4>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default CarouselText