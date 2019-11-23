import React from 'react';
import './giggleStyles.css'
class App extends React.Component {
    constructor(props) {

        super(props);
        //this.findlanguage = this.findlanguage.bind(this);
        this.myref=React.createRef();
this.selectWidget=this.selectWidget.bind(this);
    }

    componentWillMount() {
        const widgetscriptdiv=document.createElement('div');
        widgetscriptdiv.id = 'widgetid';
        const script = document.createElement("script");
        script.src = "https://d27mylpt7bebkr.cloudfront.net/static-images/widget/prod/widget.js?id=gt1&path=innsbruck-demo&width=100%&fontCol=505050&btCol=3AB2A5&font=Rubik&lang=de&streams=4a31716b-ba33-49a3-bf98-b8ee644d6de0&showCategoryFilter=true";
        script.async = true;
        widgetscriptdiv.appendChild(script);
        const script2 = document.createElement("script");
        script2.src = "https://d27mylpt7bebkr.cloudfront.net/static-images/widget/prod/widget.js?id=gt2&path=innsbruck-demo&width=100%&fontCol=505050&btCol=3AB2A5&font=Rubik&lang=en&streams=4a31716b-ba33-49a3-bf98-b8ee644d6de0&showCategoryFilter=true";
        script2.async = true;
        widgetscriptdiv.appendChild(script2);
        document.body.appendChild(widgetscriptdiv);
    }
    selectWidget() {
        if(document.getElementById("gt1")!=null)
        if(this.props.language){
         document.getElementById("gt1").style.display="block";
         document.getElementById("gt2").style.display="none";
        }else{
        document.getElementById("gt1").style.display="none";
         document.getElementById("gt2").style.display="block";
        }
}
    render() {
        this.selectWidget();
        return (
            <div class="giggleCard gigglesvg ">
                       <div class="giggleCardItems textAlignCenter backcolor">
                    {(this.props.language) ?
                        <div>
                            <div class="contentHeader">﻿Giggle Tips - die neue Form der </div>
                            <div class="contentHeader">Erlebniskommunikation</div>
                            <div class="content padhead">Wir verwandeln jedes Urlaubserlebnis in einen einzigartigen, direkt
                            buchbaren Erlebnisguide. Gemacht für die neue Generation von Reisenden.</div></div> :
                        <div>
                            <div class="contentHeader">Giggle Tips - the new way of communicating experiences.</div>
                            <div class="content padhead" >We transform every holiday experience into a unique, directly bookable adventure.
                            Made for the new generation of travellers.</div>
                        </div>}
                </div>
                <div class="giggleCardItems backcolor">
                     <div id='gt1' className="widget width100per"></div>
                <div id='gt2' className="widget width100per"></div></div>
                <div class="giggleCardItems">
                <div className="textAlignCenter">
                <button class="requestbutton4"> <a href="mailto:hello@giggle.tips?Subject=Giggle-Content"><div class = "btnFont4">{(this.props.language)?'Mehr zu Giggle Tips' : 'More about Giggle Tips'}</div></a></button>
                  </div>
                </div>
            </div>

        );

    }
}
export default App;
