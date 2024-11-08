var container = document.getElementsByClassName('continer')[0];
var circle = document.getElementById('circle');


var blackBox = document.getElementsByClassName("black")[0];
var redBox = document.getElementsByClassName("red")[0];

var mouse_loc = document.getElementById("mouse")
var circle_loc = document.getElementById("cicle")
var box_loc = document.getElementById("innerBox")

container.addEventListener('mousemove', function(event) {
  var xPos = event.clientX - container.offsetLeft;
  var yPos = event.clientY - container.offsetTop;

//   console.log((circle.offsetWidth / 2) + 'px');
  // console.log(event.clientY - container.offsetTop);

  circle.style.left = xPos+ container.offsetLeft+10+"px";
  circle.style.top = yPos+container.offsetTop+10+"px";
  
  mouse_loc.innerHTML = `Mouse: (${xPos}, ${yPos})`
  circle_loc.innerHTML = `Circle: (${xPos+10}, ${yPos+10})`
});

blackBox.addEventListener("mousemove", function(event) {
  blackBox.onmousemove = move_over
  blackBox.onmouseout = move_out
  function move_over() {
      circle.style.backgroundColor = "red"

      var xpos = event.clientX - blackBox.offsetLeft+10;
      var ypos = event.clientY - blackBox.offsetTop+10;

      box_loc.innerHTML = `Black circle (red circle): (${xpos}, ${ypos})`

  }
  function move_out(){
    circle.style.backgroundColor = "blue"
    box_loc.innerHTML = `Black circle (red circle): .....................`
  }

})

redBox.addEventListener("mousemove", function(event) {
  redBox.onmousemove = move_over
  redBox.onmouseout = move_out
  function move_over() {
      circle.style.backgroundColor = "black"

      var xpos = event.clientX - redBox.offsetLeft+10;
      var ypos = event.clientY - redBox.offsetTop+10;

      box_loc.innerHTML = `Black circle (red circle): (${xpos}, ${ypos})`

  }
  function move_out(){
    circle.style.backgroundColor = "blue"
    box_loc.innerHTML = `Black circle (red circle): .....................`
  }

})



// - (circle.offsetWidth / 2) + 'px';
// - (circle.offsetHeight / 2) + 'px';
