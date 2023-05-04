import React from 'react';


const Blog = () => {
    // const ref = React.createRedf();
    


    return (
        <div>
            <h1 className='text-center'>blog page</h1>
            <h2 className='text-center	decoration-solid font-bold '>            Tell us the differences between uncontrolled and controlled components.
</h2>
<p>
the input form element in the controlled component is handled by the component rather than the DOM.In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.

</p>
<br></br>
            <h2 className='text-center	decoration-solid font-bold '>How to validate React props using PropTypes
</h2>
<p>
Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.Since JavaScript doesnt have a built-in type checking solution, many developers use extensions like TypeScript and Flow.


</p>
<br></br>
            <h2 className='text-center	decoration-solid font-bold '>Tell us the difference between nodejs and express js.
</h2>
<p>
NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas ReactJS is a JavaScript front-end library.js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.

</p>
<br></br>
            <h2 className='text-center	decoration-solid font-bold '>What is a custom hook, and why will you create a custom hook?
</h2>
<p>
The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic.It can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.

</p>

{/* to pdf convertion */}
{/* <div>
    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
    <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/>
</div> */}



        </div>
    );
};

export default Blog;