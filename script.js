const main = document.getElementById("main");

const loader = document.getElementById("loader");

const screenWidth = screen.width;
const screenHeight = screen.height;
const screenRatio = (screenWidth / screenHeight)*100;

const urlArray = window.location.href.split('/')
const title = urlArray[urlArray.length -1];
const number = urlArray[urlArray.length -2];
const folder = number+'-'+title;

let data = {};

function getFileNames(dir, returnFunction, passthrough=undefined)
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
    window[returnFunction](res.split(','), passthrough);
    return;
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

let folderPath = 'images/'+folder;
getFileNames(folderPath, 'addHeaders');

function addHeaders(headers, other) //the other variable is not needed but this will break if it is removed
{
  headers.forEach(header => {
    let headerPath = 'images/'+folder+'/'+header;
    getFileNames(headerPath, 'addPhotos', header);
  });
}

function addPhotos(imageNames, header)
{
  let path = 'images/'+folder+'/'+header;
  MakeDiv(header, 'header', header)
  for (let i = 0; i < imageNames.length; i++)
    {
      AddImage(path+'/'+imageNames[i]);
    }
}






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