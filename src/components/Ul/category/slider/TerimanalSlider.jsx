import React from 'react';
import Slider from "react-slick";
import "../../../../style/home.css";
import "../../../../style/slider.css";

import pimg from "../../../../assets/image/p1.jfif";
import pimg1 from "../../../../assets/image/p2.jfif";
import pimg2 from "../../../../assets/image/p3.jfif";

function TerimanalSlider() {
    const sliding =
        {
            dots: true ,
            autoplay :true,
            infinity: true ,
            speed :1000 ,
            autoplaySpeed :3000,
            swipeToSlider : true,
            slidersToShow : 1 ,
            slidersToScroll: 1 ,
        }
    
  return  <Slider {...sliding}>
  <div >
    <p className="textslider">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Eos excepturi soluta modi. Molestiae sunt rerum nesciunt,
         similique cum sit modi ad a culpa explicabo quidem?
          Nisi alias veniam aliquam natus.
    </p>
    <div className=' d-flex align-items-center gap-3'>
        <img src={pimg} alt="" className="imgslid " />
        <h4 className='name'>Jone Do</h4>
    </div>
  </div>
  <div >
    <p className="textslider">
       ! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Eos excepturi soluta modi. Molestiae sunt rerum nesciunt,
         similique cum sit modi ad a culpa explicabo quidem?
          Nisi alias veniam aliquam natus.
    </p>
    <div className='d-flex align-items-center gap-3'>
        <img src={pimg1} alt=""  className='imgslid' />
        <h4 className='name'>Dema Al </h4>
    </div>
  </div>
  <div>
    <p className="textslider">
       "- Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Eos excepturi soluta modi. Molestiae sunt rerum nesciunt,
         similique cum sit modi ad a culpa explicabo quidem?
          Nisi alias veniam aliquam natus."
    </p>
    <div className=' d-flex align-items-center gap-3'>
        <img src={pimg2} alt=""  className="imgslid"/>
        <h4 className='name'>Hamd Hlo</h4>
    </div>
  </div>
</Slider>
}

export default TerimanalSlider
