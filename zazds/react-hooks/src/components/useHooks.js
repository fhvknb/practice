import React from "react";
import { useEffectDeep } from "../hooks";
import $ from "jquery";
let { useCallback, useState, useEffect, memo } = React;

/* Parent  */
const UseHooks = function () {
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState({ a: 1 });

  const addCount = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const addCountCallback = useCallback(
    (e) => {
      // 当父组件更新 避免子组件重复渲染
      let newCount = count + 1;
      setCount(newCount);
      e.stopPropagation();
      console.log("react click");
    },
    [count]
  );

  const handleParentUpdate = () => {
    // 更新父组件
    setUpdate(!update);
  };

  useEffectDeep(() => {
    console.log("不刷新");
  }, data);

  useEffect(() => {
    // console.log("mount");

    // 原生事件不受 React事件处理影响 反之原生事件会影响React事件
    // document.getElementById("btn").addEventListener("click", (e) => {
    //     e.stopPropagation();
    //   console.log("native click");
    // });
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, [data]);

  return (
    <div>
      <button onClick={handleParentUpdate}> UPDATE PARENT</button>
      <br />
      <br />
      <button onClick={() => setData({ a: 1 })}> BUTTON 1</button>

      <br />

      {/* <Child count={count} onClick={addCount} /> */}
      <MemoChild count={count} onClick={addCountCallback} />
    </div>
  );
};

/* Child */
const MemoChild = memo((props) => {
  //  纯组件 类似PureComponent 只有props 发生变化组件才会更新
  console.log("render child!!!");
  return [
    <p key="1">count: {props.count}</p>,
    <div key="2">
      <button id="btn" onClick={props.onClick}>
        Click
      </button>
    </div>,
  ];
});

const Child = (props) => {
  console.log("render child!!!");
  return [
    <p key="1">count: {props.count}</p>,
    <div key="2">
      <button onClick={props.onClick}>Click</button>
    </div>,
  ];
};

export default UseHooks;
