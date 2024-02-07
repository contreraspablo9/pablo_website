import React from 'react'
import bg_vide from '../../videos/bigway.mp4'
function TechStack4() {
    
    return (
        <>
            <section id="techstack" className="bg-non-fixed">
            <video autoPlay loop muted className="bg_video">
                <source src={bg_vide} type="video/mp4"></source>
            </video>
            <div className="bg-inner-dark"></div>
            <div className="bg-50-r"></div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div className="pad-l-45 pad-r-45">
                            <div className="section-block-title">
                                <div className="section-title">   
                                    <article className="section-title-body mobile-mb-0">
                                        <h1 className="head-title wow fadeInDown animated" data-wow-duration="1.5s">Tech Stack</h1>
                                        <div className="section-col wow fadeInUp animated" data-wow-duration="1.5s"></div>
                                        <p className="head-text wow fadeInUp animated" data-wow-duration="1.5s">
                                        Pablo is quite a complete developer. He is able to create from simple responsive web pages that serve as a business card for stores or individuals, to complex web or desktop applications with database integration, cloud storage, file management, real time reporting and any other software tool that a large corporation may need.
                                        </p>
                                    </article>
                                </div>
                            </div> 

                        </div> 
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="pad-l-45 pad-r-45 block">

                            <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                                <h4 className="widget-title">The most outstanding skills</h4>
                                <p>
                                Charles Darwin thought that the species that survive are not the strongest but those that adapt the fastest to change. Here is a list of the most relevant tools that Pablo has used to meet the needs of his clients and employers:
                                </p>
                            </div>
                            
                            <div className="widget-block wow fadeInDown animated" data-wow-duration="1.5s">
                            <div className="clearfix"></div>
                                
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "95%"}} >

                                    </div>
                                    <span className="skill-value">Python <span> 95%</span></span>
                                </div>
                                
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "80%"}} >

                                    </div>
                                    <span className="skill-value">JavaScript <span> 80%</span></span>
                                </div>
                                
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "85%"}} >

                                    </div>
                                    <span className="skill-value">SQL <span> 85%</span></span>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar" style={{width: "70%"}} >

                                    </div>
                                    <span className="skill-value">PHP <span> 70%</span></span>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar" style={{width: "90%"}} >

                                    </div>
                                    <span className="skill-value">Django & Django REST Framework <span> 90%</span></span>
                                </div>
                                
                                <div className="progress">
                                    <div className="progress-bar"  style={{width: "75%"}}>

                                    </div>
                                    <span className="skill-value">React <span> 75%</span></span>
                                </div>
                                
                                <div className="progress">
                                    <div className="progress-bar"  style={{width: "90%"}}>

                                    </div>
                                    <span className="skill-value">GIT/GitHub <span> 90%</span></span>
                                </div>
                                
                                <div className="progress">
                                    <div className="progress-bar"  style={{width: "85%"}}>

                                    </div>
                                    <span className="skill-value">Networking, Linux, BASH & other tools <span> 85%</span></span>
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

export default TechStack4
