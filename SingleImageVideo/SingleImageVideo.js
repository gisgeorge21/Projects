import React from 'react';
import Modal from 'react-modal';
import '../App.css';
import './SingleImageVideo.css'
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
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        return (

            <div class = "svg">
                <div>
                    {(this.props.language) ?
                        <div class="contentHeader alignCenter">Geben Sie Talenten ein Zuhause. Mit smartem</div> :
                        <div class="contentHeader alignCenter">Give talents a home. With smart HR content.</div>
                    }
                </div>
                <div className="singleVideoImg backpositionCenter padding5per">
                    <div className="singleVideoImgPlay" onClick={this.openModal}> </div></div>
                <div className="textAlignCenter padding3per">
                  <button class="requestbutton3"> <a class = "btnFont3" href="mailto:hello@giggle.tips?Subject=Giggle-Content">REQUEST NOW</a></button>
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
            </div>);
    }
}
export default App;