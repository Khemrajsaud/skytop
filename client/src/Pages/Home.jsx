
// import landing1 from "../assets/Image/landing3.png";
import HomePage from "./HomePage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partners0 from "../assets/Image/partners.jpeg"
import partners1 from "../assets/Image/partners1.jpeg"
import partners2 from "../assets/Image/partners2.jpeg"
import About from "./About";


const Home = () => {

  const partners = [
    {
      partners: partners0
    },
    {
      partners: partners1
    },
    {
      partners: partners2
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className="lg:mt-[60px] mt-[60px] w-full">
     
      <div className="w-full m-auto ">
        {/* <img 
          src={landing1} 
          alt="Skytop Academy" 
          className="w-full  " 
        /> */}
        <About/>
        <HomePage/>
        <div className="w-full mt-[50px] m-auto mb-5 ">
          <h1 className="text-3xl font-bold text-center pb-6">Industrial Partners</h1>
          <div className="pb-6">
          <Slider {...settings}>
            {partners.map((item, index)=>(
              <div className="flex items-center" key={index}>
                <img className="w-[150px]" src={item.partners} alt="" />
              </div>
            ))}
            </Slider>

            
          </div>
        </div>
      </div>

     
 

    </div>
  );
};

export default Home;