import React from 'react';

class Close extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newClickCount = this.state.clickCount + 1;
    this.setState({ clickCount: newClickCount });

  }

  render() {
    let close = (event)=>{confirm("Are you sure?")}


    return(
      <div onClick={this.handleClick}>
        <i className="fa fa-times fa-2x" aria-hidden="true" onClick = {close}></i>
      </div>

    )
  }
}

export default Close;
