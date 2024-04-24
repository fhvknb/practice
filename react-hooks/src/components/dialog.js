import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

let defaultState = {
  visible: false,
  confirm: function () {},
  cancel: function () {},
  title: "Title",
  content: "Content",
  buttonNum: 1,
  hideTitle: false,
};

class Dialog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  show = (options) => {
    this.setState({
      visible: true,
      ...options,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  confirm = () => {
    this.state.confirm && this.state.confirm(this.hide);
    this.hide();
  };
  cancel = () => {
    this.state.cancel && this.state.cancel(this.hide);
    this.hide();
  };
  componentDidMount() {
    this.setState({
      ...defaultState,
    });
  }
  render() {
    let { visible, buttonNum, title, content, hideTitle } = this.state;
    return visible ? (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.51)",
          zIndex: 999,
        }}
        flex="dir:top main:center cross:center"
      >
        <div
          style={{
            width: "280px",
            background: "#fff",
            borderRadius: "8px",
          }}
        >
          {!hideTitle && (
            <div
              style={{
                color: "#333333",
                fontSize: "17px",
                lineHeight: "25px",
                padding: "20px 24px 0 24px",
                textAlign: "center",
              }}
            >
              {title}
            </div>
          )}

          <div
            style={{
              color: "#333333",
              fontSize: "15px",
              lineHeight: "22px",
              padding: "16px 24px 20px 24px",
              textAlign: "center",
            }}
          >
            {content}
          </div>
          {buttonNum === 2 && (
            <div
              style={{ height: "45px", borderTop: "1px solid #EBEBEB" }}
              flex="cross:center box:mean"
            >
              <div
                style={{
                  textAlign: "center",
                  fontSize: "17px",
                  lineHeight: "45px",
                  color: "#858585",
                  borderRight: "1px solid #EBEBEB",
                }}
                onClick={this.cancel}
              >
                取消
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "17px",
                  lineHeight: "45px",
                  color: "#004ECC",
                }}
                onClick={this.confirm}
              >
                确定
              </div>
            </div>
          )}
          {buttonNum === 1 && (
            <div
              style={{
                borderTop: "1px solid #EBEBEB",
                textAlign: "center",
                fontSize: "17px",
                lineHeight: "45px",
                color: "#004ECC",
              }}
              onClick={this.confirm}
            >
              确定
            </div>
          )}
        </div>
      </div>
    ) : null;
  }
}

let target = document.createElement("div");
let props = {};
document.body.appendChild(target);


export default ReactDOM.render(React.createElement(Dialog, props), target);
