// Input variable
var inputAdd = document.getElementById('maininput');
// "+" Button variable
var buttonToAdd = document.getElementsByClassName('btnadd')[0];
// Clear all button variable
var clearAllBtn = document.getElementsByClassName('btnclearall')[0];
// This is an event listener which clears all of the content inside unordered list when "clear all" button is clicked after confirmation
    clearAllBtn.addEventListener('click', function(e) {
      var listUl = document.querySelector('ul');
      var checkAll = confirm('Are you sure you want to delete all items?');
      if (checkAll == true) {
        listUl.innerHTML = "";
      }
    })
    // Main function
function addElement() {
  // Value entered inside input
var inputText = inputAdd.value;

// This condition doesn't let list element to be made if there is no content inside input
if (inputText == "") {
  alert ("You must write something");
  return ;
}
var listUl = document.querySelector('ul');
var listLi = document.createElement('li');
//  Variables which create, define and style "x" button used for deleting list items 
var createButton = document.createElement('button');
createButton.innerHTML = "x";
createButton.classList.add("btnreduce","btnstyle");

// This is event listener used for list item removal when "x" button is clicked
    createButton.addEventListener('click',function(e){
        var check = confirm('Are you sure you want to delete this item?');
        if(check == true){
          e.target.parentElement.remove();
        }
    });
    
// Div inside <ul> which contains two child elements <li> and <button>
var createDiv = document.createElement('div');
createDiv.classList.add('flexxcenter');

// Element which creates list item based on text written in the input
listLi.appendChild(document.createTextNode(inputText));
inputAdd.value = "";

//Class which styles list  
listLi.classList.add("listonly");

createDiv.appendChild(listLi);
createDiv.appendChild(createButton);
listUl.appendChild(createDiv);
}
// This is an event listener which creates list element on a "+"" button click
buttonToAdd.addEventListener('click', addElement);

// This is an event listener which creates list element when "Enter" key is pressed, can also be used to delete items when navigated via keys
inputAdd.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addElement();
  }
});
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
})
