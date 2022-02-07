import React from 'react';
import './App.css';
import  useSound from 'use-sound';

import audio from './audio/808hihat1/808hihat1.WAV'
import audio1 from './audio/808kick.wav'
import audio2 from './audio/606snar.wav'
import audio3 from './audio/808crash.wav'












function Example() {


  var C = document.getElementById("btn4");
  window.addEventListener("keydown",
  function(key){
   
      if (key.keyCode=="68")
      C.style.background="red";
    
      
      else {
        C.style.background="black "
      }
      
  });
  


var Bc = document.getElementById("btn3");
window.addEventListener("keyup",
function(key){
 
    if (key.keyCode=="70")
    Bc.style.background="yellow";
    else  {
      Bc.style.background="black";
    }
});


  var Bb = document.getElementById("btn2");
  window.addEventListener("keyup",
  function(key){
   
      if (key.keyCode=="83")
      Bb.style.background ="yellow";
      else {
        Bb.style.background="black"
      }
  });

  var Ba = document.getElementById("btn1");
  window.addEventListener("keyup",
  function(key){
   
      if (key.keyCode=="65")
      Ba.style.color="red";
      else {
        Ba.style.color="black";
        Ba.style.background="black"
        

      }
  });
     
     


  const [play] =useSound(audio);
  const [play1] =useSound(audio1);
  const [play2] =useSound(audio2);
  const [play3] =useSound(audio3);

  window.addEventListener("keypress", V,false) 
  function V (key){
    if(key.keyCode == "83")
        play2()

       
    
  }
  
  window.addEventListener("keypress", A,false) 
  function A (key){
    if(key.keyCode=="65")
    
       play1();
  }
  
  window.addEventListener("keypress", e,false) 
  function e (key){
    if(key.keyCode =="68")
     play();
  }
  
  window.addEventListener("keypress", Z,false) 
  function Z (key){
    if(key.keyCode =="70"){
     play3()
     
     
  }}


  return(
  
    <div>
      <input type="text" />
      
      
      <header  id="btn1" >bit box</header>
      <h2 >PLAY ONLINE</h2>
      <div className='b'>
        <button id="btn2" > BD</button>
        
        <button id="btn3">HI</button>
        <button id='btn4'>crash</button>
        <button>claps</button>
        <button>tom1</button>
        <button>tom2</button>
        
        </div>
      
    </div>


  )


   
     
    

   

   
                     
   
 

   
  
  


  // Similar to componentDidMount and componentDidUpdate:  useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
 
  
             
     
  
  }

  export default Example