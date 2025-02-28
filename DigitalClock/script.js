const clock = document.getElementById("clock");

function UpdateClock() {
  console.log("Clock Updating");
  const time = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    timeStyle: "medium",
  });
  clock.innerText = time;
}

setInterval(UpdateClock, 1000);
