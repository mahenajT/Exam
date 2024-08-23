const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.write("This is the Home Page");
  } else if (req.url === "/about") {
    res.write("This is the About Page");
  } else if (req.url === "/contact") {
    res.write("This is the Contact Page");
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.write("Failed to write to file");
      } else {
        res.write("File has been written successfully");
      }
      res.end();
    });
    return;
  } else {
    res.write("404 Page Not Found");
  }
  res.end();
});

server.listen(5500, () => {
  console.log("Server is listening on port 5500");
});
