window.onload = function () {
  var a = document.getElementById("link");
  a.onclick = function () {
    //shows the #more
    document.getElementById("more").style.display = "block";
    document.getElementById("dots").style.display = "none";
    return false;
  };
};