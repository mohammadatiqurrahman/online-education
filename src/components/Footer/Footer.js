import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-4 bg-dark text-white p-4">
                    <h6 className="style-text">OUR MISSION</h6>
                    <h6>Our mission is to make a difference in education.</h6>
                    <div className="d-flex">
                        <div className="ms-4 ps-4 text-start">
                            <p>Catalog</p>
                            <p>Support</p>
                            <p>About Us</p>
                            <p>Careers</p>
                        </div>
                        <div className="ms-4 ps-4 text-start">
                            <p>EdChats</p>
                            <p>Bloogs</p>
                            <p>News</p>
                            <p>Culturally Responsive Curriculumn</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 bg-dark text-white p-4">
                    <h6 className="style-text">CORPORATE HEADQUARTERS</h6>
                    <p>1215 Fourth Ave., Suite 1500 Seattle, WA 98161</p>
                    <p>PHONE: 1 (206) 381-5600</p>
                    <p>EMAIL: info@abclearning.com</p>
                </div>
                <div className="col-md-4 bg-dark text-white p-4">
                <h6 className="style-text">SALES INQUIRIES</h6>
                <p>Connect with an Apex Learning expert to explore ways we could collaborate to support the needs of your students.</p>
                </div>
                <p className='p-4 text-white bg-dark'>Copyright© 2021 Apex Learning Inc. Apex Learning®, the Apex Learning logo, ClassTools®, ClassTools Achieve®, ClassTools Virtual™, Literacy Advantage®  and where opportunity thrives™ are either registered trademarks or trademarks of Apex Learning Inc. Advanced Placement®, AP®, SAT®, and ACCUPLACER® are registered trademarks and/or owned by the College Board, which was not involved in the production of, and does not endorse this product. TASC Test Assessing Secondary Completion™ is a trademark of Data Recognition Corporation|CTB.  HiSET® is a trademark of ETS®. Suite360™ is a trademark of Evolution Labs.</p>
            </div>

        </div>
    );
};

export default Footer;