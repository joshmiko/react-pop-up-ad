import React from 'react';
import Close from './Close';
import EmailForm from './EmailForm';

class Container extends React.Component {

  render() {
    let headerText = "You have won tickets to see Taylor Swift!!"
    let text = "Please enter your email so we can send you the tickets";

    return(
      <div className ="pink">
      <Close />
        <div className ="add-text">
          <h1>
            {headerText}
          </h1>
          <h3>
            {text}
          </h3>
        </div>
        <EmailForm />
      </div>
    );
  }
};

export default Container;
