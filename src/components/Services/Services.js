import React, { useEffect, useState } from 'react';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
          <div className="container">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            {
                services.map(service=><ShowServices service={service}></ShowServices>)
            }
            </div>
          </div>
        </div>
    );
};

export default Services;