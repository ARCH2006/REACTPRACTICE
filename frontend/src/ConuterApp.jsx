import { useState } from "react";

function ConuterApp(){
    const [count,Setcount] = useState(0);
    const [ison,Setison] = useState(false);
    const [name,SetName] = useState("");
    const [color,setColor]  = useState("white");
     const [likes,Setlikes] = useState(0);

    const onchangecolor=()=>{
        setColor(color === "white"? "lightblue":"white");

    };
    return(
        <>
         <h2>COUNTER: {count}</h2>
            <button onClick = {()=> Setcount(count+1) }>Increment</button>
            <button onClick = {() => Setcount(count -1)}>Decrement</button>
            <br />

        <img src={ison? "src/assets/onbulb.png" :"src/assets/image.png"} alt="bulb" />
        
        <h2>SWITCH: {ison? "ON" :"OFF"}</h2>
        <button onClick={()=>Setison(!ison)}> {ison? "TURN OFF":"TURN ON"}</button>
        <br />
        <input type="text" placeholder= "Enter your name" value={name} onChange={(e)=> SetName(e.target.value)} />
        <h1>Helooo!! {name}</h1>


        <div style={{backgroundColor: color, padding: "20px"}}>
            <button onClick={onchangecolor}>Change Background</button>
            
        </div>

        <button onClick={()=>Setlikes(likes+1)}>❤️{likes}</button>


       
        </>
           
    );
}
export default ConuterApp;