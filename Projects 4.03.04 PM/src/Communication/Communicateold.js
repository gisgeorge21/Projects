import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
<div class="LastPart">
               <div class="SayHead">
                  <p>Say Hello</p>
               </div>
               <div class="SayPara">
                  <pre>{(this.props.language) ?'Wir freuen uns auf deine Nachricht. ':'We are looking forward to your message'}</pre>
               </div>
               <div class="form">
                  <div class="FirstRow">
                     <div class="Name">Your Name</div>
                     <input type="text" class="namepad"></input>

                  </div>
                  <div class="SecondRow">

                     <div class="Mail">Email</div>
                     <input type="text" class="mailpad"></input>
                  </div>

               </div>
               <div class="sub">Subject</div>
               <div class="subjectetxt">
                  <input type="text" class="subjectpad">

                  </input>
               </div>
               <div class="mess-main">
                  <div class="mess">Message</div>
                  <div class="messtext">
                     <input type="text" class="messpad"></input>
                  </div>
               </div>
               <div class="btn3">
                  <button class="requestbutton sendbtn"> <a href="mailto:hello@giggle.tips">Send</a></button>
               </div>
        </div> );  }

}
export default App;