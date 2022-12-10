import React from 'react';

class Img extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        src: this.props.src,
        error: false,
      };
  
     this.onError = this.onError.bind(this);
    }
  
    onError = () => {
      if (!this.state.error) {
        this.setState({
          src: this.props.defaultSrc,
          error: true,
        });
      }
    }
  
    render() {
      const { src } = this.state;
  
      return (
        <img
          src={src}
          onError={this.onError}
        />
      );
    }
  }
  
  export default Img;