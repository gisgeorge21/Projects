import React from 'react';
import './App.css';
import './FontSize.css'
import './imported.css'
import './CommonItems.css'
import SocialMedia from './socialMedia/SocialMediaContent'
import Innovations from './Innovations/innovations'
import MultipleVideos from './MultipleVideos/App'
import ThreeImages from './Block4/ThreeImages'
import ImagePhotoShoot from './ImagePhotoshoot/ImagePhotoshoot'
import Giggle from './Giggle/giggle'
import Communicate from './Communication/Communicate'
import Footer from './Footer/footer'
import SingleImageVideo from './SingleImageVideo/SingleImageVideo'
import Header from './Header/App'
import ImgphotoshootCopy from './ImagePhotoshoot/ImgPhotoshootCopy'
import ImgphotoshooUpdtd from './ImagePhotoshoot/imgPhotoshootUpdated'
import CarouselCopy from './Carousel/CarouselCopy'
import Modal from 'react-modal';
import GiggleNew from './Giggle/GiggleNew'
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
      position: 'absolute',
   }, overlay: { zIndex: 1000 }
};
class App extends React.Component {
   constructor() {
      super();
      this.state = {
         language: true,/* True-GERMAN,false-ENGLISH*/
         modalIsOpen: false,
         sideBar: false,
         theposition: window.pageYOffset,
      };
      this.changeLanguage = this.changeLanguage.bind(this);

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.openSideBar = this.openSideBar.bind(this);
      this.closeSideBar = this.closeSideBar.bind(this);
   }

