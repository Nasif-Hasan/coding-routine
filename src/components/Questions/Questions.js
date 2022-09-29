import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions-container'>
            <div className='que-box'>
                <h1>How Does React Application Work</h1>
                <p>A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state.</p>
            </div>
            <div className='que-box'>
                <h1>Difference Between Props And State</h1>
                <p>Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
            </div>
            <div className='que-box'>
                <h1>How Does UseEffect Work On React</h1>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed , and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
            </div>
            
        </div>
    );
};

export default Questions;