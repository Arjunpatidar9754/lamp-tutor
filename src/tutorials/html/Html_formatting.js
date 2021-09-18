import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import CodeExamples, { CodeExamplesOutput } from '../CodeExamples/index';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../layout-components';


export default function Html_formatting() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="HTML Formatting"
        titleDescription="A best place to learn HTML for begginners"
      />
      <div style={{fontSize: '1.25em'}}>
          <Grid container spacing={3}>
              <Grid item sm={12}>
                <p>If you use a word processor, you must be familiar with the ability to make text bold, italicized, or underlined; these are just three of the ten options available to indicate how text can appear in HTML and XHTML.</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Bold Text</h3>
                <p>Anything that appears within <b>&lt;b&gt;...&lt;/b&gt;</b> element, is displayed in bold as shown below −</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Bold Text Example</title>
   </head>
   <body>
      <p>The following word uses a <b>bold</b> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>
   <head>
      <title>Bold Text Example</title>
   </head>
   <body>
      <p>The following word uses a <b>bold</b> typeface.</p>
   </body>
</html>`} />

              </Grid>
              <Grid item xs={12} sm={6} >
                <h3>Italic Text</h3>  
                <p>Anything that appears within <b>&lt;i&gt;...&lt;/i&gt;</b> element is displayed in italicized as shown below −</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Italic Text Example</title>
   </head>
   <body>
      <p>The following word uses an <i>italicized</i> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Italic Text Example</title>
   </head>
	
   <body>
      <p>The following word uses an <i>italicized</i> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <br />
                <h3>Underlined Text</h3>
                <p>Anything that appears within <b>&lt;u&gt;...&lt;/u&gt;</b> element, is displayed with underline as shown below −</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Underlined Text Example</title>
   </head>
   <body>
      <p>The following word uses an <u>underlined</u> typeface.</p>
   </body>
</html>`} />
              <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Underlined Text Example</title>
   </head>
	
   <body>
      <p>The following word uses an <u>underlined</u> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Strike Text</h3>
                <p>Anything that appears within<b>&lt;strike&gt;...&lt;/strike&gt;</b></p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Strike Text Example</title>
   </head>
   <body>
      <p>The following word uses a <strike>strikethrough</strike> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Strike Text Example</title>
   </head>
	
   <body>
      <p>The following word uses a <strike>strikethrough</strike> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Monospaced Font</h3>
                <p>The content of a <b>&lt;tt&gt;...&lt;/tt&gt;</b> element is written in monospaced font. Most of the fonts are known as variable-width fonts because different letters are of different widths (for example, the letter 'm' is wider than the letter 'i'). In a monospaced font, however, each letter has the same width.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Monospaced Font Example</title>
   </head>
   <body>
      <p>The following word uses a <tt>monospaced</tt> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Monospaced Font Example</title>
   </head>
	
   <body>
      <p>The following word uses a <tt>monospaced</tt> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Superscript Text</h3>
                <p>The content of a <b>&lt;sup&gt;...&lt;/sup&gt;</b> element is written in superscript; the font size used is the same size as the characters surrounding it but is displayed half a character's height above the other characters.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Superscript Text Example</title>
   </head>
   <body>
      <p>The following word uses a <sup>superscript</sup> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Superscript Text Example</title>
   </head>
	
   <body>
      <p>The following word uses a <sup>superscript</sup> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Subscript Text</h3>
                <p>The content of a <b>&lt;sub&gt;...&lt;/sub&gt;</b> element is written in subscript; the font size used is the same as the characters surrounding it, but is displayed half a character's height beneath the other characters.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Subscript Text Example</title>
   </head>
   <body>
      <p>The following word uses a <sub>subscript</sub> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Subscript Text Example</title>
   </head>
	
   <body>
      <p>The following word uses a <sub>subscript</sub> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Inserted Text or Deleted Text</h3>
                <p>Anything that appears within <b>&lt;ins&gt;...&lt;/ins&gt;</b> element is displayed as inserted text.</p>
                <p>Anything that appears within <b>&lt;del&gt;...&lt;/del&gt;</b> element, is displayed as deleted text.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Deleted Text Example</title>
   </head>
   <body>
      <p>I want to drink <del>cola</del> <ins>wine</ins></p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Deleted Text Example</title>
   </head>
	
   <body>
      <p>I want to drink <del>cola</del> <ins>wine</ins></p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Larger Text</h3>
                <p>The content of the <b>&lt;big&gt;...&lt;/big&gt;</b> element is displayed one font size larger than the rest of the text surrounding it as shown below −</p>
                <h4>Example</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Larger Text Example</title>
   </head>
   <body>
      <p>The following word uses a <big>big</big> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Larger Text Example</title>
   </head>
	
   <body>
      <p>The following word uses a <big>big</big> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Smaller Text</h3>
                <p>The content of the <b>&lt;small&gt;...&lt;/small&gt;</b> element is displayed one font size smaller than the rest of the text surrounding it as shown below −</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Smaller Text Example</title>
   </head>
   <body>
      <p>The following word uses a <small>small</small> typeface.</p>
   </body>
</html>`} />  
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Smaller Text Example</title>
   </head>

   <body>
      <p>The following word uses a <small>small</small> typeface.</p>
   </body>

</html>`} />
              </Grid>
              <Grid item sm={12}>
                <h3>Grouping Content</h3>
                <p>The <b>&lt;div&gt;</b> and <b>&lt;span&gt;</b> elements allow you to group together several elements to create sections or subsections of a page.</p>
              </Grid>
              <Grid item xs={12} sm={6} >
                <p>For example, you might want to put all of the footnotes on a page within a &lt;div&gt; element to indicate that all of the elements within that &lt;div&gt; element relate to the footnotes. You might then attach a style to this &lt;div&gt; element so that they appear using a special set of style rules.</p>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Div Tag Example</title>
   </head>
   <body>
      <div id = "menu" align = "middle" >
         <a href = "/index.htm">HOME</a> | 
         <a href = "/about/contact_us.htm">CONTACT</a> | 
         <a href = "/about/index.htm">ABOUT</a>
      </div>
      <div id = "content" align = "left" >
         <h5>Content Articles</h5>
         <p>Actual content goes here.....</p>
      </div>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result `} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Div Tag Example</title>
   </head>
	
   <body>
      <div id = "menu" align = "middle" >
         <a href = "/index.htm">HOME</a> | 
         <a href = "/about/contact_us.htm">CONTACT</a> | 
         <a href = "/about/index.htm">ABOUT</a>
      </div>

      <div id = "content" align = "left" >
         <h5>Content Articles</h5>
         <p>Actual content goes here.....</p>
      </div>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <p>The &lt;span&gt; element, on the other hand, can be used to group inline elements only. So, if you have a part of a sentence or paragraph which you want to group together, you could use the &lt;span&gt; element as follows.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Span Tag Example</title>
   </head>
   <body>
      <p>This is the example of <span style = "color:green">span tag</span>
         and the <span style = "color:red">div tag</span> alongwith CSS</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Span Tag Example</title>
   </head>
	
   <body>
      <p>This is the example of <span style = "color:green">span tag</span>
         and the <span style = "color:red">div tag</span> alongwith CSS</p>
   </body>
	
</html>`} />
                <p>These tags are commonly used with CSS to allow you to attach a style to a section of a page.</p>
              </Grid>
          </Grid>
        
      </div>
      <div>
          <Link to='/Html_attributes'>
            <span className="btn-prev">Previous</span>
          </Link> 
          <Link to='/Html_phraseTags' >
          <span className="btn-next">Next</span>
          </Link>
      </div>
    </Fragment>
  );
}