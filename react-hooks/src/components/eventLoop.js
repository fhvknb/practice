import React from "react";

let { useEffect } = React;

const EventLoop = function () {
  useEffect(() => {
    document.querySelector(".div0").addEventListener(
      "click",
      () => {
        console.log("我是祖宗");
      },
      true
    );
    document.querySelector(".div1").addEventListener(
      "click",
      () => {
        console.log("我是爸爸");
      },
      true
    );
    document.querySelector(".div2").addEventListener(
      "click",
      () => {
        console.log("我是儿子");
      },
      true
    );
  }, []);
  return (
    <div className="div0">
      我是祖宗
      <div className="div1">
        我是爸爸
        <div className="div2">我是儿子</div>
      </div>
    </div>
  );
};

export default EventLoop;
