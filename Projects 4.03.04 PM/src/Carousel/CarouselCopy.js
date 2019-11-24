import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
import './Carousel.css'
import './CarouselCopy.css'
const customStyles = {
	content: {
		top: '49%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '90vw',
		height: '90vh',
		backgroundSize: 'contain',
      background: 'black',
      position:'absolute',
	},overlay: {zIndex: 1000}
};
const videos=[
"https://player.vimeo.com/video/288198156?title=0&byline=0&portrait=0&autoplay=1",
"https://player.vimeo.com/video/282645292?title=0&byline=0&portrait=0&autoplay=1",
"https://player.vimeo.com/video/372319221?title=0&byline=0&portrait=0&autoplay=1",
"https://player.vimeo.com/video/372326692?title=0&byline=0&portrait=0&autoplay=1",
"https://player.vimeo.com/video/281964305?title=0&byline=0&portrait=0&autoplay=1",
"https://player.vimeo.com/video/293344161?title=0&byline=0&portrait=0&autoplay=1",
"https://player.vimeo.com/video/311621313?title=0&byline=0&portrait=0&autoplay=1",
"https://player.vimeo.com/video/311620198?title=0&byline=0&portrait=0&autoplay=1",
"https://player.vimeo.com/video/372321709?title=0&byline=0&portrait=0&autoplay=1",
];

const images = [
    {
        src: "./Thumbnails/Alpenrose HR.png"
    },
    {
        src: "./Thumbnails/Alpenrose.png"
    },
    {
        src: "./Thumbnails/Alpin Lodge Das Zillergrund.png"
    },
    {
        src: "./Thumbnails/Cocoon.png"
    },
    {
        src: "./Thumbnails/Excelsior.png"
    },
    {
        src: "./Thumbnails/Alpenrose HR.png"
    },
    {
        src: "./Thumbnails/Alpenrose HR.png"
    },
    {
        src: "./Thumbnails/Alpenrose HR.png"
    },
    {
        src: "./Thumbnails/Alpenrose HR.png"
    }
];
let tranformStyles = {
    content: {
        transform: 'translateX(-400%)'
    }
};
const classNamesTransform=[
    "tranlate00",
    "tranlate100",
    "tranlate200",
    "tranlate300",
    "tranlate400",
    "tranlate500",
    "tranlate600",
    "tranlate700",
    "tranlate800",
    "tranlate900",
]
class Innovations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            tranformStyles : {
                content: {
                   transform: 'translateX(-400%)'
                }
            },
            classnameTr:'tranlate400'
        };
        this.setIndex = this.setIndex.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            index: 0,

        }

    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    setIndex(i) {
        this.setState({ index: i });
        let z=(i * -100);
       let y='translateX('+z+'%)';
        tranformStyles = {
            content: {
                transform: y
            }
        }
        this.setState({ tranformStyles : {
            content: {
                transform: y
            }
        } });
    }
