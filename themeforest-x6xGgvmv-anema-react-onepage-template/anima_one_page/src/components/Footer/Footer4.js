import React from 'react';
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

function Footer4() {
    return (
        <>
        <footer id="footer">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                        <article className="footer-info-block">
                            
                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <article className="footer-info-block">
                            <div className="section-sub-title">
                                <article className="section-title-body white">
                                    <h4 className="head-title">CONTACT INFORMATION</h4>
                                </article>
                            </div>
                            <p>Pablo Huerta Software Development & IT Solutions</p>
                            <p>San Luis Potosí, México.</p>
                            <p>https://www.linkedin.com/in/pablohuertacontreras</p>
                            <p>contreraspablo197@gmail.com</p>
                        </article>
                    </div>        
                </div>
                <div className="footer-bottom">
                    <div className="row">

                        <div className="col-md-8 order-1 col-xs-12 col-sm-8">
                        <ul className="footer-icon list-unstyled">
                                <li>
                                    <a href="https://www.linkedin.com/in/pablohuertacontreras" target="_blank">
                                        <LinkedinIcon round={true} size={32}></LinkedinIcon>
                                    </a>    
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="footer-logo">
                                {/* <img src="img/logo-big-shop1.png" alt=""/> */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
        </>
    )
}

export default Footer4
