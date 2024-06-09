import React from 'react';
import "./Card.css";
const Card = ({pic,title,text}) => {
  return (
    <div className='cardWrapper'>
        <div className='cardHead'>
            <img src={pic} alt='img' width={40} height={30}/>
            <p>{title}</p>
        </div>
        <div className='cardText'>{text}</div>
    </div>
  )
}

export default Card