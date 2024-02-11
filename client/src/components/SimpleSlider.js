import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../img/banner1.jpeg";
import banner1 from "../img/banner2.jpeg";
import banner2 from "../img/banner3.jpeg";
import banner3 from "../img/banner4.jpeg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner} alt="Slide 1" className="slider-image" />
      </div>
      <div>
        <img src={banner1} alt="Slide 2" className="slider-image" />
      </div>
      <div>
        <img src={banner2} alt="Slide 3" className="slider-image" />
      </div>
      <div>
        <img src={banner3} alt="Slide 4" className="slider-image" />
      </div>
    </Slider>
  );
}
