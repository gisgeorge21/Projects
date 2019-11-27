import React from 'react';
import './communicatecss.css'
class ContactForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         message: '', name: '', email: '', subject: '', formErrors: { email: '', message: '', name: '', subject: '' },
         emailValid: false, messageValid: false, subjectValid: false, nameValid: false,
         formValid: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value }, () => {
         this.validateField(name, value)
      });
   }

   handleSubmit(event) {
      event.preventDefault();
      const templateId = 'template_kxbAvTgM';
      this.sendFeedback(templateId, { message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email, subject: this.state.subject })
   }

   sendFeedback(templateId, variables) {
      window.emailjs.send(
         'gmail', templateId,
         variables
      ).then(res => {
         console.log('Email successfully sent!')
      })
         // Handle errors here however you like, or use a React error boundary
         .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
   }

   validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let messageValid = this.state.messageValid;
      let nameValid = this.state.nameValid;
      let subjectValid = this.state.subjectValid;

      switch (fieldName) {
         case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
         case 'message':
            messageValid = value.length >= 1;
            fieldValidationErrors.message = messageValid ? '' : ' should not be empty';
            break;
         case 'name':
            nameValid = value.length >= 1;
            fieldValidationErrors.name = nameValid ? '' : ' should not be empty';
            break;
         case 'subject':
            subjectValid = value.length >= 1;
            fieldValidationErrors.subject = subjectValid ? '' : ' should not be empty';
            break;
         default:
            break;
      }

      this.setState({
         formErrors: fieldValidationErrors,
         emailValid: emailValid,
         messageValid: messageValid
      }, this.validateForm);
   }

   validateForm() {
      this.setState({ formValid: this.state.emailValid && this.state.messageValid });
   }

   render() {
      return (

         <div class="padding5per communicateMain svgrightlast">
            <form onSubmit={this.handleSubmit}>
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
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} class="inputBox"></input>
                        {this.state.formErrors.name !== '' && <span className="error">Name is {this.state.formErrors.name}</span>}
                     </div>
                     <div class="displayColumFlex">

                        <div class="inputLabel content padding3per">Email</div>
                        <input type="text" name="email" class="inputBox" value={this.state.email} onChange={this.handleChange}></input>
                        {this.state.formErrors.email !== '' && <span className="error">Email is {this.state.formErrors.email}</span>}
                     </div>


                  </div>
                  <div class="communicateFormRow displayColumFlex">
                     <div class="inputLabel content">Subject</div>

                     <input type="text" name="subject" onChange={this.handleChange} value={this.state.subject} class="inputBox widthpadtext" />
                     {this.state.formErrors.subject !== '' && <span className="error">Subject is {this.state.formErrors.subject}</span>}

                  </div>

                  <div class="communicateFormRow displayColumFlex">
                     <div class="inputLabel content">Message</div>

                     <input type="text" name="message" onChange={this.handleChange} value={this.state.message} class="inputBox messInputHeight widthpadtext"></input>
                     {this.state.formErrors.message !== '' && <span className="error">Message is {this.state.formErrors.message}</span>}
                  </div>

                  <div>
                     <div class="textAlignCenter">
                        <button disabled={!this.state.formValid} type="submit" class="requestbutton5 floatRight marginright"> Send </button>
                     </div>
                  </div>
               </div>
            </form>
         </div >);
   }

}
export default ContactForm;