import { useState } from "react";
function FriendCard() {
  const [frd, setFrd] = useState(["MUNEEB", "HAMZA", "HAIDER"]);
  const [name, setName] = useState("");
  const  del = (remove) => {
  setFrd(frd.filter((friend, i) => i !== remove));
};
  const add = () => {
    setFrd([...frd, name])
    setName("")
  }
  return (
    <div className="main-container" > 
    <div className="heading-box ">
      <h1>My Friend List</h1>
</div>
<div className="input-box ">
      <input  type="text" value={name} onChange={(e) => {
        setName(e.target.value)
      }} placeholder="Enter friend name" />
      <button className="add-btn" onClick={add}>Add friend</button>
     </div>
     
      <div className="friends-box">
      <table border={0}>
      {frd.map(
        (s, si) => {
          return <tr className="friend-row"
          key = { si }>
           
        <td> { s } </td>
        <td> <button className="delete-btn" onClick={() => del(si)}> Delete </button></td>
         </tr>
}

) }

</table>
</div>


    </div>
  );
}


export default FriendCard;