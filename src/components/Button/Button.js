import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

class Button extends Component {
  scroll = () => {
    this.props.onClick();
    scroll.scrollToBottom();
  };

  render() {
    return (
      <button onClick={this.scroll} className="Button" type="button">
        Load more
      </button>
    );
  }
}

export default Button;
