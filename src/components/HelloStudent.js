import React from 'react';

// WE can use fat arrow syntax to define components as well.
// If the component accepts a parementer, this is referred to as a 'prop' . In this case, 'name' is a prop
// Props alllow us to pass values into our components from a parent document / component. 


const HelloStudent = ( props ) => {
    let name = props.name;
    
    
    return (
        <p>
            Card Name: { props.name }. MP Cost: { props.cost }. Effect: { props.effect }.
        </p>
    );
}

export default HelloStudent;