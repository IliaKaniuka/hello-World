
/*let user2 = prompt("gy")
let Number = function (user) {
    console.log(user2)
}

Number("user2")

console.log(Math.floor(Math.random()* 10));


console.log("сьгодні,ввечері,івшмівг")/*/

//*let zsjc = [1,2,3] ;
//let xn= ["ecn","ecm","ef"];
//let sjcu = ["fewf","fesf","ewf0w"];
//let zkx = ["efew","feww","ewf"];


//console.log(zsjc[1],xn[1],sjcu[1],zkx[1])

//console.log(Math.floor(Math.random()* 10));*/

/*let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let input = document.getElementById("input");
let task = document.getElementById("text");
button.addEventListener("click",AddTask);
button2.addEventListener("click",RemoveTask);
function AddTask(){
  let para = document.createElement('p');

  para.innerHTML = input.value;
  task.appendChild(para); 
}
function RemoveTask()
{
let para = document.getElementById("text").lastChild

para.parentNode.removeChild(para);*/

let header= document.getElementById('input')
let button = document.getElementById('button')


function input(i) {
  header.value =header.value + i;

}
function result() {
  header.value = eval(header.value);
}
function reset() 
{
header.value = '';  
}





