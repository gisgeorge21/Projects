import React from 'react';
import './App.css';
class innovations extends React.Component{
   constructor(props) {
     super(props); 
      
    }
render (){
    return(
    <div class="main">
            <div class="Exklusivermain">
               <pre class="Head"> {(this.props.language)?'﻿Exklusiver Urlaub verdient eine \n Alles-inkIusive-Videoprodukion.':'English Text' }</pre>
               <pre class="Para">
                    {(this.props.language)?'Ihr Hotel ist einzigartig: Falls nicht, machen wir es dazu. Mit\n durchdachten Konzepten, einem geschmackvollen Drehbuch und\n konsequentem Set-Management bringen wir Ihre Stärken zum\nVorschein. Bei der Umsetzung entscheiden wir uns immer für das\n beste Equipment.' : 'English Text' }</pre>
               {/* <input type="button" class="requestbutton" value="REQUEST NOW"  /> */}
               <button> <a href="REQUEST NOW"></a></button>
            </div>
            <div class="rightSideImage">
               <div class="imgThree"></div>
               <div class="speakerPad">
                  <div class="imgSpeaker">
                  </div>
               </div>
               <div class="imgDance"></div>
               <div class="bulbPad">
                  <div class="imgBulb">
                  </div>
               </div>
            </div>
         </div>);
}