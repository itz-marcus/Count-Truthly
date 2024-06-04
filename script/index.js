let arrayFT = [true, false , false, true, true, true, false] 
let answer = document.querySelectorAll('label')[1]
let button = document.querySelector('button')
let count = 0 //placeholder 

button.addEventListener('click',()=>{
   for (let arrayS of arrayFT){  //making a veriable for each array value using a for of loop and an if statement
   if (arrayS == true) {
      count ++    
    }
}
answer.innerText = 'Result: '+ count
})

