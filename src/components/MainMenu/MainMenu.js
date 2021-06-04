import React from "react";
import "./MainMenu.scss";

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      hide: true,
    };

    this.makeClasses = this.makeClasses.bind(this);
    this.makeText = this.makeText.bind(this);
    this.tick = this.tick.bind(this);
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.timerID = setTimeout(() => this.tick(), 2000);
  }

  tick() {
    this.setState((state, props) => {
      return { animate: !state.animate, hide: false };
    });
  }

  componentWillUnmount() {
    clearTimeout(this.tmerID);
  }

  makeClasses() {
    let classes = ["main-menu"];
    if (this.state.animate) classes.push("animate");
    if (this.state.hide) classes.push("hide");

    return classes;
  }

  makeText(text, cls = "") {
    return text.split("").map((c) => {
      return <span className={cls}>{c}</span>;
    });
  }

  render() {
    return (
      <div>
        <div ref={this.ref} className={this.makeClasses().join(" ")}>
          <ul>
            <li>
              <a href="https://portfolio.lesfleursdelanuit.com">
                {this.makeText("+ PHOTOGRAPHY")}
              </a>
            </li>
            <li>
              <a href="https://apps.lesfleursdelanuit.com">
                {this.makeText("+ APPS")}
              </a>
            </li>
            <li>{this.makeText("+ RESOURCES")}</li>
            <li>{this.makeText("+ BLOG")}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainMenu;
