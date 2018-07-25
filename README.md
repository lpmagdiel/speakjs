# speakjs version 1.0
speakjs is a library that allows you to interact with a browser client in an easy and efficient way.
<h2>initialize the app</h2>
<code>var mySpeekjs = new speeks('en')</code><br>
<p>When we initialize our speeks object it receives a single parameter, the ISO code of the language to be used.</p>
<p>if you don't know what code to use for your language you can see <a href="https://www.w3schools.com/tags/ref_language_codes.asp">this link</a></p>
<h2>function list</h2>
<ul>
  <li>textToVoice</li>
  <li>voiceToText</li>
  <li>command</li>
  <li>listen</li>
</ul>
<h2>convert text to speech</h2>
<p>the process to convert text to speech is very simple as it already works and you only need to receive the text to be read.</p>
<h3>Example:</h3>
<pre>
<code>
  <p>var sjs = new speeks('en');
    sjs.textToVoice('hello word');
</code>
</pre>
