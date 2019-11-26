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
import ContactForm from './Communication/Communicate'
import Footer from './Footer/footer'
import SingleImageVideo from './SingleImageVideo/SingleImageVideo'
import Header from './Header/App'
import ImgphotoshootCopy from './ImagePhotoshoot/ImgPhotoshootCopy'
import ImgphotoshooUpdtd from './ImagePhotoshoot/imgPhotoshootUpdated'
import NewHeader from './Header/Header'
import Carousel from './Carousel/Carousel'
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

         <div className="entireApp">
            <div className="e-first relative">
               <div className="e-nav">
                  <div className="e-padding"></div>
                  <div className="e-nav-content">
                     <div className="logo-wrapper pointer">
                        <div className="logo"></div><span className="mrg-left-10px color-white font-medium">Giggle Content</span>
                     </div>
                     <div className="links"><span className="font-book mrg-right-30px color-white pointer">Home</span>


                        <span>{(this.state.language) ?
                           <span className="font-book mrg-right-30px color-white pointer">Leistungen</span> :
                           <span className="font-book mrg-right-30px color-white pointer">Services</span>
                        }
                        </span>
                        <span>{(this.state.language) ?
                           <span className="font-book mrg-right-30px color-white pointer">Kontakt</span> :
                           <span className="font-book mrg-right-30px color-white pointer">Contact</span>
                        }
                        </span>


                        <a className="font-book mrg-right-30px color-white pointer">Login</a><span
                           className="font-book mrg-right-30px color-white pointer vdivider relative"><span className="font-book">{(this.state.language) ? 'De' : 'En'}</span><span
                              className="e-drop-down-nav">
                              <div className="content language">
                                 <a onClick={() => { this.changeLanguage(false); }}>English</a>
                                 <a className="margin-top-10px" onClick={() => { this.changeLanguage(true); }}>German</a></div>
                           </span></span></div>
                     <div className="sidebar-switcher backgroundImage" onClick={this.openSideBar}
                     ></div>
                  </div>
                  <div className="e-padding"></div>
               </div>

               <div className={this.state.theposition > .073 ? "h-nav sticky show height40px" : "h-nav sticky hide"}>
                  <div className="h-padding"></div>
                  <div className="h-nav-content">
                     <div className="logo-wrapper pointer">
                        <div className="logo"></div><span className="mrg-left-10px font-medium font-book">Giggle Content</span>
                     </div>
                     <div className="links"><span className="font-book mrg-right-30px pointer">Home</span>
                        <span
                           className="font-book mrg-right-30px pointer relative"><span className="font-book">{(this.state.language) ? 'Leistungen' : 'Services'}</span>
                        </span>

                        <span className="font-book mrg-right-30px pointer">{(this.state.language) ? 'Kontakt' : 'Contact'}</span>

                        <a className="font-book mrg-right-15px pointer">Login</a>
                        <span className="font-book mrg-right-15px pointer slashbold">|</span>
                        <span className="font-book mrg-right-30px pointer relative"><span className="font-book">{(this.state.language) ? 'De' : 'En'}</span><span
                           className="h-drop-down-nav">
                           <div className="content language">
                              <a onClick={() => { this.changeLanguage(false); }}>English</a>
                              <a className="margin-top-10px" onClick={() => { this.changeLanguage(true); }}>German</a></div>
                        </span></span></div>
                  </div>
                  <div className="h-padding"></div>
               </div>
               <div className={this.state.sideBar ? "g-side-bar active" : "g-side-bar "}>
                  <div className="g-sider-bar-x" onClick={this.closeSideBar}></div>
                  <div className="g-side-bar-content"><span className="g-side-bar-content-item font-book pointer"><a>Home</a></span><span
                     className="g-side-bar-content-item font-book pointer items"><a>{(this.state.language) ? 'Leistungen' : 'Services'}</a>





                  </span><span className="g-side-bar-content-item font-book pointer"><a>{(this.state.language) ? 'Kontakt' : 'Contact'}</a></span><span
                     className="g-side-bar-content-item font-book"><a>Login</a></span></div>
               </div>
               <div className="e-first-content">
                  <div className="e-padding"></div>
                  <div className="row">
                     {(this.state.language) ?
                        <div className="color-white margin-0">
                           <div className="mainHeaderText">Wir gestalten Hotel-Videos</div>
                           <div className="mainHeaderText">für eine neue Wirklichkeit.</div>
                        </div>
                        :
                        <div className="color-white margin-0">
                           <div className="mainHeaderText">We create a new reality</div>
                           <div className="mainHeaderText">with our hotel-videos.</div>
                        </div>}
                     <div className="play-video-wrapper">
                        <div></div><span onClick={this.openModal}>Play Video</span>
                     </div>
                  </div>
                  <div className="e-padding"></div>
               </div>
               <div className="arrow-down-wrapper">
                  <div className="e-padding"></div>
                  {/* <div className="img downarrow" onClick={() => { window.scrollTo(0, .095); }}></div> */}
                  <div className="e-padding"></div>
               </div>

            </div>
            <Modal
               isOpen={this.state.modalIsOpen}
               style={customStyles}>
               <div className="closeModal">
                  <button className="btn" onClick={this.closeModal}>
                     <div className="btnclose" >X</div>
                  </button>

               </div>
               <iframe src="https://player.vimeo.com/video/313363109?title=0&byline=0&portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" scrolling="no" allowfullscreen></iframe>
            </Modal>





            <div className="allChildMargin innerpadding5per">
               {/*<button onClick={this.changeLanguage}>Toggle Language </button>*/}
               {/*<NewHeader language={this.state.language} />*/}
               <CarouselCopy language={this.state.language} />
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
               <ContactForm language={this.state.language} />
               <Footer language={this.state.language} />
            </div>
         </div>
      );
   }
}
export default App;
