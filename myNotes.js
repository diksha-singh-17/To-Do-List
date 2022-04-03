var click = document.getElementById('submit');
click.addEventListener('click', addData);

var arr1 = new Array();

function addData(){
  if(localStorage.getItem("localData01")==null){
    arr1.push({
        title:document.getElementById('title').value,
        desc:document.getElementById('description').value,
        textArea:document.getElementById('textArea').value,
    });
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("textArea").value = "";
        localStorage.setItem("localData01", JSON.stringify(arr1));


}else{
  var data = JSON.parse(localStorage.getItem("localData01"));
  data.push({
    title:document.getElementById('title').value,
    desc:document.getElementById('description').value,
    textArea:document.getElementById('textArea').value,
});
document.getElementById("title").value = "";
document.getElementById("description").value = "";
document.getElementById("textArea").value = "";
    localStorage.setItem("localData01", JSON.stringify(data));
}
}


      window.getTimeRemaining = function (endtime) {
        var t = Date.parse(endtime) - new Date().getTime();
        console.log(t);
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };
      };

      window.initializeClock = function (clockId, dateId) {
        var clock = document.getElementById(clockId);
        var deadline = document.getElementById(dateId).value;
        var timeinterval = setInterval(function () {
          var t = getTimeRemaining(deadline);
          clock.innerHTML =
            "days: " +
            t.days +
            "<br>" +
            "hours: " +
            t.hours +
            "<br>" +
            "minutes: " +
            t.minutes +
            "<br>" +
            "seconds: " +
            t.seconds;
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }, 1000);
      };
