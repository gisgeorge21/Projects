import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount () {
      const script = document.createElement("script");
  
      script.src = "https://d27mylpt7bebkr.cloudfront.net/static-images/widget/prod/widget.js?id=gt1&path=innsbruck-demo&width=100%&fontCol=505050&btCol=3AB2A5&font=Rubik&lang=de&streams=4a31716b-ba33-49a3-bf98-b8ee644d6de0&showCategoryFilter=true";
      script.async = true;
  
      document.body.appendChild(script);
  }
    render() {
        return(<div class="LastGiggleSection">
               <div class="GiggleHead">
               <pre>{(this.props.language)?'﻿Giggle Tips - die neue Form der\nErlebniskommunikation':
               'Giggle Tips - the new way of communicating experiences.'}</pre>
                  </div>
               <div class="WirrPara">
                  <pre>
                  {(this.props.language)?'Wir verwandeln jedes Urlaubserlebnis in einen einzigartigen, direkt\nbuchbaren Erlebnisguide. Gemacht für die neue Generation von Reisenden.':
                  'We transform every holiday experience into a unique, directly bookable adventure.\n Made for the new generation of travellers.'}
               </pre>
               </div>
               <div id='gt1' className="widget"></div>
               {/*
               <div class="wochen">{(this.props.language)?'Wochenprogramm':'Weekly Programm'}</div>
               <div class="datee">Montag, 30 September</div>
               /*
               <iframe>
               <div id='gt10' className="widget"></div>
               <script src='https://d27mylpt7bebkr.cloudfront.net/static-images/widget/prod/widget.js?id=gt1&path=innsbruck-demo&width=100%&fontCol=505050&btCol=3AB2A5&font=Rubik&lang=de&streams=4a31716b-ba33-49a3-bf98-b8ee644d6de0&showCategoryFilter=true'>
               </script>
               </iframe>
               
               <div id='gt1' className="widget"></div>
               <script src='https://d27mylpt7bebkr.cloudfront.net/static-images/widget/prod/widget.js?id=gt1&path=innsbruck-demo&width=100%&fontCol=505050&btCol=3AB2A5&font=Rubik&lang=en&streams=4a31716b-ba33-49a3-bf98-b8ee644d6de0&showCategoryFilter=true'></script>
               */}
               <div class="images">
                  <div class="imgQuelle"><div class="twoFiveNine">259€</div><div class="quelletext">Quelle Romantic Day For Couples IN Love</div></div>
                  <div class="imgfine"><div class="oneninezero">190€</div><div class="finetext">Fine Gourmet<br /> Dinner</div></div>
                  <div class="imgInfo"><div class="oneninezero">190€</div><div class="infotext">Information about sports and hiking possibilities</div></div>
                  <div class="imgQuelle1"><div class="twoFiveNine">259€</div><div class="quelletext">Quelle Romantic Day For Couples IN Love</div></div>
                  <div class="imgfine1"><div class="oneninezero">190€</div><div class="finetext">Fine Gourmet<br /> Dinner</div></div>
                  <div class="imgInfo1"><div class="oneninezero">190€</div><div class="infotext">Information about sports and hiking possibilities</div></div>
               </div>
               <div class="btn2">
               <button class="requestbutton"> <a href="https://giggle.tips/">{(this.props.language)?'Mehr zu Giggle Tips' :'More about Giggle Tips'}</a></button>
               </div>
            </div>);

}
}
export default App;
