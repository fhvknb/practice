// import logo from './logo.svg';
import React, { Suspense } from "react";
import $ from "jquery";
import "./App.css";
// import VirtualList from "./components/virtualList";
import UseHooks from "./components/useHooks";
import EventLoop from "./components/eventLoop";

// import TIM from './utils/tim_wx';

// const VirtualList = React.lazy(() => import("./components/virtualList"));

const OtherComponent = React.lazy(() => {
  return new Promise((resolve, reject) => {
    let Page = import("./components/virtualList");
    setTimeout(() => {
      resolve(Page);
    }, 1000);
  });
});

const Parent = (props) => {
  const onClick = (e) => {
    console.log(".s/.fs/f.s/f.s/.f/s.f");
  };
  let newChildren = [];
  React.Children.forEach(props.children, (item, idx) => {
    // console.log(item);
    let ele = React.cloneElement(
      item,
      { ...item.props, onClick, key: idx },
      item.props.children
    );
    newChildren.push(ele);
  });
  // console.log(React.Children.only(props.children,));
  return <div>{newChildren}</div>;
};

let { useEffect, useState } = React;

function App() {
  const _tsetFunction = function () {
    const obj = {
      a: "11",
      b: "22",
    };
    const arr = [1, 3, 4];

    for (let i in obj) {
      console.log(i);
    }
    for (let j of arr) {
      console.log(j);
    }

    console.log(Object.fromEntries([["a", "11"]]));
    console.log(Object.entries(obj));
  };

  const _loginTest = function () {
    return new Promise((resolve, reject) => {});
  };

  const _recursion = function (num) {
    if (num < 1) {
      return 0;
    }
    console.log(num);
    return _recursion(num - 1);
  };

  useEffect(() => {
    // _tsetFunction();
    // console.log(_recursion(10));
  }, []);

  return (
    <div className="App">
      <Parent>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Parent>

      {/* <Suspense fallback={<div>Loading...</div>}>{<OtherComponent />}</Suspense> */}
      {/* <br />
      <div className="bgBox"></div>
      <br /> */}
      {/* <EventLoop /> */}
      {/* <UseHooks /> */}
      {/* <VirtualList /> */}
    </div>
  );
}

export default App;
