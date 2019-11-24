import React from 'react';
import './imgPhotoshootUpdated.css'
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div class = "svglefttop svganim">
                <div class='flexmain marginbottom1per rightflexmain'>
                    <div class="fleximg leftsideimg backposright "></div>
                    <div class="textBox backWhite">
                        <div class="imgauto margintop "></div>
                        <div>{(this.props.language) ?
                            <div class="flextextBoxContent alignLeft ">
                                <div className="contentHeader">﻿Was Sind deine
                                Erlebnisse?</div>
                                <div className="content">Wir verleihen einzgartigen Urlaubserlebnissen ei
                                individuelles Gesicht. Standardisierte Aktivitäten,
                                Leistungen und Zusatzangebote werden in emotionale
                                rlebnisse verwandelt. So schaffen wir Begeisterung vor,
                                während und nach dem Urlaub!</div>
                            </div> :
                            <div class="flextextBoxContent alignLeft ">
                                <div className="contentHeader">What are your experiences</div>
                                <div className="content">We give unique holiday experiences an individual face. Standardised activities, services and additional offers are transformed into emotional experiences. This is how we create enthusiasm before, during and after the holiday!</div>
                            </div>}
                        </div>
                    </div>
                </div>

                <div class='flexmain svgright svganim margintopminus'>
                    <div class="textBox backWhite">
                        <div><div class="imgFoto floatRight margintop"></div></div>
                        <div>{(this.props.language) ?
                            <div class="flextextBoxContent alignRight ">
                                <div className="contentHeader"> Foto/Video shooting</div>
                                <div className="content">Unsere kreativen und erfahrenen Content Producer haben sich darauf spezialisiert
                                authentische Urlaubsmomente einzufangen und somit Emotionen zu wecken. Ehrlich,
                                natürlich und up-to-date.</div>
                              
                            </div> :
                            <div class="flextextBoxContent alignRight ">
                                <div className="contentHeader">Foto/Video Shooting</div>
                                <div className="content">Our creative and experienced content producers are specialized in capturing authentic,
                                holiday moments and arousing emotions. Honest, natural and up-to-date
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div class="fleximg rightsideimg "></div>
                </div>
            </div>
        );
    }
}
export default App;