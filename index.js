// Write your code here!

const element = document.getElementById("main"); //call on the element with id 'main'
element.remove(); //code to remove entrie element

//Create a 'newHeader variable, with id=victory, and append it to teh body section.
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Kevin is the champion";
document.body.append(newHeader);




