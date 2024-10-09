import User from "./User.jsx";
import UserClass from "./UserClass.jsx";

const About = ()=>{
    return(
        <div>
            <h1>About</h1>
            <h1>This is my 1st React Project</h1>
            <User name ={"Arajit Sahoo"} Location ={"Odisha"} contact={"79783843448"}/>
            <UserClass  name ={"Arajit Sahoo"} Location ={"Odisha"} contact={"79783843448"}/>
        </div>
    );
};
export default About;