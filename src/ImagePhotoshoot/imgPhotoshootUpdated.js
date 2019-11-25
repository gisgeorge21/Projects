import React from 'react';
import './imgPhotoshootUpdated.css'
import photoShootImg from './PhotoShoot/Erlebnisse.jpg';
import autoImg from '../../src/img/auto.jpg';

import ScrollAnimation from 'react-animate-on-scroll';

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="svglefttop svganim">
                <div className='flexmain marginbottom1per rightflexmain'>
                    <ScrollAnimation animateIn='bounceInLeft' className="half-section content-left" duration={1.5}>
                        <div className="test fleximg backposright">
                            <img className="repsonsive leftsideimg" src={photoShootImg} alt="" />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' className="half-section content-right" duration={1.5}>
                        <img src={autoImg} alt="" />
                        <div>{(this.props.language) ?
                            <div className="flextextBoxContent alignLeft ">
                                <div className="contentHeader">﻿Was Sind deine
                                Erlebnisse?</div>
                                <div className="content">Wir verleihen einzgartigen Urlaubserlebnissen ei
                                individuelles Gesicht. Standardisierte Aktivitäten,
                                Leistungen und Zusatzangebote werden in emotionale
                                rlebnisse verwandelt. So schaffen wir Begeisterung vor,
                                während und nach dem Urlaub!</div>
                            </div> :
                            <div className="flextextBoxContent alignLeft ">
                                <div className="contentHeader">What are your experiences</div>
                                <div className="content">We give unique holiday experiences an individual face. Standardised activities, services and additional offers are transformed into emotional experiences. This is how we create enthusiasm before, during and after the holiday!</div>
                            </div>}
                        </div>
                    </ScrollAnimation>
                </div>

                <div className='flexmain svgright svganim margintopminus'>
                    <div className="textBox backWhite">
                        <div><div className="imgFoto floatRight margintop"></div></div>
                        <div>{(this.props.language) ?
                            <div className="flextextBoxContent alignRight ">
                                <div className="contentHeader"> Foto/Video shooting</div>
                                <div className="content">Unsere kreativen und erfahrenen Content Producer haben sich darauf spezialisiert
                                authentische Urlaubsmomente einzufangen und somit Emotionen zu wecken. Ehrlich,
                                natürlich und up-to-date.</div>

                            </div> :
                            <div className="flextextBoxContent alignRight ">
                                <div className="contentHeader">Foto/Video Shooting</div>
                                <div className="content">Our creative and experienced content producers are specialized in capturing authentic,
                                holiday moments and arousing emotions. Honest, natural and up-to-date
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="fleximg rightsideimg"></div>
                </div>
            </div>
        );
    }
}
export default App;