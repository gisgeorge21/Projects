import React from 'react';
import './Innovations.css'
class Innovations extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         modalIsOpen: false
      };
   }
   render() {
      return (
         <div class="innovationsmain marginTop">
            <div class="innovationstextBox alignLeft margin2d5per">
               <div class="innovationstext marginbottom1per">
                  {(this.props.language) ?
                     <div className="innovationstextBoxContent marginbottom1per alignCenter">
                        <div className="contentHeader alignLeft">Exklusiver Urlaub verdient eine Alles-inkIusive-Videoprodukion.</div>
                     </div> :
                     <div className="innovationstextBoxContent marginbottom1per alignLeft">
                        <div className="contentHeader">Exclusive holidays deserve an
                        all-inclusive video production.</div>
                     </div>
                  }

                  {(this.props.language) ?
                     <div className="innovationstextBoxContent marginbottom1per">
                        <div className="content">Ihr Hotel ist einzigartig: Falls nicht, machen wir es dazu. Mit
                        durchdachten Konzepten, einem geschmackvollen Drehbuch und
                        konsequentem Set-Management bringen wir Ihre Stärken zum
                        Vorschein. Bei der Umsetzung entscheiden wir uns immer für das
                        beste Equipment.</div></div>
                     :
                     <div className="innovationstextBoxContent marginbottom1per">
                        <div className="content">Your hotel is unique: If not, we make it unique. With well thought-out concepts, a
                        tasteful script and consistent set management, we highlight your stengths. We always
                        choose the best equipment for high quality results.</div></div>
                  }
                  <div>
                  <button class="requestbutton1"> <a class = "btnFont" href="mailto:hello@giggle.tips?Subject=Giggle-Content">REQUEST NOW</a></button>
                  </div>
               </div>
            </div>
            <div class="rightSideClipartsBox margin2d5per">
               <div class="clipartBoxing">
               <div class="rightSideCliparts rightSideCliparts-img1 "></div>
               <div class="rightSideCliparts rightSideCliparts-img2 backposright"></div>
               <div class="rightSideCliparts rightSideCliparts-img3 "></div>
               <div class="rightSideCliparts rightSideCliparts-img4 backposright"></div>
               </div>
            </div>
         </div>);
   }
}
export default Innovations;