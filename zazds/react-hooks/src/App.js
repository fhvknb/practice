// import logo from './logo.svg';
import React, { Suspense } from "react";
import $ from "jquery";
import "./App.css";
// import VirtualList from "./components/virtualList";
import UseHooks from "./components/useHooks";
import EventLoop from "./components/eventLoop";

// const VirtualList = React.lazy(() => import("./components/virtualList"));

const OtherComponent = React.lazy(() => {
  return new Promise((resolve, reject) => {
    let Page = import("./components/virtualList");
    setTimeout(() => {
      resolve(Page);
    }, 1000);
  });
});

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
  useEffect(() => {
    // _tsetFunction();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>{<OtherComponent />}</Suspense>
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
