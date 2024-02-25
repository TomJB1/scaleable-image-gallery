let data = {"dir": "images"};
let titles = [];
const main = document.getElementById("main");

const loading = document.getElementById("loading");

fetch("directoryContent.php", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
})
.then(res => res.text())
.then(res => {
  console.log("Request complete! response:", res);
  titles = res.split(',');
  createTiles();
  loading.remove();
});

function createTiles()
{
    titles.forEach(title => {
    titleName = title.split('-')[1];
    number = title.split('-')[0];
    const link = document.createElement("a");
    link.href = "gallery/"+number+'/'+titleName;
    link.innerHTML = `
    <div class="tile">
        <div class="imgDiv">
            <img src="images/${title}/display.jpg">
        </div>
        <h1>${titleName}</h1>
    </div>`
    main.appendChild(link);
    });
}
