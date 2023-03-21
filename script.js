numberofImages = 31

const main = document.getElementById("main");

const loader = document.getElementById("loader");

const imgIncrease = 4;

let currentPage = 1;

const pageCount = Math.ceil(numberofImages / imgIncrease);

const InfiniteScroll = () => {
    const endOfPage = window.innerHeight + window.pageYOffset + 30 >= document.body.offsetHeight;
    if (endOfPage) 
    {
        if(currentPage < pageCount)
        {
            LoadPage(currentPage + 1);

        }
      
    }
};

window.addEventListener("scroll", InfiniteScroll);

function AddImage(src) {
    var img = new Image();
    img.src = src;
    divName = "Div-" + src;
    MakeDiv(divName);
    document.getElementById(divName).appendChild(img);
}

function MakeDiv(id)
{
    const div = document.createElement("div");
    div.id = id;
    div.className = "imgDiv"
    document.getElementById('main').appendChild(div);
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




window.onload = function () {
    LoadPage(currentPage);
    LoadPage(currentPage+1)
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