   componentDidMount() {
      window.addEventListener('scroll', this.listenToScroll)
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.listenToScroll)
   }

   listenToScroll = () => {
      const winScroll =
         document.body.scrollTop || document.documentElement.scrollTop

      const height =
         document.documentElement.scrollHeight -
         document.documentElement.clientHeight

      const scrolled = winScroll / height

      this.setState({
         theposition: scrolled,
      })
   }

   openModal() {
      this.setState({ modalIsOpen: true });
   }

   closeModal() {
      this.setState({ modalIsOpen: false });
   }

   openSideBar() {
      this.setState({ sideBar: true });
   }

   closeSideBar() {
      this.setState({ sideBar: false });
   }

   changeLanguage(lang) {
      if (!lang) {
         this.setState({ language: false })
      }
      else {
         this.setState({ language: true })
      }
   }
   render() {
      return (

         <div class="entireApp">
            <div class="e-first relative">
               <div class="e-nav">
                  <div class="e-padding"></div>
                  <div class="e-nav-content">
                     <div class="logo-wrapper pointer">
                        <div class="logo"></div><span class="mrg-left-10px color-white font-medium">Giggle Content</span>
                     </div>
                     <div class="links"><span class="font-book mrg-right-30px color-white pointer">Home</span>

            
                     <span>{(this.state.language) ?
                        <span class="font-book mrg-right-30px color-white pointer">Leistungen</span> :
                        <span class="font-book mrg-right-30px color-white pointer">Services</span>
                    }
                </span>
                     <span>{(this.state.language) ?
                        <span class="font-book mrg-right-30px color-white pointer">Kontakt</span> :
                        <span class="font-book mrg-right-30px color-white pointer">Contact</span>
                    }
                </span>
               
                    
                <a class="font-book mrg-right-30px color-white pointer">Login</a><span
                           class="font-book mrg-right-30px color-white pointer vdivider relative"><span class = "font-book">{(this.state.language) ? 'De' : 'En'}</span><span
                              class="e-drop-down-nav">
                              <div class="content language">
                                 <a onClick={() => { this.changeLanguage(false); }}>English</a>
                                 <a class="margin-top-10px" onClick={() => { this.changeLanguage(true); }}>German</a></div>
                           </span></span></div>
                     <div class="sidebar-switcher backgroundImage" onClick={this.openSideBar}
                     ></div>
                  </div>
                  <div class="e-padding"></div>
               </div>

               <div className={this.state.theposition > .073 ? "h-nav sticky show height40px" : "h-nav sticky hide"}>
                  <div class="h-padding"></div>
                  <div class="h-nav-content">
                     <div class="logo-wrapper pointer">
                        <div class="logo"></div><span class="mrg-left-10px font-medium font-book">Giggle Content</span>
                     </div>
                     <div class="links"><span class="font-book mrg-right-30px pointer">Home</span>
                     <span
                        class="font-book mrg-right-30px pointer relative"><span class="font-book">{(this.state.language) ?'Leistungen':'Services'}</span>
                     </span>
                     
                     <span class="font-book mrg-right-30px pointer">{(this.state.language) ?'Kontakt':'Contact'}</span>
                    
                     <a class="font-book mrg-right-15px pointer">Login</a>
                        <span class = "font-book mrg-right-15px pointer slashbold">|</span>
                        <span class="font-book mrg-right-30px pointer relative"><span class="font-book">{(this.state.language) ? 'De' : 'En'}</span><span
                              class="h-drop-down-nav">
                              <div class="content language">
                                 <a onClick={() => { this.changeLanguage(false); }}>English</a>
                                 <a class="margin-top-10px" onClick={() => { this.changeLanguage(true); }}>German</a></div>
                           </span></span></div>
                  </div>
                  <div class="h-padding"></div>
               </div>
               <div className={this.state.sideBar ? "g-side-bar active" : "g-side-bar "}>
                  <div class="g-sider-bar-x" onClick={this.closeSideBar}></div>
                  <div class="g-side-bar-content"><span class="g-side-bar-content-item font-book pointer"><a>Home</a></span><span
                     class="g-side-bar-content-item font-book pointer items"><a>{(this.state.language) ? 'Leistungen' : 'Services'}</a>





                  </span><span class="g-side-bar-content-item font-book pointer"><a>{(this.state.language) ? 'Kontakt' : 'Contact'}</a></span><span
                     class="g-side-bar-content-item font-book"><a>Login</a></span></div>
               </div>
               <div class="e-first-content">
                  <div class="e-padding"></div>
                  <div class="row">
                     {(this.state.language) ?
                        <div class="color-white margin-0">
                           <div class="mainHeaderText">Wir gestalten Hotel-Videos</div>
                           <div class="mainHeaderText">für eine neue Wirklichkeit.</div>
                        </div>
                        :
                        <div class="color-white margin-0">
                           <div class="mainHeaderText">We create a new reality</div>
                           <div class="mainHeaderText">with our hotel-videos.</div>
                        </div>}
                     <div class="play-video-wrapper">
                        <div></div><span onClick={this.openModal}>Play Video</span>
                     </div>
                  </div>
                  <div class="e-padding"></div>
               </div>
               <div class="arrow-down-wrapper">
                  <div class="e-padding"></div>
                  {/* <div class="img downarrow" onClick={() => { window.scrollTo(0, .095); }}></div> */}
                  <div class="e-padding"></div>
               </div>

            </div>
            <Modal
               isOpen={this.state.modalIsOpen}
               style={customStyles}>
               <div className="closeModal">
                  <button class="btn" onClick={this.closeModal}>
                     <div class="btnclose" >X</div>
                  </button>

               </div>
               <iframe src="https://player.vimeo.com/video/313363109?title=0&byline=0&portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" scrolling="no" allowfullscreen></iframe>
            </Modal>





<div className="allChildMargin innerpadding5per">
            {/*<button onClick={this.changeLanguage}>Toggle Language </button>*/}
            {/*<NewHeader language={this.state.language} />*/}
            <CarouselCopy language={this.state.language}/>
            {/*        <ImgphotoshootCopy />*/}
            <SocialMedia language={this.state.language} />
            <Innovations language={this.state.language} />
            <ThreeImages language={this.state.language} />
            <SingleImageVideo language={this.state.language} />
            <ImgphotoshooUpdtd language={this.state.language} />
            {/*} <ImagePhotoShootUpdated language={this.state.language} />*/}

            {/*()} <ImagePhotoShoot language={this.state.language} />*/}
            {/*} <ImagePhotoShoot language={this.state.language} />*/}
            {/* <Giggle language={this.state.language} />*/}
            <GiggleNew language={this.state.language} />
            <Communicate language={this.state.language} />
            <Footer language={this.state.language} />
            </div>
         </div>
      );
   }
}
export default App;
