const numberofImages = 63;

const main = document.getElementById("main");

const loader = document.getElementById("loader");

const screenWidth = screen.width;
const screenHeight = screen.height;
const screenRatio = (screenWidth / screenHeight)*100;


function AddImage(src) {
    var img = new Image();
    img.setAttribute("src", src);
    img.id = src;
    img.loading = "lazy";
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

for (let i = 0; i < numberofImages; i++)
{
    AddImage("images/zambia/"+i+".jpg");
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