import React from 'react';              /** Imports the React Library */

function Hello ()                       /** Defining a function called Hello */
{   // Evry component returns JSX, which is a hybrid language that allows Javascript and HTML to interact. 
    return (
        <h1>                           
            Hello, World!               
        </h1>
    );
}

// In order to be able to import our functions to other files, we need t oexport our function first.
export default Hello;