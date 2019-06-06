var index = 0;
var images = [
  "images/joki22.jpg",
  "images/koskisumu2.jpg",
  "images/myllysumu22.jpg",
  "images/silta2.jpg",
  "images/lokki2.jpg",
  "images/sorsa2.jpg",
  "images/talo2.jpg",
  "images/vesi2.jpg",
  "images/heli2.jpg",
];

function showPortfolio(id) {
  var w = document.getElementById("webDevelopment");
  var m = document.getElementById("mobileDevelopment");
  var g = document.getElementById("graphicDesign");
  var p = document.getElementById("photography");
  if (id === 1) {
    w.style.display = "block";
    m.style.display = "none";
    g.style.display = "none";
    p.style.display = "none";
  }
  if (id === 2) {
    w.style.display = "none";
    m.style.display = "block";
    g.style.display = "none";
    p.style.display = "none";
  }
  if (id === 3) {
    w.style.display = "none";
    m.style.display = "none";
    g.style.display = "block";
    p.style.display = "none";
  }
  if (id === 4) {
    w.style.display = "none";
    m.style.display = "none";
    g.style.display = "none";
    p.style.display = "block";
  }
}

function hidePortfolio() {
  var w = document.getElementById("webDevelopment");
  var m = document.getElementById("mobileDevelopment");
  var g = document.getElementById("graphicDesign");
  var p = document.getElementById("photography");
  w.style.display = "none";
  m.style.display = "none";
  g.style.display = "none";
  p.style.display = "none";
}

function showImage() {
  getDays()
  var node = document.createElement("IMG");
  node.setAttribute("id", "imageGalleryImage" );
  node.setAttribute("src", `${images[0]}`);
  node.setAttribute("alt", "image");
  document.getElementById("imageGallery").appendChild(node);
  // index = 1;
}

function forward() {
  var length = images.length;
  var image = document.getElementById("imageGalleryImage");
  index += 1;
  if(index + 1 > length) {
    index = 0;
    image.src = images[index];
  }else{
    image.src = images[index];
  }
}

function back() {
  var length = images.length;
  var image = document.getElementById("imageGalleryImage");
  index = index -1;
  if(index < 0) {
    index = length - 1;
    image.src = images[index];
  }else {
    image.src = images[index];
  }
}

var interval = false;

  /***********************
    String Item Counter
  ***********************/

  function checkNumberLowercaseAndUppercase(array) {
    var lowercase = 0;
    var uppercase = 0;
    var number = 0;
    for(var i = 0; i < array.length; i++){
      if(!isNaN(array[i] * 1)){
          number += 1;
          document.getElementById("number").innerHTML = number;
      }else{
        if(array[i] == array[i].toLowerCase()){
            lowercase += 1;
            document.getElementById("lowercase").innerHTML = lowercase;
          }
        if(array[i] == array[i].toUpperCase()){
          uppercase += 1;
          document.getElementById("uppercase").innerHTML = uppercase;
        }
      }
    }
  }

  function search() {
    document.getElementById("uppercase").innerHTML = 0;
    document.getElementById("lowercase").innerHTML = 0;
    document.getElementById("number").innerHTML = 0;
    var text = document.getElementById("text").innerHTML = document.getElementById("input").value;
    text = text.replace(/\s/g, '');
    document.getElementById("length").innerHTML = document.getElementById("input").value.length;
    var array = Array.from(text);
    checkNumberLowercaseAndUppercase(array);
    document.getElementById("input").value = "";
  }



  /*************
    RM Counter
  *************/

  function GetValue() {
    const reps = document.getElementById("setReps").value;
    const weight = document.getElementById("setWeight").value;

    document.getElementById("rmValue").innerHTML = reps + " * " + weight + " kg"
    if(reps > 0 && weight > 0 && !isNaN(reps * 1) && !isNaN(weight * 1)){
      document.getElementById("rmResult").innerHTML = '';

      countRM(weight, reps);

      document.getElementById("setReps").value = '';
      document.getElementById("setWeight").value = '';
      document.getElementById("error").innerHTML = '';
    }else{
      document.getElementById("error").innerHTML = "Fields can't contains letters and have to be more than zero!"
      document.getElementById("rmValue").innerHTML = '';
      document.getElementById("rmResult").innerHTML = '';
    }
  }

  function countRM(weight, reps) {
    let rmTotal = [];

      const result = weight * (Math.pow(reps, 1/10));
      rmTotal.push(Math.floor(result));

      for(let i = 2; i <= 10; i++) {
        const resultTwoToTen = result / (Math.pow(i, 1/10));
        rmTotal.push(Math.floor(resultTwoToTen));
      }
      showRM(rmTotal);
  }

  function showRM(rmTotal){
    rmTotal.forEach((element, index) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td1text = document.createTextNode(index + 1 + "RM");
      let td2text = document.createTextNode(element);
      td1.appendChild(td1text);
      td2.appendChild(td2text);
      tr.appendChild(td1);
      tr.appendChild(td2);
      return document.getElementById("rmResult").appendChild(tr);
    });
  }


  /*****************
    New Year Timer
  *****************/
  var update;

  function getDays() {
    if(interval == false){
      update = setInterval(getDays, 1000);
      interval = true;
    }
    var day = 1000*60*60*24;
    var hour = 1000*60*60;
    var minute = 1000*60;
    var second = 1000;

    var currentDay = new Date(Date.now());
    firstDayOfYear = new Date(Date.UTC(2020, 0, 1, -2, 0, 0));
    // firstDayOfYear = new Date(Date.UTC(2019, 0, 6, -2, 0, 0));
    //firstDayOfYear = new Date(Date.UTC(2019, 4, 7, 15, 16, 0));

    // Days to milliseconds
    currentDayMilliseconds = currentDay.getTime();
    firstDayOfYearMilliseconds = firstDayOfYear.getTime();

    // Difference of milliseconds
    var diff = firstDayOfYearMilliseconds - currentDayMilliseconds;

    // Days amount of difference value
    var days = Math.floor(diff/day);
    document.getElementById("days").innerHTML = days;

    // Days to milliseconds
    var daysToMs = days*day;

    // Decrease days from difference value to get hours and minutes what is left
    var timeLeft = diff - daysToMs;

    // Just hours from time what is left
    var hours = Math.floor(timeLeft/hour);
    document.getElementById("hours").innerHTML = hours;

    // Hours to milliseconds
    var hourMs = hours*hour;

    // Decrease hours from timeleft to get minutes and seconds what is left
    var minutes = (timeLeft - hourMs)/minute;
    var minutesRounded = Math.floor((timeLeft - hourMs)/minute);
    document.getElementById("minutes").innerHTML = minutesRounded;

    // Minutes to milliseconds
    var minuteMs = minutesRounded*minute;

    // Decrease minutes hours and minutes from timeleft to get seconds what is left
    var seconds = Math.floor((timeLeft- hourMs - minuteMs)/second);
    document.getElementById("seconds").innerHTML = seconds;

    if(
        document.getElementById("days").innerHTML < 0
      ){
      clearInterval(update);
      var img = document.createElement("img");
      img.setAttribute("src", "images/newyear.jpg");
      document.getElementById("timerContent").innerHTML = '';
      document.getElementById("timerContent").appendChild(img);
    }
  }