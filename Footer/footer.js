import React from 'react';
import './footercss.css'
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (<div>
            <div class="last-bottom-part">

                <div class="firstOne">
                    <div class="btnsetting">
                        <input type="button" class="sett" value="Our Settings"></input>
                    </div>
                    <div class="setting-bottom-part">Content Creation <br />
                        Giggle Tips</div>
                </div>
                <div class="secondOne">
                    <div class="contact">Contact</div>
                    <div class="contactDetails">
                        Giggle GmbH<br />
                        Rosenthaler strabe 72A<br />
                        10119 Berlin<br />
                        Phonenumber<br />
                        <a href="" class="atag">info@giggle.trips</a>
                    </div>

                </div>
                <div class="thirdOne">
                    <div><div class = "footer-lans-uns">{(this.props.language) ? 'Lass uns im Kontakt bleiben':'Lets stay in touch'}</div></div>
                    <div><div class = "footer-finde-uns">{(this.props.language) ? 'Finde uns auf allen relevanten Social Media Kanalen':'Find us on all relevent social media channels'}</div></div>
                    <div class = "fourthOne">
                    <div class="footer1 footerimage1"></div>
                    <div class = "footer2 footerimage2"></div>
                    <div class = "footer3 footerimage3 "></div>
                    <div class = "footer4 footerimage4 "></div>
                </div>
                </div>
            </div>
            <div class="last-Giggle">
                <div class="imgGiggle"></div>
                <div class = "GiggleTextBottom">Giggle</div>
                <div class="privacy">Privacy policy</div>
                <div class="terms">Terms of use</div>
                <div class="copy">Copyright &copy; 2019 </div>
            </div>


        </div>
        );
    }
}
export default App;
