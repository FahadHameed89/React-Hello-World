import React from 'react';
import HelloStudent from './HelloStudent';

function HelloStudents () 
{
    const students = [ "Fahad", "Samson", "Drake" ];
    const studentsList = students.map( name => <HelloStudent name={name} />);    // Map is a method that creates a key value pair based on what we are returning
                                                                                // Fat Arrow is assigning name to equal to studentName
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