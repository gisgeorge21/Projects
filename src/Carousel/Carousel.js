import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Gallery, GalleryImage } from "react-gesture-gallery";
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
import './Carousel.css'
 const customStyles = {
    content: {
        top: '49%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        backgroundSize: 'contain',
        background: 'black',

    }

}; 

const styles={content:{backgroundColor: '#282828',}};
const nonstyles={content:{backgroundColor: 'red',}};
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
class Innovations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.setIndex = this.setIndex.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        /*
        this.state={
            imageOne:'',
            imageTwo:'',
            imageThree:'',
            imageFour:'',
            imageFive:'',
            imageSix:'',
            imageSeven:'',
            imageEight:'',
            imageNinie:'',
            
        }
        */
       this.state={
        index:0
       }

    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    setIndex(i)
    {
        this.setState({index:i});
    }
    render() {
        return (
                /*
                <div>
                    <div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={3}
                        currentSlide={1}
                    >
                        <Slider>
                            <Slide index={0}><img src={require('./Thumbnails/Alpenrose HR.png')} /></Slide>
                            <Slide index={1}><img src={require('./Thumbnails/Alpenrose HR.png')} /></Slide>
                            <Slide index={2}><img src={require('./Thumbnails/Alpenrose HR.png')} /></Slide>
                        </Slider>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                    </CarouselProvider>
                </div>
                */
                <div>
                <div style={{ background: "white", width: "100vw", height: "90vh" }}>
                    <Gallery
                         index={this.state.index}
                         onRequestChange={i => {
                           this.setIndex(i);
                         }}                >
                        
                            <GalleryImage objectFit="contain" key={"./Thumbnails/Alpenrose HR.png"} src={require("./Thumbnails/Alpenrose HR.png")} onClick={this.openModal}>
                                </GalleryImage>
                            <GalleryImage objectFit="contain" key={"./Thumbnails/Alpenrose HR.png"} src={require("./Thumbnails/Alpenrose HR.png")} />
                            <GalleryImage objectFit="contain" key={"./Thumbnails/Alpenrose HR.png"} src={require("./Thumbnails/Alpenrose HR.png")} />
                            <GalleryImage objectFit="contain" key={"./Thumbnails/Alpenrose HR.png"} src={require("./Thumbnails/Alpenrose HR.png")} />
                            <GalleryImage objectFit="contain" key={"./Thumbnails/Alpenrose HR.png"} src={require("./Thumbnails/Alpenrose HR.png")} />
                    </Gallery>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}
                    scrollable={false}
                >
                    <div className="closeModal">
                        <button class="btn" onClick={this.closeModal}>
                            <div class="btnclose" >X</div>
                        </button>

                    </div>
                   {/* <iframe src="https://player.vimeo.com/video/313363109?title=0&byline=0&portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" scrolling="no" allowfullscreen></iframe>
               */}
               <ReactPlayer url={"https://player.vimeo.com/video/313363109?title=0&byline=0&portrait=0&autoplay=1"}  height ="100%" width="100%" className="imageClassInstagramFeed" controls playing/>
               </Modal>
    {       /*
                    <div id="videos" class="e-second">
                        <h2 class="title margin-0 font-bold">Moving moments.</h2>
                        <p>For travelers, hotel owners and everyone else who is dreaming about holiday.</p>
                        <div class="e-s-videos-wrapper">
                            <div /* style="transform: translateX(-300%);"*/
                /*                   <div class="video "><video></video>
                                    <div class="bg"></div>
                                    <div class="play-button"></div>
                                </div>
                                <div class="video "><video></video>
                                    <div class="bg"></div>
                                    <div class="play-button"></div>
                                </div>
                                <div class="video "><video></video>
                                    <div class="bg"></div>
                                    <div class="play-button"></div>
                                </div>
                                <div class="video active"><video></video>
                                    <div class="bg"></div>
                                    <div class="play-button"></div>
                                </div>
                                <div class="video "><video></video>
                                    <div class="bg"></div>
                                    <div class="play-button"></div>
                                </div>
                                <div class="video "><video></video>
                                    <div class="bg"></div>
                                    <div class="play-button"></div>
                                </div>
                            </div>
                        </div>
               */}
                        <div class="e-s-indicators">
                            <div className={this.state.index==0? 'active':' '} onClick={()=>{this.setIndex(0)}}></div>
                            <div className={this.state.index==1? 'active':' '} onClick={()=>{this.setIndex(1)}}></div>
                            <div className={this.state.index==2? 'active':' '} onClick={()=>{this.setIndex(2)}}></div>
                            <div className={this.state.index==3? 'active':' '} onClick={()=>{this.setIndex(3)}}></div>
                            <div className={this.state.index==4? 'active':' '} onClick={()=>{this.setIndex(4)}}></div>
                            <div className={this.state.index==5? 'active':' '} onClick={()=>{this.setIndex(5)}}></div>
                            <div className={this.state.index==6? 'active':' '}onClick={()=>{this.setIndex(6)}}></div>
                            <div className={this.state.index==7? 'active':' '} onClick={()=>{this.setIndex(7)}}></div>
                            <div className={this.state.index==8? 'active':' '} onClick={()=>{this.setIndex(8)}}></div>
                        </div>
                    </div>
        );
            }
        }
export default Innovations;