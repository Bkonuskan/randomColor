function randomColor() {
  let square = document.getElementById("square");

  square.style.backgroundColor =
    "rgb(" +
    Math.floor(+Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
    square.innerHTML=Math.random();
    

}
function randomBody() {
  document.body.style.backgroundColor =
    "rgb(" +
    Math.floor(+Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  
}


/* function randomColor() {
    let square = document.getElementById("square");
    let x=Math.floor(+Math.random() * 256);
  
    square.style.backgroundColor ="rgb(" + x + "," + x +"," + x +")";
      square.innerHTML=Math.random();
  }
  */