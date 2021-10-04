import React, { useEffect, useState } from 'react';
import ShowCourses from '../ShowCourses/ShowCourses';

const Courses = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./home.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    return (
        <div>
            <div className="mt-4 mb-4"><h1>Online Courses</h1></div>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                courses.map(course=><ShowCourses course={course}></ShowCourses>)
            }
            </div>
            </div>
        </div>
    );
};

export default Courses;