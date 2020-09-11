import React from 'react';
import HelloStudent from './HelloStudent';

function HelloStudents () 
{
    const students = [ 
        {name:"Fahad", cost:"24MP", effect:"Iron Body"}, 
        {name:"Samson", cost:"12MP", effect:"Sword Catcher"}, 
        ];
    // Create a counter starting at 0 which ramps up to assign the key. 
        let counter = 0;
    const studentsList = students.map( student => <HelloStudent key={counter++} name={student.name} cost={student.cost} effect={student.effect} />);    // Map is a method that creates a key value pair based on what we are returning

    // Grabbing name, feeding it into studentsName. For each one of these items, create a map that has Hellostudent name as the value.

    // Analyze provided data, check in console log via JS
    console.log ( studentsList);

    return ( 
        <section>
            <h2>Hello there children!</h2>
            {studentsList}
        </section>
    );
}

export default HelloStudents;