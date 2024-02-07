import React from 'react'
const services = [
    {
        _id:'001',
        classIcon:'ion-ios-monitor-outline',
        title:'Resposive Websites',
        text:'Create a modern website, that reflects your professionalism as a person or as an organization.'
    },
    {
        _id:'002',
        classIcon:'ion-ios-pie-outline',
        title:'Business Data Management',
        text:'Develop and implement a system to efficiently capture, process, store and report your business information.'
    },
    {
        _id:'003',
        classIcon:'ion-ios-gear-outline',
        title:'Process Automation',
        text:'Automate the internal processes of your business, reduce costs and time for greater productivity.'
    },
    {
        _id:'004',
        classIcon:'ion-ios-pricetags-outline',
        title:'E-Commerce Implementation',
        text:'Forget physical limitations. Who says you can\'t sell to the whole country, the whole continent or the whole world?'
    },
    {
        _id:'005',
        classIcon:'ion-ios-film-outline',
        title:'Content Management Systems',
        text:'Do you need a website where it is essential to publish articles, photos or videos on a regular basis? Automate your content update processes'
    },
    {
        _id:'006',
        classIcon:'ion-ios-briefcase-outline',
        title:'IT Consulting Services',
        text:'Consulting for all types of businesses and processes. Take advantage of new technologies so that your business is always at the forefront.'
    }
]
function Service4() {
    return (
        <>
        <section  id="services" className="light">
            <div className="bg-light"></div>
                

                <div className="block">
                    <div className="container">
                            <div className="section-sub-title center">
                                <article className="section-title-body">
                                <h1 className="head-title">Empower your <span>Business: </span>Custom <span>Solutions</span> to Suit Your Needs</h1>
                                        <p className="head-text">
                                            Customized options to explore and expand your business globally.
                                        </p>
                                </article>
                            </div>
                        <div className="row">
                            {services.map((service)=>(
                            <div className="col-lg-4 col-md-6"  key={service._id}>
                                <div className="block-feature-icon  center dark">
                                    <div className="icon hi-icon-color hi-icon-effect">
                                        <span className="hi-icon"><i className={service.classIcon}></i></span>
                                    </div>
                                    <div className="block-title">
                                        <h4>{service.title}</h4> 
                                        <p>{service.text}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default Service4
