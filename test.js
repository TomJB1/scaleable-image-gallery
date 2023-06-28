fetch("https://brandis-photos.uk.to/directoryContent.php", {
  method: "POST",
  body: JSON.stringify({
    test: "12345678910"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
