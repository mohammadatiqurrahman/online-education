import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends,faBookReader } from '@fortawesome/free-solid-svg-icons'

const ShowInstructor = (props) => {
    const {name,title,img,courses,learner} = props.instructor;
    const user = <FontAwesomeIcon icon={faUserFriends} />
    const book = <FontAwesomeIcon icon={faBookReader} />


    return (
        <div>
        <div className="col">
            <div className="d-flex">
             <div>
                <img src={img} className="card-img-top w-75 rounded-circle" alt="..."/>
            </div>
            <div>
            <div className="card-body text-start">
                <h5>{name}</h5>
                <p>{title}</p>
                <p><small>{user}<b>  {learner}</b> Learners</small></p>
                <p><small>{book}<b>  {courses}</b> Courses</small></p>

            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ShowInstructor;