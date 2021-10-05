import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowInstructor from '../ShowInstructors/ShowInstructor';

const Instructors = () => {
    const [instructors,setInstructor] = useState([])
    useEffect(()=>{
        fetch('./instructors.JSON')
        .then(res=>res.json())
        .then(data=>setInstructor(data))
    },[])
    return (
        <div>
            <div className="container">
            <h4 className="text-start mt-4 mb-4">Instructors</h4>
                <div className="row row-cols-1 row-cols-md-2">
                    {
                        instructors.map(instructor=><ShowInstructor instructor={instructor}></ShowInstructor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;