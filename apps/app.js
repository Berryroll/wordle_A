const Start_Time = new Date();

function SetTime() {
  const time = new Date();
  const elapsed_time = new Date(time - Start_Time);

  const 분 = elapsed_time.getMinutes().toString();
  const 초 = elapsed_time.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `time: ${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

setInterval(SetTime, 1000);
