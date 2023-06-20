numberofImages = 63;

const main = document.getElementById("main");

const loader = document.getElementById("loader");

const screenWidth = screen.width;
const screenHeight = screen.height;
const screenRatio = (screenWidth / screenHeight)*100;

var columns = 4;

let finished = false;

if(screenWidth < 314)
{
    columns = columns;
}

if(screenWidth < 811)
{
    columns = columns;
}

//currently does nothing FIX



let currentPage = 1;


let endOfPage = false;

const InfiniteScroll = () => {
    endOfPage = window.innerHeight + window.scrollY > document.body.offsetHeight;
    console.log("end of page: "+endOfPage)
    if (endOfPage && finished == false) 
    {
       
      
    }
};

window.addEventListener("scroll", InfiniteScroll);

function AddImage(src, column) {
    var img = new Image();
    img.setAttribute("data-src", src);
    img.id = src;
    img.loading = "lazy";
    divName = "Div-" + src;
    MakeDiv(divName, "imgDiv", column, "");
    document.getElementById(divName).appendChild(img);
}

function MakeDiv(id, classname, location, text="")
{
    const div = document.createElement("div");
    div.id = id;
    div.className = classname;
    div.innerText = text;
    document.getElementById(location).appendChild(div);
}

function LoadPage(page)
{
    currentPage = page;

    const startRange = (page - 1) * columns;
    const endRange = page * columns;

    for (let i = startRange; i < endRange; i++) {
        
        console.log(i)
        console.log(src)
        console.log("column:"+column)
        
        console.log("row:"+row)
        AddImage(src, column);
    }
}




window.onload = function () 
{
    if(screenHeight)
    //LoadPage(currentPage + 2)
    
    InfiniteScroll()
};

for (let i = 1; i < (columns+1); i++)
{
    MakeDiv(i, "column", "main")
}

for (let index = 0; index < numberofImages; index++) {
    src = "images/" + index + ".jpg";
    row = Math.ceil((index+1)/columns);
    column = ((index+1)-((columns*row)))+columns
    AddImage(src, column)
    
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