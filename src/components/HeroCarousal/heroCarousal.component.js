import React from "react";
import HeroSlider from "react-slick";

//component
import { NextArrow,PrevArrow } from "./arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal =()=>{
    const settingsLg={
        arrows:true,
        dots:false,
        autoplay:true,
        speed: 500,
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1,
        centerPadding:"150px",
        infinite:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };

    const settings = {
        arrows:true,
        autoplay:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };

      
      const images=[
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1630018548696-e1f671020900?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1631882453381-96aaf4755e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1598242962767-e2676ffcf476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://in.bmscdn.com/promotions/cms/creatives/1631818022347_moviesdontbreathe2_hindi_webshowcase_1240x300.jpg"
      ];

      return(
          <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image)=>(
                            <div className="w-full h-62 py-3 md:h-80 ">
                                <img src={image} alt="image" className="w-full h-full rounded-md"/>
                            </div>
                            ))
                    }
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {
                        images.map((image)=>(
                            <div className="w-full h-80 px-2 py-3">
                                <img src={image} alt="image" className="w-full h-full rounded-md"/>
                            </div>
                            ))
                    }
                </HeroSlider>
            </div>

          </>
      )
}


export default HeroCarousal;
