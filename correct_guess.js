// console.log("Guess game working")
// let person = {
//     name: 'John',
//     sayHi: function() {
//         console.log('Hi, my name is ' + this.name);
//     }
//   }
//   person.sayHi(); // Output: "Hi, my name is John"

//   let name = 'Raja';

//   function sayHi() {
//     console.log('Hi, my name is ' + this.name);
//   }
  
//   sayHi(); // Output: "Hi, my name is John"



//   function Person(name) {
//     this.name = name;
//     console.log(this);
//   }
//   let john = new Person("John"); 
//   let raja = new Person("Raja"); 

/*

  let person = {
    name: "John",
    hobbies: ['reading', 'travelling'],
    showHobbies: function() {
      this.hobbies.forEach( hobby => {
        console.log(`${this.name} likes ${hobby}`);
      });
    }
  };
  person.showHobbies();
*/

//   const numbers = [1, 2, 3, 4, 5];
//   const sum = (numbers) => numbers.reduce((total, num) => total + num,0);
//   console.log(sum(numbers)); // 15


var num;
var chanceCount = 1;

console.log(chanceCount)
function generateRandom(){
    var min = 1;
    var max = 50
    num = Math.floor(Math.random() * (max - min) + min);
    // alert(num)
}

function checkcount(){
    if(chanceCount > 3){

        alert("You could not guess the correct number. So To play again you need to reset")
    }
}

function checkanswer(){
    var x = document.getElementById("myText").value;

        if(x>num){
            alert("HIGH")
        }
        else if ( x == num){
            document.getElementById('id01').style.display='block'
            // alert("CORRECT HUREYYYYYYYYYYYYYYYYYY")
            reset()
            
        }
        else if (x < num){
            alert("LOW")
        }
    
    // alert(x)
   
    chanceCount = chanceCount+1
}

generateRandom();
// console.log(num)
function myFunction() {
    console.log(num)
    checkanswer()
    checkcount()
   
    

    // document.getElementById("demo").innerHTML = x;
  }

  function reset(){
    generateRandom()
    console.log(num)
    chanceCount = 1
    document.getElementById("myText").value =''
    
  }



  
  
  
  
    