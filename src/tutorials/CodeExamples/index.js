import React from 'react';
import Highlight from 'react-highlight'
import { Link } from 'react-router-dom';
import '../../../node_modules/highlight.js/styles/monokai.css'

const CodeExamples = (props) =>{
    const state = props.value;
    return(
        <>
        <div style={{fontSize: '1.25em'}}>
            <h3>{props.title}</h3>
            <span style={{fontSize: '0.75em', backgroundColor: '#010b33', padding: '5px 12px 5px 12px', color: 'white !important', fontStyle: 'italic', opacity: '1'}}> <Link style={{color: 'white'}} to={{
                pathname: '/CodeEditor',
                state
            }}>Try It Yourself</Link> </span>
            <Highlight language="language-html">
            { props.value }
            </Highlight>
            <br />
            
        </div>
        </>
    )
    
        
};
const CodeExamplesShow = (props) =>{
    return(
        <>
        <div style={{fontSize: '1.25em'}}>
            <h3>{props.title}</h3>
            <Highlight language="language-html">
            { props.value }
            </Highlight>
            <br />
            
        </div>
        </>
    )
    
        
};
const CodeExamplesOutput = (props) => {
    return(
        <>
            <p>{props.heading}</p>
            <br />
            <div style={{backgroundColor: 'rgb(199, 206, 205)', padding: '10px 10px'}}>
                <Highlight innerHTML={true} language="language-html">
                  { props.value }
                </Highlight>
            </div><br/> <br></br>
        </>
    )
}
export default CodeExamples;
export { CodeExamplesOutput, CodeExamplesShow };