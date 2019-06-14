import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  getDiscount() {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.getDiscount();
    }, 30);
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={() => this.getDiscount()}>
            <div className='discount_porcentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before 20th June</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                laudantium a itaque deleniti tempore. Ut recusandae quae ab
                quidem voluptatem. Tempore reiciendis debitis aspernatur ipsa
                vitae quam temporibus vero molestiae?
              </p>
              <div>button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
