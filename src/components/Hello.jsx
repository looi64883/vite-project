import React from 'react';

export default function Hello(){
    const name = "blabla"

    return(
        <div>
            <h1>Hello {name} React!</h1>
            <p>Example</p>
        </div>
    );

    // return React.createElement(
    //     'div', 
    //     {id : 'abc', className : 'test'}, 
    //     React.createElement('h1', null, "Hello React!")
    // );
}