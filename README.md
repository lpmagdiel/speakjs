# speakjs version 1.0
speakjs is a library that allows you to interact with a browser client in an easy and efficient way.
<h2>initialize the app</h2>
<code>var mySpeekjs = new speakjs('en')</code><br>
<p>When we initialize our speeks object it receives a single parameter, the ISO code of the language to be used.</p>
<p>if you don't know what code to use for your language you can see <a href="https://www.w3schools.com/tags/ref_language_codes.asp">this link</a></p>
<h2>function list</h2>
<ul>
  <li>textToVoice</li>
  <li>voiceToText</li>
  <li>command</li>
  <li>listen</li>
</ul>
<h2>textToVoice</h2>
<p>The process to convert text to speech is very simple as it already works and you only need to receive the text to be read.</p>
<h3>Example:</h3>
<pre>
<code>
  var sjs = new speakjs('en');
  sjs.textToVoice('hello word');
</code>
</pre>
<br>
<h2>voiceToText</h2>
<p>It receives as parameter a function that will be executed as soon as the user has finished speaking.</p>
<h3>Example:</h3>
<pre>
<code>
  var sjs = new speakjs('en');
  sjs.voiceToText(function(txt){
    console.log("you said: " + txt);
  });
</code>
</pre>
<br>
<h2>command</h2>
<p>Creates a new voice command, receives 2 parameters:<br>
1- the word to which a function will be assigned.<br>
2- the function that will be executed when the user pronounces the word.</p>
<h3>Example:</h3>
<pre>
<code>
  var sjs = new speakjs('en');
  sjs.command("hello",function(){
    alert("Hi, how are you?");
  });
</code>
</pre>
<br>
<h2>listen</h2>
<p>The <b>listen</b> function is in charge of listening to what the user is saying and when the user says a word that matches one of the commands entered, it will then execute the function assigned to that command.</p>
<h3>Example:</h3>
<pre>
<code>
  var sjs = new speakjs('en');
  sjs.command("hello",function(){
    alert("Hi, how are you?");
  });
  
  sjs.listen();
</code>
</pre>
<br>
