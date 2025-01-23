import React from 'react';

export default function Hello(){
    // return(
    //     <div>
    //         <h1>Hello React!</h1>
    //     </div>
    // );

    return React.createElement(
        'div', 
        null, 
        React.createElement('h1', null, "Hello React!")
    );
}