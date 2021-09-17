import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import CodeExamples, { CodeExamplesOutput, CodeExamplesShow } from '../CodeExamples/index';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../layout-components';
import './html_css.css';



export default function Html_attributes() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="HTML Attributes"
        titleDescription="A best place to learn HTML for begginners"
      />
      <div style={{fontSize: '1.25em'}} id='attributes'>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <p>We have seen few HTML tags and their usage like heading tags <b>&lt;h1&gt;, &lt;h2&gt;</b>, paragraph tag <b>&lt;p&gt;</b> and other tags. We used them so far in their simplest form, but most of the HTML tags can also have attributes, which are extra bits of information.</p>
                <br />
                
                <p>An attribute is used to define the characteristics of an HTML element and is placed inside the element's opening tag. All attributes are made up of two parts − a <b>name </b>and a <b>value</b></p>
                <ul>
                    <li>
                    The <b>name</b> is the property you want to set. For example, the paragraph <b>&lt;p&gt;</b> element in the example carries an attribute whose name is <p>align</p>, which you can use to indicate the alignment of paragraph on the page.
                    </li>
                    <li>
                    The <b>value</b> is what you want the value of the property to be set and always put within quotations. The below example shows three possible values of align attribute: <b>left</b>, <b>center</b> and <b>right.</b>
                    </li>
                    <p>Attribute names and attribute values are case-insensitive. However, the World Wide Web Consortium (W3C) recommends lowercase attributes/attribute values in their HTML 4 recommendation.</p>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} >
                <h3>Example</h3>

                  <CodeExamples value={`<!DOCTYPE html> 
<html>
   <head> 
      <title>Align Attribute  Example</title> 
   </head>
   <body> 
      <p align = "left">This is left aligned</p> 
      <p align = "center">This is center aligned</p> 
      <p align = "right">This is right aligned</p> 
   </body>
</html>`} />
                <p></p>
                <CodeExamplesOutput value={`<!DOCTYPE html> 
<html>
 
   <head> 
      <title>Align Attribute  Example</title> 
   </head>
	
   <body> 
      <p align = "left">This is left aligned</p> 
      <p align = "center">This is center aligned</p> 
      <p align = "right">This is right aligned</p> 
   </body>
	
</html>`} />
              </Grid>
          </Grid><hr />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <h2>Core Attributes</h2>
              <p>The four core attributes that can be used on the majority of HTML elements (although not all) are −</p>
              <ul>
                <li>Id</li>
                <li>Class</li>
                <li>Title</li>
                <li>Style</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3>The Id Attribute</h3>
              <p>The <b>id</b> attribute of an HTML tag can be used to uniquely identify any element within an HTML page. There are two primary reasons that you might want to use an id attribute on an element −</p>
              <ul>
                <li>If an element carries an id attribute as a unique identifier, it is possible to identify just that element and its content.</li>
                <li>If you have two elements of the same name within a Web page (or style sheet), you can use the id attribute to distinguish between elements that have the same name.</li>
              </ul>
              <p>We will discuss style sheet in separate tutorial. For now, let's use the id attribute to distinguish between two paragraph elements as shown below.</p><br />
              <h4>Example-</h4>
              <CodeExamplesShow value={`<p id = "html">This para explains what is HTML</p>
<p id = "css">This para explains what Is Cascading Style Sheet</p>`} /><br /><br />
              <h3>The class Attribute</h3>
              <p>The <b>class</b> attribute is used to associate an element with a style sheet, and specifies the class of element. You will learn more about the use of the class attribute when you will learn Cascading Style Sheet (CSS). So for now you can avoid it.</p>
              <p>The value of the attribute may also be a space-separated list of class names. For example −</p>
              <CodeExamplesShow value={`class = "className1 className2 className3"`} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3>The <b>title</b> Attribute</h3>
              <p>The <b>title</b> attribute gives a suggested title for the element. They syntax for the title attribute is similar as explained for <b>id</b> attribute −</p>
              <p>The behavior of this attribute will depend upon the element that carries it, although it is often displayed as a tooltip when cursor comes over the element or while the element is loading.</p>
              <br />
              <h4>Example-</h4>
              <CodeExamples value={`<!DOCTYPE html>
<html>

   <head>
      <title>The title Attribute Example</title>
   </head>
	
   <body>
      <h3 title = "Hello HTML!">Titled Heading Tag Example</h3>
   </body>
	
</html>`}    />
              <p></p>
              <CodeExamplesOutput value={`<!DOCTYPE html>
<html>

   <head>
      <title>The title Attribute Example</title>
   </head>
	
   <body>
      <h3 title = "Hello HTML!">Titled Heading Tag Example</h3>
   </body>
	
</html>`} />
              <p>Now try to bring your cursor over "Titled Heading Tag Example" and you will see that whatever title you used in your code is coming out as a tooltip of the cursor.</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3>The style Attribute</h3>
              <p>The style attribute allows you to specify Cascading Style Sheet (CSS) rules within the element.</p>
              <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>The style Attribute</title>
   </head>	
   <body>
      <p style = "font-family:arial; color:#FF0000;">Some text...</p>
   </body>	
</html>`} /> 
              <p>This will produce the following result −</p>
              <CodeExamplesOutput value={`<!DOCTYPE html>
<html>

   <head>
      <title>The style Attribute</title>
   </head>
	
   <body>
      <p style = "font-family:arial; color:#FF0000;">Some text...</p>
   </body>
	
