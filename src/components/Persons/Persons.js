import React, { PureComponent } from "react";
import Person                   from "./Person/Person";

class Persons extends PureComponent {
    render() {
        return (
            this.props.persons.map(( person, index ) => {
                return <Person
                    click={() => this.props.click(index)}
                    changed={( event ) => this.props.changed(event, person.id)}
                    name={person.name}
                    age={person.age}
                    key={person.id} />;
            })
        );
    }
}

export default Persons;
