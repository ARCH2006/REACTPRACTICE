// function Hello({props}){
//     return(
//         <h1>HIIII!!!!!!!!!!!!! {props.petname} {props.age} </h1>
//     )
// }
// export default Hello;
function Hello({name,petname,age}){
    return(
        <h1>HIIII!!!!!!!!!!!!! {petname} {age} </h1>
    )
}
export default Hello;