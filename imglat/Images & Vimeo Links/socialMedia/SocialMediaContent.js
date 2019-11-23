import React from 'react';
import logo from './imglat/Images&VimeoLinks/img/Phone1InstaStory.jpg';
import video1 from './imglat/Images&VimeoLinks/videos/Phone 1 - Insta Story.mov'
import video2 from './imglat/Images&VimeoLinks/videos/Phone 2 - Insta Feed.mov'
import './SocialMediaContent.css';
import ReactPlayer from 'react-player'
import imgkd from'./imglat/Images&VimeoLinks/img/Image Pinterest.jpg';
import imageInstagram from'./imglat/Images&VimeoLinks/img/Image Instagram.jpg';
import instaFeed from './imglat/Images&VimeoLinks/img/Phone 2InstaFeed.png';
import instaLogo from './Logos/instagram.png'
import pinRestLogo from './Logos/pinrest.png'
import phoneBack from './Logos/PhoneBackImg.png';
class SocialMediaContent extends React.Component{

  constructor(props){
    super(props);
    this.state={
        instastory1:true,
        instastory2:true
      }
      
    this.playy=this.playy.bind(this);
    this.stop=this.stop.bind(this);
  }

  playy( t)
  {
    if(t=="instastory1")
    this.setState({instastory1:false});
    else
    this.setState({instastory2:false});
  }

  stop( t)
  {
    if(t=="instastory1")
    this.setState({instastory1:true});
    else
    this.setState({instastory2:true});
  }

  render() {
  return (
    <div className="socialMediaContent cl">
      <div class = "cl">
      <div>
        <div className="contentHeader textAlignCenter padtop5per">{(this.props.language)?'Auf mehr Ebenen berühren, um Gäste zu aktivieren.':'Touch on more levels to activate guests.'}</div>
      </div>
      
        <div className="content textAlignCenter padtop3per padbottom5per">
        {(this.props.language)?
            'Das Publikum von heute ist verwöhnt: Es sucht stets das Besondere. Wir optimieren Ihre Videos damit sie auf jeder Plattform funktionieren. Sie wollen eine Message transportieren: Das Format, die optimale Länge und den Style dazu haben wir für Sie.':
          'Today\'s audience is spoiled: They are looking for something special. We optimize your  videos so that they can be displayed on any platform. You want to share a message: We have the format, the optimal length and the style for you.'}
          
      </div>
      
       <div class="mob">
        <div class="mob1">
          <div class="teststory1">
            <div class="card">
              <div class="card-main">
                {
                (this.state.instastory1)?<img className="imageClassInstagram" src= {logo} onClick = {()=>{this.playy('instastory1');}} />:
                <div className="imageClassInstagram" ><ReactPlayer url={require('./imglat/Images&VimeoLinks/videos/Phone 1 - Insta Story.mov')}  onEnded ={()=>{this.stop('instastory1');}}  height="100%" width="100%"  controls playing/></div>}
              </div>
              <div class="card-footer background-none align-text-center">
                <input type = "button" value = "&#x21bb;Replay" class = "repbtn" onClick = {()=>{this.playy('instastory1');}}></input>
              </div>
            </div>
          </div>
          
          </div>

          <div class="instarightside">
          <div class="insta">
            <div class="youtube">
            </div>
          </div>

          <div class="facebook">
            <div class="printest">
            </div>
          </div>

        </div>
      </div>

      <div class="mob">
        <div class="mob1">
          <div class="feed">
          <div class="card">
              <div class="card-header card-footer-header-spacing">
              <div class = "byGiggleFont">By Giggle</div>
              </div>
              <div class="card-main ">
              <img src={pinRestLogo} class="social-media-logo"/>
               <img className="imageClassPinrest" src= {imgkd} ></img>
              </div>
              <div class="card-footer card-footer-header-spacing">
              </div>
            </div>
            </div>           
        </div>

        <div class="secondco">
          <div class="feed2">
            <div className={this.state.instastory2?"card positionabsolute":"card"}>
                <div class="card-header card-footer-header-spacing">
                <div class = "byGiggleFont">By Giggle</div>
                </div>
                <div class="card-main ">
                  <img src={instaLogo} class="social-media-logo"/>
                < img className="imageClassInstagram2" src= {imageInstagram} onClick={()=>{this.stop('instastory2');}}></img>
                </div>
                <div class="card-footer card-footer-header-spacing">
                </div>    
            </div>  
          </div>
        </div>
        <div class = "thirdco">
          <div class = "story2">
          <div class="card-main">
            {/*<img className="imageClassInstagramFeedBackPhone" src={phoneBack}></img>*/}
          <div class="card">            
                {
                (this.state.instastory2)?<img className="imageClassInstagramFeed" src= {instaFeed}  onClick = {()=>{this.playy('instastory2');}} />:
               <div className="imageClassInstagramFeed"> <ReactPlayer url={video2}  onEnded ={()=>{this.stop('instastory2');}} height ="100%" width="100%" controls playing/></div>}
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
}
export default SocialMediaContent;
