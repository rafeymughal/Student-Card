

// function Playerscore({ player, index }) {
//     return (
//             <tr>
//                 <td>{index + 1}</td>
//                 <td>{player.name}</td>
//                 <td>{player.runs}</td>
//                 <td>{player.balls}</td>
//                  <td>
//                 {player.runs >= 50 ? (
//                     <span className="fifty">Fifty Scored</span>
//                 ) : (
//                     <span className="playing">Playing</span>
//                 )}
//             </td>
//             </tr>
        

//     )
// }
// export default Playerscore;




// APP.JSX CODE ===
// import "./App.css"
// import { useState } from "react"
// import Playerscore from "./components/scoreboard/Playerscore"
// function App() {
//   const [display, setdisplay] = useState(true)
//   const tableStyle = {
//     border: '3px solid #6e5a5a',
//     borderRadius: '8px',
//     width: 600,
//     height: 200,
//   };
//   const [players, setplayers] = useState([
//     {
//       name: "Babar Azam",
//       runs: 72,
//       balls: 60
//     },
//     {
//       name: "Muhammad Rizwan",
//       runs: 45,
//       balls: 38
//     },
//     {
//       name: "Fakhar Zaman",
//       runs: 18,
//       balls: 20
//     },
//     {
//       name: "Saim Ayub",
//       runs: 56,
//       balls: 42
//     }

//   ]);

//   return (

//     <div >
//      <h1> Players Score Board
//       <button onClick={() => setdisplay(!display)}> {display ? "Hide Score Board" : "Show Score Board"} </button> </h1>
//       {display && (
   
//       <div className="flex">
//         <table style={tableStyle}>
//           <tr>
//             <th>Sr No .</th>
//             <th>Player Name</th>
//             <th>Runs</th>
//             <th>Balls</th>
//             <th>Status</th>
//           </tr>

//           {players.map((p, i) => {
//             return <Playerscore player={p} index={i} />
//           })}


//         </table>





//       </div>
//       )}
//     </div >)
// }

// export default App;