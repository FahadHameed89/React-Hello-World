import React from 'react';
import HelloStudent from './HelloStudent';

function HelloStudents () 
{
    const students = [ "Fahad", "Samson", "Drake" ];
    let counter = 0;
    const studentsList = students.map( studentName => <HelloStudent key={counter++} name={studentName} />);    // Map is a method that creates a key value pair based on what we are returning

    // Grabbing name, feeding it into studentsName. For each one of these items, create a map that has Hellostudent name as the value.

    console.log ( studentsList);

    return ( 
        <section>
            <h2>Hello there children!</h2>
            {studentsList}
        </section>
    );
}

export default HelloStudents;