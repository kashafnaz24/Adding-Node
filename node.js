//NODE
//node.style 
let paragraph = document.querySelector("p")
// paragragh represent node "p"
paragraph.style.backgroundColor = "blue"
//there are four type of adding node

//1- node.append(el) add at the edd of the node inside
//2- node.prepend(el) add at the start of the node inside 
//3- node.before(el) add before the node outside
//4- node.after(el) add after the node outside

//node.append(el) add at the edd of the node
let newbtn = document.createElement("button");
newbtn.innerHTML = "click me"
console.log(newbtn);

let div = document.querySelector("div");
//div is node
div.append(newbtn);
console.log(div);

