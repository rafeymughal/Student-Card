//   Q NO 1
  
  // import { useState } from "react";

// function Conditions() {
//     const [score, setscore] = useState(50);
//     const [isPass, setisPass] = useState(true);
//     return (

//         <div>
//             <h1 className="style">
//             {
//                 score >=== 50 ?
//                     isPass === true ?
//                         "congratulations" : "almost here"
//                      :"fail"

// }</h1>
//         </div>

//     );
// }
// export default Conditions;

// Q NO 2

// import { useState } from "react";

// function Conditions() {
//     const [age, setage] = useState(18);
//     const [hasId, sethasId] = useState(true);
//     const [isStudent,setisStudent] = useState(true)
//     return (

//         <div>
//             <h1 className="style">
//                 {
//                     age === 18 ?
//                         hasId === true ?
//                             "you can enter" : "bring your id "
//                         :isStudent === true ?
//                         "student discount available":
//                         "not allowed"

//                 }</h1>
//         </div>

//     );
// }
// export default Conditions;





// Q NO 3


// import { useState } from "react"

// function Question3() {
//     const [weather, setWeather] = useState("rainy")
//     const [temperature, setTemperature] = useState(33)
//     const [isWeekend, setIsWeekend] = useState(false)
//     return <div>
//         <h1>question 3</h1>
//         {
//             weather === "sunny" ?
//                 temperature > 30 ?
//                     "go to beach" : "nice weather" :
//                 weather === "rainy" && isWeekend === true ?
//                     "stay home and rest" : "normal weather"
//         }
//     </div>
// }

// export default Question3