import React from 'react';

// WE can use fat arrow syntax to define components as well.
// If the component accepts a parementer, this is referred to as a 'prop' . In this case, 'name' is a prop
// Props alllow us to pass values into our components from a parent document / component. 


const HelloStudent = ( props ) => {
        
    return (
        <p>
            Hello there!{ props.name }. You have { props.cost }. Your Passive Ability is: { props.effect }.
        </p>
    );
}

export default HelloStudent;