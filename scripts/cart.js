// Reading in products.json data file
fetch("../api/products/index.json").then(function(resp) {
  return resp.json();
})
.then(function(data) { 
  console.log(data);
});