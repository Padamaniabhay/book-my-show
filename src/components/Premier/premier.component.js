import react from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

//config
import settings from "../../config/posterCarousal.config";

//images
import PremierImages from "../../config/tempPosters.config";
export const Premier = () => {         //direct export

    return(
        <>
        <div className="flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm">Brand New Release Every Friday</p>
        </div>
        <Slider {...settings}>
            {PremierImages.map((image)=>(
                <Poster {...image} isDark/>
            ))}
        </Slider>
        </>
    )

}

export default Premier;