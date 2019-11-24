import React from 'react';
import './communicatecss.css'
class App extends React.Component {
   constructor(props) {

      super(props);
this.name = this.name.bind(this)
this.mail = this.mail.bind(this)
this.subject = this.subject.bind(this)
this.message = this.message.bind(this)
this.state={a:''}
this.state={b:''}
this.state={c:''}
this.state={d:''}
   }

   name(e){
      this.setState({a:e.target.value});
  }
  mail(e){
      this.setState({b:e.target.value});
  }
  subject(e){
      this.setState({c:e.target.value});
  }
  message(e){
      this.setState({d:e.target.value});
  }
  
   render() {
      return (
         
         <div class="padding5per communicateMain svgrightlast">
            <form>
         <div class="communicateForm">
            <div class="communicateFormRow displayColumFlex alignCenter">
               <div class="contentHeader padding2per">Say Hello</div>
               {(this.props.language) ?
                  <div class="content padding2per">Wir freuen uns auf deine Nachricht. </div>
                  :
                  <div class="content padding3per">We are looking forward to your message</div>}
            </div>

            <div class="communicateFormRow communicateFormRowOne">
               <div class="displayColumFlex">
                  <div class="inputLabel content padding3per padleft">Your Name</div>
                  <input type="text" onChange={this.name} value = {this.state.a}class="inputBox"></input>

               </div>
               <div class="displayColumFlex">

                  <div class="inputLabel content padding3per">Email</div>
                  <input type="text" class="inputBox" value = {this.state.b} onChange={this.mail}></input>
               </div>


            </div>
            <div class="communicateFormRow displayColumFlex">
               <div class="inputLabel content">Subject</div>
               
                  <input type="text" onChange={this.subject}value = {this.state.c} class="inputBox widthpadtext">

                  </input>
               
            </div>
            
            <div class="communicateFormRow displayColumFlex">
               <div class="inputLabel content">Message</div>
               
                  <input type="text" onChange={this.message} value = {this.state.d} class="inputBox messInputHeight widthpadtext"></input>
               
            </div>

            <div>
               <div class="textAlignCenter">
                  <button class="requestbutton5 floatRight marginright"> <a class = "btnFont5" href={"mailto:hello@giggle.tips?&Subject="+this.state.c+"&body="+this.state.d+"%0D%0A%0D%0A-- Thanks and Regards%0D%0A"+this.state.a+"%0D%0AMail To : "+this.state.b}>Send</a></button>
               </div>
            </div>
         </div>
         </form>
         </div>);
   }

}
export default App;