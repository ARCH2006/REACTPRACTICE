function StudentCard({student,calculategrade}){
    const {name,age,marks} = student;
    const grade = calculategrade(marks);
    return(
        <div>
            <h1>name: {name}</h1>
            <p>age : {age}</p>
            <h1><strong>GRADE is: {grade}</strong></h1>
        </div>

    );
}
export default StudentCard;

//{name= "ARCHANA",age = 20,marks = 90,