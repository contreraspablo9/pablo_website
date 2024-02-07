import React from 'react'
import ContactForm from './../Contact/ContactForm'
import {FacebookShareButton,
    PinterestShareButton,
    TelegramShareButton,
    LinkedinShareButton,
    TwitterShareButton} from "react-share";
import {FacebookIcon,
    PinterestIcon,
    TelegramIcon,
    LinkedinIcon,
    TwitterIcon} from "react-share";
function Contact4() {
    return (
        <>
        <section  id="contact" className="light">
          <div className="bg-light"></div>
                <div className="block">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="section-sub-title">
                                    <article className="section-title-body">
                                        <h1 className="head-title">Contact </h1>
                                    </article>
                                </div>
                                <div className="widget-block dark">
                                    <h4 className="widget-title"><i className="ion-pound"></i>Pablo Huerta Software Developer</h4>
                                    <h4 className="widget-title"><i className="ion-map"></i>Circuito Azucena 110, Col. Huerta Real, San Luis Potosí México</h4>
                                    <br/>
                                    <LinkedinShareButton url="https://youtu.be/6bytsvX6gAM" >
                                        <LinkedinIcon round={true} size={32}></LinkedinIcon>
                                    </LinkedinShareButton>     
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="widget-block dark">
                                            <h4 className="widget-title"><i className="ion-android-call"></i>Phone:</h4>
                                            <p>(10 808) 321-1785-952<br/>
                                                (10 808) 321-1785-953
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="widget-block dark">
                                            <h4 className="widget-title"><i className="ion-email"></i>Email:</h4>
                                            <p> mosaic-design@domain.com<br/>
                                                support@yoursite.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 align-items-center">
                                <div className="form-light">
                                    <ContactForm/>
                                </div>
                                
                            </div>                                  
                        </div>
                    </div>
                </div>
            
        </section>
        </>
    )
}

export default Contact4
