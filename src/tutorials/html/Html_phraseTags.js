import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import CodeExamples, { CodeExamplesOutput } from '../CodeExamples/index';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../layout-components';


export default function Html_phraseTags() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="HTML Phrase Tags"
        titleDescription="A best place to learn HTML for begginners"
      />
      <div style={{fontSize: '1.25em'}}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <p>The phrase tags have been desicolgned for specific purposes, though they are displayed in a similar way as other basic tags like &lt;b&gt;, &lt;i&gt;, &lt;pre&gt;, and &lt;tt&gt;, you have seen in previous chapter. This chapter will take you through all the important phrase tags, so let's start seeing them one by one.</p>
            </Grid>
              <Grid item xs={12} sm={6}>
                
                <h3>Emphasized Text</h3>
                <p>Anything that appears within <b>&lt;em&gt;...&lt;/em&gt;</b> element is displayed as emphasized text.</p>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Emphasized Text Example</title>
   </head>
   <body>
      <p>The following word uses an <em>emphasized</em> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Emphasized Text Example</title>
   </head>
	
   <body>
      <p>The following word uses an <em>emphasized</em> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6} >
                  <h3>Marked Text</h3>
                  <p>Anything that appears with-in <b>&lt;mark&gt;...&lt;/mark&gt;</b> element, is displayed as marked with yellow ink.</p>
                  <h4>Example-</h4>
                  <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Marked Text Example</title>
   </head>
   <body>
      <p>The following word has been <mark>marked</mark> with yellow</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Marked Text Example</title>
   </head>
	
   <body>
      <p>The following word has been <mark>marked</mark> with yellow</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Strong Text</h3>
                <p>Anything that appears within <b>&lt;strong&gt;...&lt;/strong&gt;</b> element is displayed as important text.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Strong Text Example</title>
   </head>
   <body>
      <p>The following word uses a <strong>strong</strong> typeface.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Strong Text Example</title>
   </head>
	
   <body>
      <p>The following word uses a <strong>strong</strong> typeface.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Text Abbreviation</h3>
                <p>You can abbreviate a text by putting it inside opening &lt;abbr&gt; and closing &lt;/abbr&gt; tags. If present, the title attribute must contain this full description and nothing else.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Text Abbreviation</title>
   </head>
   <body>
      <p>My best friend's name is  <abbr title = "Abhishek">Abhy</abbr>.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Text Abbreviation</title>
   </head>
	
   <body>
      <p>My best friend's name is  <abbr title = "Abhishek">Abhy</abbr>.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Acronym Element</h3>
                <p>The <b>&lt;acronym&gt;</b> element allows you to indicate that the text between &lt;acronym&gt; and &lt;/acronym&gt; tags is an acronym.</p>
                <p>At present, the major browsers do not change the appearance of the content of the &lt;acronym&gt; element.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Acronym Example</title>
   </head>
   <body>
      <p>This chapter covers marking up text in <acronym>XHTML</acronym>.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Acronym Example</title>
   </head>
	
   <body>
      <p>This chapter covers marking up text in <acronym>XHTML</acronym>.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Text Direction</h3>
                The <b>&lt;bdo&gt;...&lt;/bdo&gt;</b> element stands for Bi-Directional Override and it is used to override the current text direction.
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Text Direction Example</title>
   </head>
   <body>
      <p>This text will go left to right.</p>
      <p><bdo dir = "rtl">This text will go right to left.</bdo></p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>
   <head>
      <title>Text Direction Example</title>
   </head>
   <body>
      <p>This text will go left to right.</p>
      <p><bdo dir = "rtl">This text will go right to left.</bdo></p>
   </body>
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Special Terms</h3>
                <p>The <b>&lt;dfn&gt;...&lt;/dfn&gt;</b> element (or HTML Definition Element) allows you to specify that you are introducing a special term. It's usage is similar to italic words in the midst of a paragraph.</p>
                <p>Typically, you would use the &lt;dfn&gt; element the first time you introduce a key term. Most recent browsers render the content of a &lt;dfn&gt; element in an italic font.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Special Terms Example</title>
   </head>
   <body>
      <p>The following word is a <dfn>special</dfn> term.</p>
   </body>