</html>`} />
              <p>At this point of time, we are not learning CSS, so just let's proceed without bothering much about CSS. Here, you need to understand what are HTML attributes and how they can be used while formatting content.</p>
            </Grid>
            <Grid item sm={12}><hr />
              <h2>Internationalization Attributes</h2>
              <p>There are three internationalization attributes, which are available for most (although not all) XHTML elements.</p>
              <ul>
                <li>dir</li>
                <li>lang</li>
                <li>xml-lang</li>
              </ul>
              <br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3>The dir Attribute</h3>
              <p>The dir attribute allows you to indicate to the browser about the direction in which the text should flow. The dir attribute can take one of two values, as you can see in the table that follows −</p>
              <br></br>
              <table>
                <tr>
                  <th>Value</th>
                  <th>Meaning</th>
                </tr>
                <tr>
                  <td>ltr</td>
                  <td>Left to right (the default value)</td>
                </tr>
                <tr>
                  <td>rtl</td>
                  <td>Right to left (for languages such as Hebrew or Arabic that are read right to left)</td>
                </tr>
              </table>
              <br />
              <h4>Example</h4>
              <CodeExamples value={`<!DOCTYPE html>
<html dir = "rtl">
   <head>
      <title>Display Directions</title>
   </head>
   <body>
      This is how IE 5 renders right-to-left directed text.
   </body>	
</html>`} />
              <p>This will produce the following result −</p>
              <CodeExamplesOutput value={`<!DOCTYPE html>
<html dir = "rtl">

   <head>
      <title>Display Directions</title>
   </head>
	
   <body>
      This is how IE 5 renders right-to-left directed text.
   </body>
	
</html>`} />
              <p>When <i>dir</i> attribute is used within the &lt;html&gt; tag, it determines how text will be presented within the entire document. When used within another tag, it controls the text's direction for just the content of that tag.</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3>The lang Attribute</h3>
              <p>The <b>lang</b> attribute allows you to indicate the main language used in a document, but this attribute was kept in HTML only for backwards compatibility with earlier versions of HTML. This attribute has been replaced by the <b>xml:lang</b> attribute in new XHTML documents.</p>
              <p>The values of the <i>lang</i> attribute are ISO-639 standard two-character language codes. Check <b>HTML Language Codes: ISO 639</b> for a complete list of language codes.</p><br />
              <h4>Example-</h4>
              <CodeExamples value={`<!DOCTYPE html>
<html lang = "en">
   <head>
      <title>English Language Page</title>
   </head>
   <body>
      This page is using English Language
   </body>
</html>`} />
              <p>This will produce the following result −</p>
              <CodeExamplesOutput value={`<!DOCTYPE html>
<html lang = "en">
   <head>
      <title>English Language Page</title>
   </head>
   <body>
      This page is using English Language
   </body>
</html>`} />
            </Grid>
            <Grid item sm={12}>
              <h3>The xml:lang Attribute</h3>
              <p>The <i>xml:lang</i> attribute is the XHTML replacement for the <i>lang</i> attribute. The value of the xml:lang attribute should be an ISO-639 country code as mentioned in previous section.</p>
              <br />
              <h4>Generic Attributes</h4>
              <p>Here's a table of some other attributes that are readily usable with many of the HTML tags.</p>
              <div align="center"> 
                 <table>
                    <tr>
                       <th>Attribute</th>
                       <th>Options</th>
                       <th>Function</th>
                    </tr>
                    <tr>
                       <td>align</td>
                       <td>right, left, center</td>
                       <td>Horizontal aligns tags</td>
                    </tr>
                    <tr>
                       <td>valign</td>
                       <td>top, middle, bottom</td>
                       <td>Vertical aligns tags within an HTML element</td>
                    </tr>
                    <tr>
                       <td>bgcolor</td>
                       <td>numeric, hexadecimal, RGB values</td>
                       <td>Place a background color behind an element</td>
                    </tr>
                    <tr>
                       <td>background</td>
                       <td>URL</td>
                       <td>Places a background image behind an element</td>
                    </tr>
                    <tr>
                       <td>id</td>
                       <td>User Defined</td>
                       <td>Names an element for use with Cascading Style Sheet</td>
                    </tr>
                    <tr>
                       <td>class</td>
                       <td>User Defined</td>
                       <td>Classifies an element for use with Cascading Style Sheets.</td>
                    </tr>
                    <tr>
                       <td>width</td>
                       <td>Numeric Value</td>
                       <td>Specifies the width of tables, images, or table cells.</td>
                    </tr>
                    <tr>
                       <td>height</td>
                       <td>Numeric Value</td>
                       <td>Specifies the height of tables, images, or table cells.</td>
                    </tr>
                    <tr>
                       <td>title</td>
                       <td>User Defined</td>
                       <td>"Pop-up" title of the elements.</td>
                    </tr>
                 </table>
              </div>
              <br />
            </Grid>
            <br />
          </Grid>
        
      </div>
      <div>
          <Link to='/Html_elements'>
            <span style={{padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Previous</span>
          </Link> 
          <Link to='/Html_formatting' >
          <span style={{margin: '2px 30vw', padding: '7px 15px', borderRadius: '20px', backgroundColor: '#000a2e', color: 'white', fontWeight: 'bold'}}>Next</span>
          </Link>
      </div>
    </Fragment>
  );
}