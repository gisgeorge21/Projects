import React from 'react';
import mySvg from './Giggle.svg'
import './ImagePhotoShootnew.css'
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
<div class="e-c-photo">
        <div class="photoshoot-img photoshoot-img-ppty"
            >
        </div>
        <div class="content photoshoot-img-content">
            <div class="icon camping"></div>
            <h3 class="font-bold margin-0">Authentic holiday emotions</h3>
            <p>We have specialized in putting new and authentic holiday emotions in the upscale hotel industry in scene.
                We put your hotel, your team and last but not least your experiences in a new light. Thus, you give
                (potential) guests unprecedented insights. New. Authentic. Incomparable.</p>
            <div class="half-giggle giggleBack">
        </div>
        </div>
    </div>
         );
    }
}
export default App;

   