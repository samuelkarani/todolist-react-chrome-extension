console.log("from the content scripts");

const anchor = document.createElement("div");
anchor.id = "rcr-anchor";
anchor.appendChild(document.createTextNode("hello wo"));

document.body.insertBefore(anchor, document.body.childNodes[0]);
