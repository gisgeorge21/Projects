import React from 'react';
import './ThreeImages.css'
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div class="three-images-main svgtopbottom">
                {(this.props.language) ?
                    <div className="marginbottom1per">
                        <div className="contentHeader textAlignCenter">Kommen wir zum Punkt. Mit Short-Clips erreichen
                        Sie das richtige Publikum.</div>
                    </div>
                    :
                    <div className="marginbottom1per">
                        <div className="contentHeader textAlignCenter">Let's get to the point. With short clips you
                        reach the right audience.</div>
                    </div>}


                <div class="threeimages marginbottom1per">
                    <div class="three-images-images-col three-images-images-img1">
                        {/*                        <div class="three-images-images-col-card-text">
                            {(this.props.language) ? 'Onec porttitor quam nec urna volutpat' : 'EnglishText'}
                        </div>
                */}
                    </div>
                    <div class="three-images-images-col three-images-images-img2">
                        {/*}
                        <div class="three-images-images-col-card-text">
                            {(this.props.language) ? 'In auctor augue. Mauris et ipsum massa;' : 'EnglishText'}
                        </div>
            */}
                    </div>
                    <div class="three-images-images-col three-images-images-img3">
                        {/*}
                        <div class="three-images-images-col-card-text">
                            {(this.props.language) ? 'Montes, nascetur ridiculus mus.' : 'EnglishText'}</div>
        */}
                    </div>
                </div>


                <div class = "textAlignCenter marginbottom1per">
                    {(this.props.language) ?
                        <div class="textAlignCenter marginbottom1per">
                            <div className="content">Nur wenige Sekunden entscheiden, wie sexy Ihr Hotel wirklich ist. Deshalb ziehen themenbezogene 30-<br/>
                            Sekünder die Aufmerksamkeit sicher auf Ihr Urlaubsangebot. Das ist optimal für alle Aktivitäten rund um Ihr'</div>
                        </div>
                        :
                        <div class="textAlignCenter marginbottom1per">
                           <div className="content textAlignCenter"> Only a few seconds show how sexy your hotel really is. That's why themed 30- second
                            clips are sure to draw attention to your holiday offer. This is optimal for all activitie around your hotel, for the sports- and SPA offer, and everything else that is exciting for
                            your guests.</div>
                        </div>}

                        <button class="requestbutton2 btFont2"> <a className="buttonFont" href="mailto:hello@giggle.tips?Subject=Giggle-Content">REQUEST NOW</a></button>
                </div>

            </div>
        );
    }
}
export default App;