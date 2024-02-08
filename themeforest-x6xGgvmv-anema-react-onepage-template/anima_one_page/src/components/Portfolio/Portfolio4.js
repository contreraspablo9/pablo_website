import React from 'react'
import PortfolioBlockModal from './PortfolioBlockModal'
const portfolioAll = [
    {
        _id:'001',
        src:'img/preview/blog30.jpg',
        title:'Traceability and quality validation system ',
        category:'Project at SIIX EMS',
        info:'The project consisted in developing an application to collect traceability information, as well as the results of the quality tests applied to the final product, directly from the testing machines in the production lines. The solution required consideration of numerous factors involved in the process, as well as the development of a very robust error handling system. At the end of the project, excellent results were obtained, which were reflected in the significant reduction of downtime in the production station involved.'
    },
    {
        _id:'002',
        src:'img/preview/blog31.jpg',
        title:'Network Infrastructure Manager',
        category:'Project at Softtek',
        info:'This system is a django application based on the open-source Netbox project. It was completely customized according to the client\'s needs, who required to efficiently and autonomously manage their network infrastructure resources. The main contributions to this project were the creation of different modules such as one to request new functionality requirements, bug reporting and change control. Automatic unit tests were implemented along with the deployment pipeline, customized notifications integrated with CISCO\'s Webex messaging system were added. Among other usual tasks such as bug fixes and updates.'
    },
    {
        _id:'003',
        src:'img/preview/blog32.jpg',
        title:'Insurance Policy Validation System',
        category:'Project at Codebay',
        info:'This project consisted of an ETL system mounted on an Ubuntu server. The main objective was to create a series of scripts executed periodically to check a folder on an FTP server. In this folder the policy selling agents would upload their weekly sales reports for the system to scan, validate and upload the information. The system would also perform notification functions, error handling, backups and validation of business rules according to the particular characteristics of each type of policy.'
    }
]

function Portfolio3() {
    return (
        <>
        <section  id="portfolio" className="light">
                <div className="bg-dark"></div>
                <div className="block">
                    <div className="container">
                    <div className="section-sub-title center">
                                <article className="section-title-body">
                                <h1 className="head-title">Most <span>relevant</span> Work <span>Experience</span></h1>
                                        <p className="head-text">
                                        Since 2020 Pablo has been involved in various projects ranging from IT related support and troubleshooting to the development of robust complete systems with high quality standards for the industrial and financial sector. He has worked hand in hand with large corporations in Mexico and USA.
                                        </p>
                                </article>
                            </div>
                        <div className="row">
                                {portfolioAll.map((portfolio)=>(
                                    <PortfolioBlockModal
                                    key={portfolio._id.toString()} value={portfolio._id}
                                    portfolioTitle={portfolio.title} 
                                    portfolioInfo={portfolio.info} 
                                    portfolioSrc={portfolio.src} 
                                    portfolioCat={portfolio.category}/>
                                ))}
                        </div>   
                    </div> 
                    <div className="clearfix"></div>
                </div>
        </section>
   
        </>
    )
}

export default Portfolio3
