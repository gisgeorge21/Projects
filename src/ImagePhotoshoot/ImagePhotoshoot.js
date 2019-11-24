import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div class="wasSection">
               <div class="wasSindMain">
                  <div class="imgWasSindright"><div class="imgWasSind"></div>
                  </div>
                  <div class="wasSindSection">

                     <div class="padWasSind">
                        <div class="whiteback">
                           <div class="imgauto">

                           </div>
                           <div class="WasSindHead">
                              <pre>{(this.props.language) ?'﻿Was Sind deine \n Erlebnisse?':'What are your experiences?'}</pre>
                           </div>
                           <div class="WirPara">
                              <p> {(this.props.language) ?'Wir verleihen einzgartigen Urlaubserlebnissen ei\n\individuelles Gesicht. Standardisierte Aktivitäten,\n\Leistungen und Zusatzangebote werden in emotionale\n\rlebnisse verwandelt. So schaffen wir Begeisterung vor,\n\während und nach dem Urlaub!':
                              'We give unique holiday experiences an individual face. Standardised activities, services\n and additional offers are transformed into emotional experiences. This is how we create\n enthusiasm before, during and after the holiday!'}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>



               <div class="FotoSection">
                  <div class="FotoMain">

                     <div class="padfotosection">
                        <div class="padimgfoto"><div class="imgFoto"></div></div>
                        <div class="FotoHead">
                           <pre>{(this.props.language) ?'Foto/Video shooting':'Foto/Video Shooting'}</pre>
                        </div>
                        <div class="FotoPara">
                           <pre>{(this.props.language) ?'Unsere kreativen und erfahrenen Content Producer\n\haben sich darauf spezialisiert, authentische\n\Urlaubsmomente einzufangen und somit Emotionen zu\n\wecken.\n\Ehrlich, natürlich und up-to-date.':
                           'Our creative and experienced content producers are specialized in capturing authentic\n\ holiday moments and arousing emotions. Honest, natural and up-to-date'}</pre>
                        </div>
                     </div>

                  </div>
                  <div class="photoshoot">
                     <div class="imgphotoshoot">

                     </div>
                  </div>

               </div>
            </div>
        );
    }
}
export default App;