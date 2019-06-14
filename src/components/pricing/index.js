import React, { Component } from "react";
import MyButton from "../utils/MyButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    categories: ["balcony", "medium", "star"],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium a itaque deleniti tempore.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium a itaque deleniti tempore.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium a itaque deleniti tempore."
    ],
    linkTo: [
      "http://fiksutuote.fi",
      "http://fiksutuote.fi",
      "http://fiksutuote.fi"
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>{this.state.categories[i]}</span>
            </div>
            <div className='pricing_description'>
              {this.state.description[i]}
            </div>
            <div className='pricing_buttons'>
              <MyButton
                text='Purchase'
                bck='#ffa800'
                color='#ffffff'
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
