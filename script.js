numberofImages = 63;

const main = document.getElementById("main");

const loader = document.getElementById("loader");

const screenWidth = screen.width;
const screenHeight = screen.height;
const screenRatio = (screenWidth / screenHeight)*100;

var imgIncrease = 4;

let finished = false;

if(screenWidth < 314)
{
    imgIncrease = imgIncrease;
}

if(screenWidth < 811)
{
    imgIncrease = imgIncrease;
}

//currently does nothing FIX



let currentPage = 1;

const pageCount = Math.ceil(numberofImages / imgIncrease);

let endOfPage = false;

const InfiniteScroll = () => {
    endOfPage = window.innerHeight + window.scrollY > document.body.offsetHeight;
    console.log("end of page: "+endOfPage)
    if (endOfPage && finished == false) 
    {
        if(currentPage < pageCount)
        {
            LoadPage(currentPage + 1);
            InfiniteScroll();
        }

        if(currentPage == pageCount)
        {
            document.getElementById("loader").remove();
            window.removeEventListener("scroll", InfiniteScroll);
            console.log("removed event listner")
            finished = true;
        }
      
    }
};

window.addEventListener("scroll", InfiniteScroll);

function AddImage(src) {
    var img = new Image();
    img.src = src;
    img.id = src;
    divName = "Div-" + src;
    MakeDiv(divName, "imgDiv", "main", "");
    document.getElementById(divName).appendChild(img);
}

function MakeDiv(id, classname, location, text)
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

    const startRange = (page - 1) * imgIncrease;
    const endRange = page * imgIncrease;

    for (let i = startRange; i < endRange; i++) {
    src = "images/" + i + ".jpg"
    console.log(i)
    console.log(src)
    AddImage(src);
    }
}




window.onload = function () 
{
    
    LoadPage(currentPage);
    LoadPage(currentPage+1);
    if(screenHeight)
    //LoadPage(currentPage + 2)
    for (let i = 0; i < (imgIncrease - 1); i++)
    {
        MakeDiv("loaderCard", "imgDiv", "loader", "Loading")
    }
    InfiniteScroll()
};




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