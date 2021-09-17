import React from "react";

const CodeEditor = (props) => {
    const value = (props.location && props.location.state);
    console.log(value);
    return (
        <>
        <h1>hii</h1>
        <pre>{value}</pre>
        </>
    )
    
}

export default CodeEditor;