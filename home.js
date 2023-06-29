let data = {"dir": "images"};
let titles = [];
const main = document.getElementById("main");

fetch("directoryContent.php", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
}).then(res => {
  console.log("Request complete! response:", res.text());
  titles = res.text().split(',');
});

titles.forEach(title => {
    const link = document.createElement("a");
    link.href = "gallery.php#"+title;
    link.innerHTML = `
    <div class="tile">
        <h1>${title}</h1>
        <div class="imgDiv">
            <img src="images/${title}/0.jpg">
        </div>
    </div>`
    main.appendChild(link);
});