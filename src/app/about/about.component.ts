import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


 
  constructor() { 
    
  }
  
  ngOnInit() {


  /* ===============================================================================
 Code structure
 1. Global var
 2. Functions
 3. Document Ready
 4. Window Load

 Tips:
 	- Remove "slow" and replace with var if "slow" is used more than once
 	- Only 1 document ready, and only 1 window load
 	- Most of the things should be in document ready
=============================================================================== */

// GLOBAL VAR

// all the FUNCTIONS

	/* music sahil */
		let audio = [];
    let current: any;
    let $me = $(this)
    
		
		//Setup the audio variable
		
		$('audio').each(function(){
			$me = $(this);
			var data = $me.data("sound");
			audio[data] = $me[0];
			console.log(audio);
		});
		
		var sound = {
			'play':function($obj, loop){ // sound.play(name of sound, loop or no loop)
				this.stop();
				// console.log($obj);
				current = audio[$obj.data('sound')];
				current.play();
			/*	loop = typeof loop !== 'undefined' ? loop : true;
				if(loop) current.addEventListener('ended', function(){this.currenttime = 0;}, false); */
			},
			'stop': function(){
				if(current) current.pause();
			}
		}

  }
}
