onmessage = function (e) {
  console.log("Worker: Message received from main script");

  let { isGetData } = e.data;

  if (isGetData) {
    setTimeout(() => {
      console.log("耗时处理完成。。。");

      const workerResult = {
        message: "耗时任务处理完成。",
      };

      postMessage(workerResult);
    }, 5000);
  }
};
