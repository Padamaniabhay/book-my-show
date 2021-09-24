import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/entertainment.component";
import Premier from "../components/Premier/premier.component";
import PosterSlider from "../components/posterSlider/posterSlider.component";
import tempPosters from "../config/tempPosters.config";

const HomePage = ()=>{
    return(
        <>
        <div className="flex flex-col gap-10">
        <div className="container mx-auto md:px-28 px-4">
            <h1 className="text-2xl font-bold text-gray-800">The Best Of Entertainment</h1>
            <EntertainmentCardSlider/>
        </div>
        <div className="bg-navCol-700 py-16 md:px-32 px-4">
            <div className="container mx-auto px-4">
            <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
                />
            </div>
            <PosterSlider images={tempPosters} title="Premiers" subtitle="Brand New Releases Every Friday" isDark/>
            </div>
        </div>
        </div>
        <div className="container mx-auto md:px-16 px-4">
            <PosterSlider images={tempPosters} title="Online Streaming Events" isDark={false}/>
        </div>

        <div className="container mx-auto md:px-16 px-4">
            <PosterSlider images={tempPosters} title="Outdoor Events" isDark={false}/>
        </div>
        </>
    );
};

export default HomePage;