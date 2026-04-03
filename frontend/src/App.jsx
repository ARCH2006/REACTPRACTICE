
import Hello from './Hello';
import StudentCard from './StudentCard';

import React,{useState} from 'react';
import ConuterApp from './ConuterApp';
const calculategrade = (marks)=>{
    if(marks >=90) return "O";
    if(marks >=70) return "A";
    if(marks >=50) return "B";
    return "Fail";

  };
 
  const students = [
    {name:"Archana",age:20,marks:100},
    {name:"Niki",age:20,marks:100},
  ]
function App() {
  
  return(<>
  <h1>heloo</h1>
    <p>HAPPY BIRTHDAY NIHITHA</p>
    <Hello name = "NIHITHA" petname = "niki" age = {22}/>
    <h1>Student Grade System</h1>

    {students.map((stud) =>(
      <StudentCard 
    
      student = {stud}
    calculategrade = {calculategrade} />
  

    ))}
    <ConuterApp/>
    </>
    
    

    
  )
}

export default App
