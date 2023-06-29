const numberofImages = 63;

const main = document.getElementById("main");

const loader = document.getElementById("loader");

const screenWidth = screen.width;
const screenHeight = screen.height;
const screenRatio = (screenWidth / screenHeight)*100;

const urlArray = window.location.href.split('#')
const folder = urlArray[urlArray.length -1];

let data = {};

function getFileNames(dir)
{
  data = {"dir": dir};
  fetch("directoryContent.php", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(res => {
    console.log("Request complete! response:", res);
     return res.split(',');
  });
}

function AddImage(src) {
    var img = new Image();
    img.loading = "lazy";
    img.setAttribute("src", src);
    img.id = src;
    divName = "Div-" + src;
    MakeDiv(divName, "imgDiv");
    document.getElementById(divName).appendChild(img);
}

function MakeDiv(id, classname, text="")
{
    const div = document.createElement("div");
    div.id = id;
    div.className = classname;
    div.innerText = text;
    main.appendChild(div);
}

const headers = getFileNames('images/'+folder);

headers.forEach(header => {
  MakeDiv(header, 'header', header)
  for (let i = 0; i < numberofImages; i++)
  {
    AddImage(`images/${header}/"+i+".jpg`);
  }
});





/*
// disable dev tools
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}


document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

*/