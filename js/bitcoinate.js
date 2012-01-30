// bitcoinate by Adrian Sieber

(function(){
	var style = document.createElement('style');
		style.type = "text/css";
		style.innerHTML = '.bitcoinate{font-weight:900;font-family:"Arial",sans-serif;color:#fff;text-shadow:0 -1px 0px rgba(0,0,0,0.5);border:1px solid #c16c07;margin:0px;font-size:100%}.bitcoinate img{display:inline-block;vertical-align:middle}.bitcoinate[data-size="20"]{background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f7931a), color-stop(100%, #c16c07));background-image:-webkit-linear-gradient(#f7931a,#c16c07);background-image:-moz-linear-gradient(#f7931a,#c16c07);background-image:-o-linear-gradient(#f7931a,#c16c07);background-image:-ms-linear-gradient(#f7931a,#c16c07);background-image:linear-gradient(#f7931a,#c16c07);padding:0 3px;font-size:12px;line-height:18px;border-radius:2px}.bitcoinate[data-size="20"]:active{box-shadow:inset 0 0 4px rgba(0,0,0,0.5)}.bitcoinate[data-size="20"]:hover,.bitcoinate[data-size="20"]:focus{background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f89e34), color-stop(100%, #e88208));background-image:-webkit-linear-gradient(#f89e34,#e88208);background-image:-moz-linear-gradient(#f89e34,#e88208);background-image:-o-linear-gradient(#f89e34,#e88208);background-image:-ms-linear-gradient(#f89e34,#e88208);background-image:linear-gradient(#f89e34,#e88208)}.bitcoinate[data-size="20"] img{width:10px;height:14px;margin:0 4px 0 0;position:relative;bottom:2px}.bitcoinate[data-size="30"]{background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f7931a), color-stop(100%, #c16c07));background-image:-webkit-linear-gradient(#f7931a,#c16c07);background-image:-moz-linear-gradient(#f7931a,#c16c07);background-image:-o-linear-gradient(#f7931a,#c16c07);background-image:-ms-linear-gradient(#f7931a,#c16c07);background-image:linear-gradient(#f7931a,#c16c07);padding:0 8px;font-size:18px;line-height:28px;border-radius:4px}.bitcoinate[data-size="30"]:active{box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.bitcoinate[data-size="30"]:hover,.bitcoinate[data-size="30"]:focus{background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f89e34), color-stop(100%, #e88208));background-image:-webkit-linear-gradient(#f89e34,#e88208);background-image:-moz-linear-gradient(#f89e34,#e88208);background-image:-o-linear-gradient(#f89e34,#e88208);background-image:-ms-linear-gradient(#f89e34,#e88208);background-image:linear-gradient(#f89e34,#e88208)}.bitcoinate[data-size="30"] img{width:15px;height:22px;margin:0 4px 0 0;position:relative;bottom:3px}.bitcoinate[data-size="50"]{background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f7931a), color-stop(100%, #c16c07));background-image:-webkit-linear-gradient(#f7931a,#c16c07);background-image:-moz-linear-gradient(#f7931a,#c16c07);background-image:-o-linear-gradient(#f7931a,#c16c07);background-image:-ms-linear-gradient(#f7931a,#c16c07);background-image:linear-gradient(#f7931a,#c16c07);padding:0 12px;font-size:32px;line-height:48px;border-radius:5px;text-shadow:0 -2px 0px rgba(0,0,0,0.5)}.bitcoinate[data-size="50"]:active{box-shadow:inset 0 0 10px rgba(0,0,0,0.5)}.bitcoinate[data-size="50"]:hover,.bitcoinate[data-size="50"]:focus{background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f89e34), color-stop(100%, #e88208));background-image:-webkit-linear-gradient(#f89e34,#e88208);background-image:-moz-linear-gradient(#f89e34,#e88208);background-image:-o-linear-gradient(#f89e34,#e88208);background-image:-ms-linear-gradient(#f89e34,#e88208);background-image:linear-gradient(#f89e34,#e88208)}.bitcoinate[data-size="50"] img{width:25px;height:36px;margin:0 8px 0 0;position:relative;bottom:4px}';
		document.body.appendChild(style);
		
	var buttons = document.getElementsByClassName('bitcoinate');
	var sentence = 'Please donate bitcoins to:';

	for(var i = 0; i < buttons.length; i++){
		buttons[i].title = sentence + buttons[i].dataset.address;
		buttons[i].innerHTML = '<img src="https://raw.github.com/adius/bitcoinate/master/img/bitcoinate'+buttons[i].dataset.size+'.png" alt="B" />bitcoinate';
		
		buttons[i].addEventListener('click', function(){
			window.prompt(sentence, this.dataset.address);
		}, false);
	}

})();