render() {
    return (
        <div id="videos" class="e-second marginbottomnone">
            
            {(this.props.language) ?
            <div>
           {/*  <div className="contentHeader textAlignCenter">Jeder Urlaubstraum passt in ein Video.</div>
            <div className="content textAlignCenter">Hole Deine Gäste also online so ab, wie Du es auch in Deinem Hotel tun würdest:</div>
            <div className="content textAlignCenter">Emotional. Und mit dem Besten, das Du zu bieten hast. Wir schaffen Video-Content</div>
            <div className="content textAlignCenter">mit viel Fantasie, starken Bildern und der Story, die Dein Hotel ins richtige Licht rückt.</div>
            </div>: */}
             <div className="contentHeader textAlignCenter">Jeder Urlaubstraum passt in ein Video.</div>
            <div className="content textAlignCenter">Hole Deine Gäste also online so ab, wie Du es auch in Deinem Hotel tun würdest:
            Emotional. Und <br/>mit dem Besten, das Du zu bieten hast. Wir schaffen Video-Content
            mit viel Fantasie, starken <br/> Bildern und der Story, die Dein Hotel ins richtige Licht rückt.</div>
            </div>:
            <div>
            <div className="contentHeader textAlignCenter">Every holiday dream fits into a video.</div>
            <div className="content textAlignCenter">Reach your guests online just like you would at your hotel: Emotionally. And <br/>with the
            best you have to offer. We create video content with great imagination, strong <br/>images
            and the story that puts your hotel in the right light.</div>
             </div>
}

            <div class="e-s-videos-wrapper">
                <div className={classNamesTransform[this.state.index]} >
                    <div className={this.state.index == 0 ? 'video active' : 'video '} onClick={this.state.index == 0 ?this.openModal:()=>{this.setIndex(0);}}><video></video>
                        <div class="bg" ></div>
                        <div class="play-button"></div>
                    </div>
                    <div className={this.state.index == 1 ? 'video active' : 'video '}  onClick={this.state.index == 1 ?this.openModal:()=>{this.setIndex(1);}}><video></video>
                        <div class="bg"></div>
                        <div class="play-button"></div>
                    </div>
                    <div className={this.state.index == 2 ? 'video active' : 'video '} onClick={this.state.index == 2 ?this.openModal:()=>{this.setIndex(2);}}><video></video>
                        <div class="bg" ></div>
                        <div class="play-button"></div>
                    </div>
                    <div className={this.state.index == 3 ? 'video active' : 'video '} onClick={this.state.index == 3 ?this.openModal:()=>{this.setIndex(3);}}><video></video>
                        <div class="bg" ></div>
                        <div class="play-button"></div>
                    </div>
                    <div className={this.state.index == 4 ? 'video active' : 'video '} onClick={this.state.index == 4 ?this.openModal:()=>{this.setIndex(4);}}><video></video>
                        <div class="bg" ></div>
                        <div class="play-button"></div>
                    </div>
                    <div className={this.state.index == 5 ? 'video active' : 'video '} onClick={this.state.index == 5 ?this.openModal:()=>{this.setIndex(5);}}><video></video>
                        <div class="bg"></div>
                        <div class="play-button"></div>
                    </div>
                    <div className={this.state.index == 6 ? 'video active' : 'video '} onClick={this.state.index == 6 ?this.openModal:()=>{this.setIndex(6);}}><video></video>
                        <div class="bg"></div>
                        <div class="play-button"></div>
                    </div>
                    <div className={this.state.index == 7 ? 'video active' : 'video '} onClick={this.state.index == 7 ?this.openModal:()=>{this.setIndex(7);}}><video></video>
                        <div class="bg"></div>
                        <div class="play-button"></div>
                    </div>
                    <div className={this.state.index == 8 ? 'video active' : 'video '}onClick = {this.state.index == 8 ?this.openModal:()=>{this.setIndex(8);}}><video></video>
                        <div class="bg"></div>
                        <div class="play-button"></div>
                    </div>
                </div>
            </div>

            <div class="e-s-indicators">
                <div className={this.state.index == 0 ? 'active' : ' '} onClick={() => { this.setIndex(0) }}></div>
                <div className={this.state.index == 1 ? 'active' : ' '} onClick={() => { this.setIndex(1) }}></div>
                <div className={this.state.index == 2 ? 'active' : ' '} onClick={() => { this.setIndex(2) }}></div>
                <div className={this.state.index == 3 ? 'active' : ' '} onClick={() => { this.setIndex(3) }}></div>
                <div className={this.state.index == 4 ? 'active' : ' '} onClick={() => { this.setIndex(4) }}></div>
                <div className={this.state.index == 5 ? 'active' : ' '} onClick={() => { this.setIndex(5) }}></div>
                <div className={this.state.index == 6 ? 'active' : ' '} onClick={() => { this.setIndex(6) }}></div>
                <div className={this.state.index == 7 ? 'active' : ' '} onClick={() => { this.setIndex(7) }}></div>
                <div className={this.state.index == 8 ? 'active' : ' '} onClick={() => { this.setIndex(8) }}></div>
            </div>
            <Modal isOpen={this.state.modalIsOpen}
          style={customStyles}>
          <div className="closeModal">
                <button class = "btn" onClick={this.closeModal}>
                  <div class = "btnclose" >X</div>
                </button>

          </div>
          <ReactPlayer url={videos[this.state.index]} 
           height ="100%" width="100%" className="imageClassInstagramFeed" controls playing/>
          </Modal>
        </div>
    );
}
        }
export default Innovations;