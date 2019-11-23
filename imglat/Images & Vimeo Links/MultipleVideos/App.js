import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width:'100vw',
    height:'100vh',
    backgroundSize:'contain',
    background:'black',
    
  }
};
class App extends React.Component{
  constructor() {
    super();
  

    this.state = {
      modalIsOpen: false,
      url:""
    };  
    this.openModal = this.openModal.bind(this);
    
    this.closeModal = this.closeModal.bind(this);
    }

  openModal(a) {
    this.setState({modalIsOpen: true,url:a});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

render(){
   return (
     <div>
       		<div className = "Head">
                        <pre>{(this.props.language)?'Jeder Urlaubstraum passt in ein Video':'Every holiday dream fits into a video.'}</pre>
                    </div>
                    <div className = "HolenPara">
                        <pre>{(this.props.language)?'Holen Sie Ihre Gäste also online so ab, wie Sie es auch in Ihrem Hotel tun würden: Emotional. Und,\n mit dem Besten, das Sie zu bieten haben.Wir schaffen Video-Content mit Viel Fantasie, starken\nBildern und der Story, die Ihr Hotel ins richtige Licht rückt.':
                        'Reach your guests online just like you would at your hotel: Emotionally.\n And with the best you have to offer. We create video content with great imagination, strong images\n and the story that puts your hotel in the right light.'}</pre>
                    </div>
     <div class="multiVieoDiv">
        <div class = "multiVideofirstRow">
        <div class = "im"><div class = "multiVideoimg1"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/288198156?title=0&byline=0&portrait=0&autoplay=1");}}> </div> </div></div>
        <div class = "im"><div class = "multiVideoimg2"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/282645292?title=0&byline=0&portrait=0&autoplay=1" );}}> </div> </div></div>
        <div class = "im"><div class = "multiVideoimg3"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/372319221?title=0&byline=0&portrait=0&autoplay=1");}}> </div> </div></div>
        </div>


        <div class = "multiVideosecondRow">
        <div class = "im"><div class = "multiVideoimg4"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/372326692?title=0&byline=0&portrait=0&autoplay=1");}}> </div> </div></div>
        <div class = "im"><div class = "multiVideoimg5"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/281964305?title=0&byline=0&portrait=0&autoplay=1");}}> </div> </div></div>
        <div class = "im"><div class = "multiVideoimg6"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/293344161?title=0&byline=0&portrait=0&autoplay=1");}}> </div> </div></div>
        </div>


        <div class = "multiVideothirdRow">
        <div class = "im"><div class = "multiVideoimg7"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/311621313?title=0&byline=0&portrait=0&autoplay=1");}}> </div> </div></div>
        <div class = "im"><div class = "multiVideoimg8"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/311620198?title=0&byline=0&portrait=0&autoplay=1");}}> </div> </div></div>
        <div class = "im"><div class = "multiVideoimg9"><div class = "videoPlayButton" onClick={()=>{this.openModal("https://player.vimeo.com/video/372321709?title=0&byline=0&portrait=0&autoplay=1");}}> </div></div></div>
        </div> 
       
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
        >
          <div className="closeModal">
                <button class = "btn" onClick={this.closeModal}>
                  <div class = "btnclose" >X</div>
                </button>

          </div>
          <iframe src={this.state.url}  width="100%" height="100%"  frameborder="0" allow="autoplay; fullscreen" scrolling="no"allowfullscreen></iframe>
          </Modal>
     </div>
     </div>
    );
  }
}
  export default App;
