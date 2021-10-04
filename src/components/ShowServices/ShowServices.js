import React from 'react';

const ShowServices = (props) => {
    // console.log(props.service);
    const {category,img,description,price,rating} = props.service;
    return (
        <div>
        <div class="col height">
        <div class="card h-100 text-start">
            <img src={img} class="card-img-top img-height" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{category}</h5>
                <p class="card-text">{description.slice(0,150)}</p>
                <p class="card-text">{price}</p>
                <p>{rating}</p>
            </div>
            <div class="card-footer text-center text-white bg-dark">
                <small>Enroll Now</small>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ShowServices;