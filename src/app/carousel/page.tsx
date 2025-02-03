'use client'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/themeProvider';
import { clientSideFucntion } from '../utils/client-utils';

function Carousel() {
    const settings = {
        dots: true,
    };
    const result = clientSideFucntion();
    const theme = useTheme()
    return (
       <>
        <h1 style={{color: theme.colors.primary}}>Carousel</h1>   
        <p>{result}</p>
        <div className="image-slider-container">
          <Slider {...settings}>
            <div>
                <img src="https://picsum.photos/400/200" />
            </div>
            <div>
                <img src="https://picsum.photos/400/200" />
            </div>
            <div>
                <img src="https://picsum.photos/400/200" />
            </div>
            <div>
                <img src="https://picsum.photos/400/200" />
            </div>
          </Slider>
        </div>
       </>
   );
}

export default Carousel