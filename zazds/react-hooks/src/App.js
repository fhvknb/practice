// import logo from './logo.svg';
import React from "react";
import $ from "jquery";

import "./App.css";
import VirtualList from './components/virtualList'

let { useCallback, useState, useEffect, memo } = React;

// function Child() {}

const listDataCache = {};

const Child = memo((props) => {
  console.log("render child!!!");
  return [
    <p key="1">count: {props.count}</p>,
    <div key="2">
      <button onClick={props.onClick}>Click</button>
    </div>,
  ];
});

// const Child = (props) => {
//   console.log("render child!!!");
//   return [
//     <p key="1">count: {props.count}</p>,
//     <div key="2">
//       <button onClick={props.onClick}>Click</button>
//     </div>,
//   ];
// };


function App() {
  let [name, setName] = useState("x");
  let [count, setCount] = useState(0);
  let [listData, setListData] = useState([]);
  let [computedStyle, setComputedStyle] = useState(0);

  const callBack = function () {
    // console.log("callback");
    // setCount(++count);
    setName(count);
  };

  const obj = {
    a: "11",
    b: "22",
  };

  const arr = [1, 3, 4];
  // obj.prototype.c = '333';

  useEffect(() => {
    //  for(let i in obj) {
    //    console.log(i)
    //  }
    // for (let j of arr) {
    //   console.log(j);
    // }
    // console.log(Object.fromEntries([["a",'11']]))
    // console.log(Object.entries(obj)

    // console.log($);

    // findDOMNode()

  
    // scrollRef.current.on
  }, []);

  const memoizedCallback = useCallback(() => {
    // console.log("callback");
    // setCount(++count);
    setName(count);
  }, [count]);

  function changeName() {
    setName("new name " + Date.now());
  }

  return (
    <div className="App">
      <br />
      {/* <button onClick={changeName}>change name</button> */}
      {/* <button onClick={memoizedCallback}>change count</button> */}
      {/* <Child count={count} onClick={memoizedCallback} /> */}
      {/* <p>This name is {name}</p>
      <div className="bgBox"></div> */}

      <VirtualList />
    </div>
  );
}

export default App;
