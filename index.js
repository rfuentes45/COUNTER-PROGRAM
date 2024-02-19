// we will individually assign all three buttons with a constant

// we need to select each button by accessing our document
// don't forget the quotes inside paranthesis for the id

const decreasebtn=document.getElementById("decreasebtn")
const resetbtn=document.getElementById("resetbtn")
const increasebtn=document.getElementById("increasebtn")
const counterlabel = document.getElementById("counterlabel")
let count= 0

// now we need 3 functions, one for each button
// we will use the onclick attribute remember (){}

// what will the increase button do when we click on it is the idea here.
// let's increment the count by 1 using the ++ feature

// i set this equal to function so it can do something duh
increasebtn.onclick=function(){
count++ // the ++ adds 1, here the count starts at 0 hence the let count = 0
counterlabel.textContent= count; } // i put = because its whatever the count currently is will increase

decreasebtn.onclick=function(){
count--
counterlabel.textContent=count
}

resetbtn.onclick=function(){
count=0 // here the count is 0 so it can reset back to zero, ooohhh, so awesome 
counterlabel.textContent=count
}