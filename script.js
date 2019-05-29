var index = 0;
var images = [
  "images/joki2.jpg",
  "images/koskisumu.jpg",
  "images/myllysumu2.jpg",
  "images/silta.jpg",
  "images/lokki.jpg",
  "images/sorsa.jpg",
  "images/talo.jpg",
  "images/vesi.jpg",
  "images/heli.jpg",
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

function hidePortfolio(id) {
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
  var node = document.createElement("IMG");
  node.setAttribute("id", "imageGalleryImage" );
  node.setAttribute("src", `${images[0]}`);
  node.setAttribute("alt", "image");
  console.log(node);
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