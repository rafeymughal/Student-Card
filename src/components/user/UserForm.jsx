import { useState } from "react";

function UserForm() {
    const [userName, setUserName] = useState("ali");
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)} >Clcick to increase</button>
                <input onChange={(e) => {
                    setUserName(e.target.value)
            }} type="text" placeholder="User name" />
            <button onClick={() => {    
                setUserName("asif")
            }}>asif name</button>
            <button onClick={() => {
                setUserName("")
            }}>reset </button>
            <h1> this is  your form value {userName},{count}</h1>

        </div>
    )
}

export default UserForm;