</html>`} />
                <p></p>
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Special Terms Example</title>
   </head>
	
   <body>
      <p>The following word is a <dfn>special</dfn> term.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Quoting Text</h3>
                <p>When you want to quote a passage from another source, you should put it in between <b>&lt;blockquote&gt;...&lt;/blockquote&gt;</b> tags.</p>
                <p>Text inside a &lt;blockquote&gt; element is usually indented from the left and right edges of the surrounding text, and sometimes uses an italicized font.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Blockquote Example</title>
   </head>
   <body>
      <p>The following description of XHTML is taken from the W3C Web site:</p>
      <blockquote>XHTML 1.0 is the W3C's first Recommendation for XHTML,following on 
         from earlier work HTML 4.01, HTML 4.0, HTML 3.2 and HTML 2.0.</blockquote>
   </body>
</html>`} />
              <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Blockquote Example</title>
   </head>
	
   <body>
      <p>The following description of XHTML is taken from the W3C Web site:</p>

      <blockquote>XHTML 1.0 is the W3C's first Recommendation for XHTML,following on 
         from earlier work on HTML 4.01, HTML 4.0, HTML 3.2 and HTML 2.0.</blockquote>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Short Quotations</h3>
                <p>The <b>&lt;q&gt;...&lt;/q&gt;</b> element is used when you want to add a double quote within a sentence.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Double Quote Example</title>
   </head>
   <body>
      <p>Amit is in Spain, <q>I think I am wrong</q>.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>

   <head>
      <title>Double Quote Example</title>
   </head>
	
   <body>
      <p>Amit is in Spain, <q>I think I am wrong</q>.</p>
   </body>
	
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Text Citations</h3>
                <p>If you are quoting a text, you can indicate the source placing it between an opening &lt;cite&gt; tag and closing &lt;/cite&gt; tag</p>
                <p>As you would expect in a print publication, the content of the &lt;cite&gt; element is rendered in italicized text by default.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Citations Example</title>
   </head>
   <body>
      <p>This HTML tutorial is derived from <cite>W3 Standard for HTML</cite>.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>
   
   <head>
      <title>Citations Example</title>
   </head>
   
   <body>
      <p>This HTML tutorial is derived from <cite>W3 Standard for HTML</cite>.</p>
   </body>
   
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6} >
                <h3>Computer Code</h3>
                <p>Any programming code to appear on a Web page should be placed inside &lt;code&gt;...&lt;/code&gt; tags. Usually the content of the &lt;code&gt; element is presented in a monospaced font, just like the code in most programming books.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Computer Code Example</title>
   </head>
   <body>
      <p>Regular text. <code>This is code.</code> Regular text.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>
   
   <head>
      <title>Computer Code Example</title>
   </head>
   
   <body>
      <p>Regular text. <code>This is code.</code> Regular text.</p>
   </body>
   
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Keyboard Text</h3>
                <p>When you are talking about computers, if you want to tell a reader to enter some text, you can use the &lt;kbd&gt;...&lt;/kbd&gt; element to indicate what should be typed in, as in this example.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Keyboard Text Example</title>
   </head>
   <body>
      <p>Regular text. <kbd>This is inside kbd element</kbd> Regular text.</p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>
   
   <head>
      <title>Keyboard Text Example</title>
   </head>
   
   <body>
      <p>Regular text. <kbd>This is inside kbd element</kbd> Regular text.</p>
   </body>
   
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h3>Programming Variables</h3>
                <p>This element is usually used in conjunction with the &lt;pre&gt; and &lt;code&gt; elements to indicate that the content of that element is a variable.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Variable Text Example</title>
   </head>
   <body>
      <p><code>document.write("<var>user-name</var>")</code></p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>
   
   <head>
      <title>Variable Text Example</title>
   </head>
   
   <body>
      <p><code>document.write("<var>user-name</var>")</code></p>
   </body>
   
</html>`} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h4>Program Output</h4>
                <p>The &lt;samp&gt;...&lt;/samp&gt; element indicates sample output from a program, and script etc. Again, it is mainly used when documenting programming or coding concepts.</p>
                <h4>Example-</h4>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Program Output Example</title>
   </head>
   <body>
      <p>Result produced by the program is <samp>Hello World!</samp></p>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>
   
   <head>
      <title>Program Output Example</title>
   </head>
   
   <body>
      <p>Result produced by the program is <samp>Hello World!</samp></p>
   </body>
   
</html>`} />
              </Grid>
              <Grid>
                <h3>Address Text</h3>
                <p>The <b>&lt;address&gt;...&lt;/address&gt;</b> element is used to contain any address.</p>
                <CodeExamples value={`<!DOCTYPE html>
<html>
   <head>
      <title>Address Example</title>
   </head>
   <body>
      <address>388A, Road No 22, Jubilee Hills -  Hyderabad</address>
   </body>
</html>`} />
                <CodeExamplesOutput heading={`This will produce the following result −`} value={`<!DOCTYPE html>
<html>
   
   <head>
      <title>Address Example</title>
   </head>
   
   <body>
      <address>388A, Road No 22, Jubilee Hills -  Hyderabad</address>
   </body>
   
</html>`} />
              </Grid>
          </Grid>
        
      </div>
      <div>
          <Link to='/Html_formatting'>
            <span className="btn-prev">Previous</span>
          </Link> 
          <Link to='/Html_metaTags' >
          <span className="btn-next">Next</span>
          </Link>
      </div>
    </Fragment>
  );
}