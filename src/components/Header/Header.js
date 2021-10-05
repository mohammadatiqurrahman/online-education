import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
        <div>
        <div className="row custom-cls">
            <div className="col-md-6 text-start text-white">
                <div>
                <h1>IBM Data Science Professional Certificate</h1>
                <p>Kickstart your career in data science & ML. Build data science skills, learn Python & SQL, analyze & visualize data, build machine learning models. No degree or prior experience required.</p>
                </div>
                <div className="d-flex text">
                    <div>
                    <img className="instructor" src="https://innovation.org/-/media/Project/PhRMA/Innovation-Org/Import/2018-07/I/Image1_RPDS_2.jpg?h=900&w=900&hash=4BD83FDEC7B4F4A9909C92201A9A0840" alt="" />
                    </div>
                    <div className="ms-4">
                        <h6>Rav Ajhua</h6>
                        <p><small>Course Instructor</small></p>                
                </div>
                </div>
                    <div className="course-enrol text-center">
                        <h5>Enroll for Free</h5>
                        <p>Statrs Dec 31</p>
                    </div>

            </div>

            <div className="col-md-6">
                <img className="w-75 custom-img" src="https://www.princetonreview.com/cms-content/how-to-make-the-most-out-of-mcat-study-group.jpg" alt="" />
            </div>

        </div>
        </div>
        </div>
    );
};

export default Header;