import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  var name=prompt("Please Enter Your Name:");
    var tem=Math.random();
    var r=Math.floor((tem*6)+1);
    var counter=0;
    do{
        counter++;
       var g= parseInt(prompt("Guess A Number Between 0..6"));
        if(g==r){
            alert("Congrats! '"+ name +"' You Win The Game!");
            break;
        }
        else if(g>r){
            alert("Your Enter Grater Number! Please Try Again!");
        }
        else{
            alert("Your Enter Small Number! Please Try Again!");
        }
    }while(true);

    document.write("'"+name +"' You Win Game After '"+ counter + "' attemted")
  return (
    <h1>Hi!Asad Is Here!</h1>
  );
}

export default App;
