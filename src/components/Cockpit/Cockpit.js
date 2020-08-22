import React   from "react";
import classes from "./Cockpit.module.css";

const Cockpit = ( props ) => {

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
        </div>
    );
};

export default React.memo(Cockpit);
