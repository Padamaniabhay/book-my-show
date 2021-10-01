import React,{useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//component
import { NextArrow,PrevArrow } from "./arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal =()=>{

    const [images, setImages]=useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            console.log(getImages);
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

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

      

      return(
          <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image)=>(
                            <div className="w-full h-62 py-3 md:h-80 ">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                                alt="image" className="w-full h-full rounded-md"/>
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
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                                alt="image" className="w-full h-full rounded-md"/>
                            </div>
                            ))
                    }
                </HeroSlider>
            </div>

          </>
      )
}


export default HeroCarousal;
