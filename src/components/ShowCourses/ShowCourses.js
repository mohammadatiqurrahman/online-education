import React from 'react';
import './ShowCourses.css'

const ShowCourses = (props) => {
    // console.log(props.course);
    const {category,img,description,price,rating} = props.course;
    return (
        <div>
        <div className="col">
            <div className="card h-100 text-start">
            <img src={img} className="card-img-top w-100 img-height" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <p className="card-text">{description.slice(0,150)}</p>
                <p>Price: $ {price}</p>
                <p>{rating}</p>
            </div>
            <div className="card-footer text-center text-white bg-dark">
                <small>Enroll Now</small>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ShowCourses;