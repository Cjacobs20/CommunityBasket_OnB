var modal = document.getElementById('modal')
var mybutton1 = document.getElementById('button1')
var mybutton2 = document.getElementById('button2')
var mybutton3 = document.getElementById('button3')
var closebutton1 = document.getElementById('closebutton1')

mybutton1.addEventListener("click", function () {
  modal.style.display = "block";
});

// opens modal on button click
/* mybutton1.onclick = function () {
  modal.style.display = "block";
} */
mybutton1.addEventListener("click", function () {
  modal.style.display = "block";
});

mybutton2.addEventListener("click", function () {
  modal.style.display = "block";
});

mybutton3.addEventListener("click", function () {
  modal.style.display = "block";
});

// closes modal on 'X' click
/* closebutton1.onclick = function () {
  modal.style.display = "none";
} */

closebutton1.addEventListener("click", function () {
  modal.style.display = "none";
});

// closes modal on outside click
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

mybutton1.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
