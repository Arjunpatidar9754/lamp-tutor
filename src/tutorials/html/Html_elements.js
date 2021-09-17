import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import CodeExamples, { CodeExamplesOutput } from '../CodeExamples/index';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../layout-components';
import './html_css.css';

export default function Html_elements() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="HTML Elements"
        titleDescription="A best place to learn HTML for begginners"
      />
      <div id='elements' style={{fontSize: '1.25em'}}>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <p>
                  An <b>HTML element</b> is defined by a starting tag. If the element contains other content, it ends with a closing tag, where the element name is preceded by a forward slash as shown below with few tags −
                </p>
                <table>
                  <tr>
                     <th><b>Start Tag</b></th> 
                     <th><b>Content</b></th>
                     <th><b>End Tag</b></th>
                  </tr>
                  <tr>
                    <td>&lt;p&gt;</td>
                    <td>This is paragraph content</td>
                    <td>&lt;/p&gt;</td>
                  </tr>
                  <tr>
                    <td>&lt;h1&gt;</td>
                    <td>This is heading content</td>
                    <td>&lt;/h1&lt;</td>
                  </tr>
                  <tr>
                    <td>&lt;div&gt;</td>
                    <td>This is division content</td>
                    <td>&lt;/div&lt;</td>
                  </tr>
                  <tr>
                    <td>&lt;br /&gt;</td>
                    <td>This is line breaking Tag</td>
                    <td></td>
                  </tr>
                </table><br />
                <p>
                So here <b>&lt;p&gt;....&lt;/p&gt;</b> is an HTML element, <b>&lt;h1&gt;...&lt;/h1&gt;</b> is another HTML element. There are some HTML elements which don't need to be closed, such as <b>&lt;img.../&gt;</b>, <b>&lt;hr /&gt;</b> and <b>&lt;br /&gt;</b> elements. These are known as <b>void elements.</b>
                </p>
                <p>
                  HTML documents consists of a tree of these elements and they specify how HTML documents should be built, and what kind of content should be placed in what part of an HTML document.
                </p>
                <br />
                <h2>HTML Tag vs. Element</h2>
                <p>An HTML element is defined by a <i>starting tag</i>. If the element contains other content, it ends with a <i>closing tag</i>.</p>
                <p>
                For example, <b>&lt;p&gt;</b> is starting tag of a paragraph and <b>&lt;/p&gt;</b> is closing tag of the same paragraph but <b>&lt;p&gt;This is paragraph&lt;/p&gt; </b> is a paragraph element.
                </p>
                <br />

              </Grid>
              <Grid item xs={12} sm={6} >
                <h2>Nested HTML Elements</h2>
                <p>It is very much allowed to keep one HTML element inside another HTML element −</p>
                <h3>Example-</h3>
                  <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Nested Elements Example</title>
   </head>	
   <body>
      <h1>This is <i>italic</i> heading</h1>
      <p>This is <u>underlined</u> paragraph</p>
   </body>
</html>`} />
                <p>This will display the following result −</p>
                <CodeExamplesOutput value={`<!DOCTYPE html>
<html>

   <head>
      <title>Nested Elements Example</title>
   </head>
	
   <body>
      <h1>This is <i>italic</i> heading</h1>
      <p>This is <u>underlined</u> paragraph</p>
   </body>
	
</html>`} />
              </Grid>
          </Grid>
        
      </div>
      <div>
          <Link to='/Html_basicTags'>
            <span style={{padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Previous</span>
          </Link> 
          <Link to='/Html_attributes' >
          <span style={{margin: '2px 30vw', padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Next</span>
          </Link>
      </div>
    </Fragment>
  );
}