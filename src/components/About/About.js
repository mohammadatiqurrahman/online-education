import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowAbout from '../ShowAbout/ShowAbout';

const About = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('./profiles.JSON')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1 className="mt-4 text-danger">Meet Our Team</h1>
            <h1>---...---</h1>
        <div className="container">
         <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                users.map(user=><ShowAbout user={user}></ShowAbout>)
            }
        </div>
                </div>

        </div>
    );
};

export default About;