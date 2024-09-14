var cartona = "";

for(var i=0; i<100; i++) {
  if(i%2==0) {
    cartona += "<h2 class='light'>frontend</h2>";
  } else {
    cartona += "<h2 class='dark'>frontend</h2>";
  }
}

document.getElementById("demo").innerHTML = cartona;

console.log(cartona);