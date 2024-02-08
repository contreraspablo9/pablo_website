import React from 'react'
function About1() {
    
    return (
        <>
            <section id="about" className="light">
            <div className="bg-dark"></div>
            <div className="block">
                <div className="container">
                    <div className="row align-items-center  gx-5">
                        <div className="col-lg-6">
                            <div className="section-sub-title">
                                <article className="section-title-body">
                                    <h1 className="head-title"><span>About</span> Pablo Huerta </h1>
                                    <p className="head-text">
                                    Pablo was born and raised in San Luis Potosi, Mexico. He graduated as a Physics Engineer from UASLP in 2020. He has diplomas as Ethical Hacker and Electronic Instrumentation Specialist. Since 2020 he has developed successfully as a software engineer implementing solutions in the automotive industry and for large financial corporations in the United States.
                                    </p>
                                    <ul className="list-unstyled list-bold d-lg-none d-xl-block">
                                        <li><i className="ion-checkmark"></i> Versatile and results-oriented</li>
                                        <li><i className="ion-checkmark"></i> Creative and capable of developing solutions </li>
                                        <li><i className="ion-checkmark"></i> Generates value in each part of the process </li>
                                    </ul>
                                </article>
                            </div>                      
                        </div>
                        <div className="col-lg-6">
                            <div className="about-img-block">
                                <img alt="" className="img-fluid" src="img/preview/about1.jpg"/>
                                <div className="about-img lax   lax_preset_slideY:3500:-400">
                                    <img alt="" className="img-fluid" src="img/preview/about2.jpg"/>
                                </div>
                                <div className="about-img-info widget-block light mb-0">
                                    <h4 className="widget-title dark">My Resume (CV) </h4>
                                    <p> Download resume</p>
                                    <a href="cv_pablohuerta_sdev2024.pdf" className="btn-default btn-move active mb-0">Download</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About1
