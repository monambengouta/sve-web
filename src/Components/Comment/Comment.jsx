import React from 'react'
import './comment.css'
function Comment() {
  return (
    <div className='comment__container'>
        <img src={require('../../assets/home_assets/pexels-andrea-piacquadio-774909.png')} alt="" srcset="" />
        <div className="comment__detail">
            <div className="comment__content">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud."</div>
            <div className="comment__owner"><strong>Lorem</strong> Ipsum</div>
        </div>
    </div>
  )
}

export default Comment