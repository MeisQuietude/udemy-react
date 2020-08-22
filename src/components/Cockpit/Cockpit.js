import React, { useContext } from "react";
import classes     from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = ( props ) => {

    const authContext = useContext(AuthContext);

    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
        assignedClasses.push(classes.red);
    }
    if ( props.personsLength <= 1 ) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button
                className={btnClass}
                altstyle={props.showPersons ? 1 : 0}
                onClick={props.click}>Toggle Persons
            </button>
            <button
                onClick={authContext.login}>
                Login
            </button>
        </div>
    );
};

export default React.memo(Cockpit);
