console.log("Working...")
let btn = document.getElementById("submit");
btn.addEventListener("click", function(){
  let txt = document.getElementById("text").value;
  console.log(txt);
  let output = txt.toUpperCase();
  console.log(output);
  var p = document.createElement("p");
  var t = document.createTextNode(output);
  console.log(t);
  p.appendChild(t);
});
