function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

// Make the DIV elements draggable:
dragElement(document.getElementById("#window"));
dragElement(document.getElementById("#danotes"));

function dragElement(element) {
  var initialX = 0, initialY = 0, currentX = 0, currentY = 0;

  if (element) {
    var header = document.getElementById(element.id + "-header");
    if (header) {
      header.onmousedown = startDragging;
    } else {
      element.onmousedown = startDragging;
    }
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreen = document.querySelector("#window");

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";
}

var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");
var welcomeScreenClose = document.querySelector("#danotesclose");
var welcomeScreenOpen = document.querySelector("#danotesopen");

if (welcomeScreenClose) {
  welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
  });
}

if (welcomeScreenOpen) {
  welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen);
  });
}

var selectedIcon = undefined;

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined;
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}


var notesScreen = document.querySelector("#danotes")

var notesScreenClose = document.querySelector("#danotesclose")

element.className = "newClass";