/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-23 16:37:19
 * @version $Id$
 */
window.onload=function(){
	var box=document.getElementsByTagName('section')
	for (var i = 0; i < box.length; i++) {
		if (window.screen.height > window.screen.width){ 
			box[i].style.width = window.screen.width + 'px';
			box[i].style.height = window.screen.height + 'px';
		} else{
			box[i].style.width = window.innerHeight*900/1440 + 'px';
			box[i].style.height = window.innerHeight + 'px';	
		};
	}

};


