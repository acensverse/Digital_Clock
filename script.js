const clock = document.getElementById('clock')

setInterval(function () {
  let date = new Date()
  // console.log(date.toLocaleDateString());
  clock.value = date.toLocaleTimeString()
}, 1000)