let data = {"test": "12345678910"};

fetch("directoryContent.php", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
}).then(res => {
  console.log("Request complete! response:", res);
});
