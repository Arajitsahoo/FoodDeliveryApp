import React from "react";
import userContext from "../utils/userContext";

class  UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            count: 0,
            count2: 1,
        }
    }

    

    render(){
        const {name,Location,contact} =this.props;
        const {count, count2}  = this.state;
        return(
            <div className="User">
            <h1>Count - {count}</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,                
                })
            }}>Count Increment</button>
            <h2>Count2 - {count2}</h2>
            <p>Name - {name}</p>
            <p>Location - {Location}</p>
            <p>contact - {contact}</p>
            <userContext.Consumer>
                {({loggedinUser})=><p>{loggedinUser}</p>}
            </userContext.Consumer>
        </div>
        );
    };
};
export default UserClass;