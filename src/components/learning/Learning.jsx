import { useState } from "react";

function Learning() {
    const [student,setStudent]=useState({
        name:"rafey",
         age:16});        
const changeAge = () =>{
setStudent({
...student,
age:student.age + 1

});
};
const decAge = () =>{
setStudent({
...student,
age:student.age -1
});
};
const resetAge = () =>{
setStudent({
...student,
age:16,
});
};


    return (
        <div>
<h1>{student.name}</h1>            
    <h1>Age:{student.age}</h1> 
    <button onClick={changeAge}>increase age</button>
    <br />
    <button onClick={decAge}>decrease age</button>
    <br />
    <button onClick={resetAge}>reset age</button>
    
             </div>

                );

    }
            export default Learning;    

