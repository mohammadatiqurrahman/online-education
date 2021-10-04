import React from 'react';
import './ShowAbout.css'

const ShowAbout = (props) => {
    const {name,title,img} = props.user;
    return (
        <div>
             <div className="col mt-4">
            <div className="card h-100">
            <img src={img} className="card-img-top img-size" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{title}</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ShowAbout;