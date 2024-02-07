import React from 'react'
import {Link} from 'react-scroll'
function Welcome4() {
    return (
        <section>
            <div className="block color-scheme-white light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-sub-title center">
                                <article className="section-title-body">
                                        <h1 className="head-title">Seeking to positively <span>impact</span> my community and <span>the world!</span></h1>
                                        <p className="head-text">
                                        I am a young man passionate about science and technology, I believe that for there to be true democracy and economic participation it is necessary that people and businesses can take advantage of the new tools available. I always look to the future with enthusiasm, seeking to contribute significantly.
                                        </p>
                                        <Link to='portfolio' className="btn-default  btn-move" smooth={false} duration={800}>Portfolio</Link>&nbsp;
                                        <Link to='contact' className="btn-default active btn-move t1" smooth={false} duration={800}>Contact</Link>
                                </article>
                            </div>   
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Welcome4
