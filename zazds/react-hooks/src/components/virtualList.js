import React from "react";

import $ from "jquery";
let { useCallback, useState, useEffect, memo } = React;

let allData = [];

let total = 1000;

for (let i = 1; i < total; i++) {
  allData.push(i);
}

let itemSize = 50;
let listHeight = itemSize * total;
let screenHeight = 500;
let visibleCount = Math.ceil(screenHeight / itemSize);
let start = 0;
let end = start + visibleCount;
let visibleData = allData.slice(start, Math.min(end, allData.length));
let startOffset = 0;

const VirtualList = function () {
  let { useCallback, useState, useEffect, memo } = React;

  let [listData, setListData] = useState([]);

  useEffect(() => {
    $(".blank-list").css("height", allData.length * itemSize + "px");

    setListData(visibleData);
    // scrollRef.current.on
  }, []);

  function changeData() {
    visibleData = allData.slice(start, Math.min(end, allData.length));
    console.log(visibleData);
    setListData(visibleData);
  }

  function renderItem(item) {
    return listData.map((item, idx) => (
      <p className="item" key={idx}>
        {item}
      </p>
    ));
  }

  function handleScroll(e) {
    let ele = e.target;
    let scrollTop = ele.scrollTop;
    start = Math.floor(scrollTop / itemSize);
    end = start + visibleCount;
    startOffset = scrollTop - (scrollTop % itemSize);

    let trnaslateHeight = start * itemSize;
    // setComputedStyle(trnaslateHeight);
    $(".entity-list").css(
      "transform",
      `translate3d(0, ${trnaslateHeight}px, 0)`
    );
    changeData();
  }

  return (
    <div className="listWrap" onScroll={handleScroll}>
      <div className="blank-list"></div>
      <div className="entity-list">{renderItem()}</div>
    </div>
  );
};

export default VirtualList;
