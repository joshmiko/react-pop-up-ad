import React from 'react';

class EmailForm extends React.Component {
  render() {
    let button = (event)=>{
      event.preventDefault();
      console.log("Form Submitted")
    }

    return(
      <div className="row">
        <form onSubmit = {button}>
          <div className="small-9 columns">
            <input type="email" placeholder="Your email here" id="emailForm" />
          </div>
          <div className="small-3 columns">
            <input type="submit" value="CLAIM YOUR PRIZE" id="submitButton" />
          </div>
        </form>
      </div>
    )
  }
}

export default EmailForm;
