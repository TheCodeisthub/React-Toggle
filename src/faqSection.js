import React, { Component } from "react";
import Toggle from "./Toggle";

class FaqSection extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="container">
        <section className="faq-section">
          <h2 className="faq--h2">Frequently asked questions (FAQ)</h2>
          <Toggle>
            {({ on, toggle }) => (
              <ul className="nav--lists">
                <span className="drop-down--container" onClick={toggle}>
                  <h4 className="faq--h4">Can I Click to DropDown?</h4>
                  <button className="btn_arrow">&#9660;</button>
                </span>
                {on && (
                  <li>
                    - Yes you can and this is a basic dropdown here is the
                    content. click again to hide.
                  </li>
                )}
              </ul>
            )}
          </Toggle>
        </section>

        {/* <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h3>Item one</h3>}
              <button onClick={toggle}>
                <img src={toggleIcon} />
              </button>
            </div>
          )}
        </Toggle> */}
      </div>
    );
  }
}

export default FaqSection;
