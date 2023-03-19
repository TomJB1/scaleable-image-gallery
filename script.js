numberofImages = 7


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

for (let i = 1; i < numberofImages; i++) {
    src = "images/" + i + ".jpg"
    console.log(i)
    console.log(src)
    AddImage(src);
  }
