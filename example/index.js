var ip = document.getElementById('inputText');
var sbtn = document.getElementById('btn-speak');
var sbtn2 = document.getElementById('btn-speak2');
var ltext = document.getElementById('ltext');
var tcommand = document.getElementById('textCommand');
var sel = document.getElementById('sel');
var add = document.getElementById('btn-add');
var listen = document.getElementById('listen');
var sjs = new speakjs('es');


/*    --- textToVoice test ---    */
sbtn.addEventListener('click',function(e){
	sjs.textToVoice(ip.value);
});

/*    --- voiceToText test ---    */
sbtn2.addEventListener('click',function(e){
	sjs.voiceToText(function(txt){
		ltext.innerText = txt;
	});
});


/*    --- command test ---    */
add.addEventListener('click',function(e){
	if(sel.selectedIndex == 0){sjs.command(tcommand.value,al)}
	else if(sel.selectedIndex == 1){sjs.command(tcommand.value,cc)}
	else if(sel.selectedIndex == 2){sjs.command(tcommand.value,sp)}
	else if(sel.selectedIndex == 3){sjs.command(tcommand.value,ofk)}
	alert('new command added for the word: '+tcommand.value);
});



/*    --- listen test ---    */
listen.addEventListener('click',function(e){
	sjs.listen();
});


function ofk(){location.href ="https://www.facebook.com/"}
function al(){alert("voice command successfully executed")}
function cc(){document.body.style.backgroundColor = "#CCCC99"}
function sp(){sjs.textToVoice('You are special')}