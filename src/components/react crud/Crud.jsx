import { useState } from "react";
import "./Crud.css";
function Crud(){
    const [search,setSearch]=useState("");
    const [name,setName]=useState("");
    const [quality,setQuality]=useState("");
    const [runrate,setRunrate]=useState("");
const [player, setPlayer] = useState([
    {
        name :"Fakhar Zaman",
quality:"let arm batsman",
runrate:"189",

    },
     {  
        name :"Babar Azam",
quality:"right hand batsman",
runrate:"160",

    } ,
    {
        name :"Mazz sadaqat",
quality:"batsman",
runrate:"200",

    },
     {
        name :"Naseem Shah",
quality:"fast boller",
runrate:"110",

    },
     {
        name :"Muhammad  Nawaz",
quality:"spinner",
runrate:"165",

    }
])
const handleAdd =()=>{
 const addPlayer = {
name:name,
quality:quality,
runrate:runrate
};
setPlayer([...player,addPlayer]);
};
const refreshPlayer = () => {
setName("");
setQuality("");
setRunrate("");
};
const deletePlayer = (r)=>{
const filterPlayer = player.filter((f)=> f.name !==r);
setPlayer(filterPlayer);

}
    return( <div>
<div className= "main-container">

    <div className="inline">
<h1>learning CRUD in REACT.JSX ⚛︎</h1>
<h1>find your best player{search} </h1>
<br />
<input 
 type="text"
placeholder="enter player name"
onChange={(e)=>{setSearch(e.target.value)}} 
/> 
<br />
<input value={name} type="text" placeholder="enter name"
onChange={(e)=>{setName(e.target.value)}}/>
<br />
<input value={quality} type="text" placeholder="enter quality"
onChange={(e)=>{setQuality(e.target.value)}}/>
<br />
<input value={runrate} type="text" placeholder="enter runrate"
onChange={(e)=>{setRunrate(e.target.value)}}/><br/>
</div>
<br />
<button onClick={handleAdd}>Enter new player 👉</button>
<button onClick={refreshPlayer}>refresh players</button>
<div className="right-side">
{player
.filter(
    (f)=>
 f.name.toLowerCase().includes(search)||
f.quality.toLowerCase().includes(search)||
f.runrate.includes (search), 
)

.map((s)=>{
    return(
<div>        
<h1>{s.name}</h1>
<h2>{s.quality}</h2>
<h3>{s.runrate}</h3>
<button onClick={()=>{
    deletePlayer(s.name)
}}>remove </button>
</div>

)
})

}
</div>
</div>
</div>
    )
}
export default Crud; 