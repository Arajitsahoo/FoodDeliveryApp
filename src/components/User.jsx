import { useState } from "react";

const User = (props)=>{
    const {name,Location,contact}= props;
    const [count] = useState(0);
    const [count2] = useState(1);

    return(
        <div className="User">
            <h1>Count - {count}</h1>
            <h2>Count2 - {count2}</h2>
            <p>Name -{name}</p>
            <p>Location -{Location}</p>
            <p>contact - {contact}</p>
        </div>
    );
};
export default User;