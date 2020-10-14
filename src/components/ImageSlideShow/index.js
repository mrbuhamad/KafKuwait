import React from 'react';
import {Fade} from "react-slideshow-image";

const ImageSlideShow = ({sliderImages, fadeProperties}) => {
    return(
        <Fade {...fadeProperties}>
            {sliderImages.map((Images, index) => {
               return <div key={index} className="eachSlide" style={{background: `url(${Images.url})center/cover no-repeat`}}></div>
            })}
        </Fade>
    )
};
export default ImageSlideShow;