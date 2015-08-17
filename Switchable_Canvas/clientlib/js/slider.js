

alert("hello4");

  		var smallSliderInProgress = false;
  		var animationTime = 500;
		var itemArray = ["/content/dam/sdsingtel/TM_Gamer","/content/dam/sdsingtel/HungryGoWhere","/content/dam/sdsingtel/eatability","/content/dam/sdsingtel/Pixable","/content/dam/sdsingtel/NewsLoop","/content/dam/sdsingtel/AMPed","/content/dam/sdsingtel/Klink","/content/dam/sdsingtel/mio_TV_Go","/content/dam/sdsingtel/inSing.com","/content/dam/sdsingtel/mioPlay"];
		var jqBigSlider;
		var jqSmallSlider; 
		var dotContainer;




  		function startSmallSliderTimer(distance) {
				smallSliderInProgress = true;
				//console.log("Locking for: " + animationTime*distance + "ms.");
				setTimeout(function() { 
					smallSliderInProgress = false; 
					//console.log("released lock");
				},animationTime*distance);  		
  		}

  		
  		function setDotIndicator() {
  			setTimeout(function() {
				$(".dotIndicator").removeClass("activeDot");
				$("#dot" + getActiveSlide()).addClass("activeDot"); 
			},5);		
  		}
  		
		function moveRight(distance) {			
			if(!smallSliderInProgress) {
				startSmallSliderTimer(distance);
				for(var i=0;i<distance;i++) {
				
					//var easing = "linear";
					//if(i == (distance-1)) easing = "swing";
									
					setTimeout(function() {
					
						// move last to first
						var smallMoveObject  = $(".thumbIcon").last().clone();
						var bigMoveObject    = $(".bigPicture").last().clone();
						
						var translateSmallBy = 103; //$(".thumbIcon").first().width();
						var translateBigBy   = 714; //$(".bigPicture").first().width();
						
						//console.log("Translating by: " + translateSmallBy + ", " + translateBigBy);

						smallMoveObject.css("width","0px");
						bigMoveObject.css("width","0px");
						$(".thumbIcon").last().remove();
						$(".bigPicture").last().remove();
	
						$("#smallSlider").prepend(smallMoveObject);
						$("#bigSlider").prepend(bigMoveObject);					
						
						smallMoveObject.animate({'width':translateSmallBy},animationTime,function() { setDotIndicator(); });					
						bigMoveObject.animate({'width':translateBigBy},animationTime,function() {});

					},animationTime*i);
					
				}
			}
			
		}
		
		// this one blows.
		function moveLeft(distance) {
		
			//console.log("moving " + distance);
			
			if(!smallSliderInProgress) {
				startSmallSliderTimer(distance);
				for(var i=0;i<distance;i++) {
				
					//var easing = "linear";
					//if(i == (distance-1)) easing = "swing";
					
					setTimeout(function() {
					
						//console.log("moving." + (animationTime*i));
						var firstSmallObject = $(".thumbIcon").first()
						var firstBigObject   = $(".bigPicture").first()
						var smallMoveObject = firstSmallObject.clone();
						var bigMoveObject   = firstBigObject.clone();

						firstSmallObject.animate({'width':'0px'},animationTime,function() {
							$("#smallSlider").append(smallMoveObject);
							firstSmallObject.remove();
							setDotIndicator();
							//console.log("done");							
						});	
						
						firstBigObject.animate({'width':'0px'},animationTime,function() {
							$("#bigSlider").append(bigMoveObject);
							firstBigObject.remove();
						});

					},(animationTime*i) + (i*(animationTime/10)));	
													
				} // for
			}
		}

		function getActiveSlide() {
			return parseInt($('div.thumbIcon:nth-child(5)').attr("id").replace("thumb",""));
		}
		
		function getSlideIndex(eId) {
			return $(".infiniteSlider").index($(eId));
		}
		
		function jumpTo(targetSlideIndex) {	
			if(targetSlideIndex < 5) { 	moveRight(4-targetSlideIndex); }
			else { 						moveLeft(targetSlideIndex-4); }
		}

		function matrixToArray(matrix) {
		    return matrix.substr(7, matrix.length - 8).split(', ');
		}

		function getCurrentXTranslation() {
			 var matrix = matrixToArray($("div.infiniteSlider").css("-webkit-transform"));
			 //console.log($("div.infiniteSlider").css("-webkit-transform"))
			 return parseInt(matrix[4]);
		}

		function gotoSlide(slideNumber) {
			$('#flexbig').flexslider(slideNumber-1);
		}

		function populateSliders() { 
			for(var i=0;i<itemArray.length;i++) {

 //console.log( "ready!" );
                alert("h1");
			//	jqBigSlider.append('<div class="bigPicture" id="big' + i + '"><img usemap="#' + itemArray[i] + 'Map" id="bigPic' + itemArray[i] + '" class="bigPic" src="' + itemArray[i] + '.png" /></div>');

			//	jqSmallSlider.append('<div class="thumbIcon" id="thumb' + i + '"  onClick="jumpTo($(this).index());"><img src="' + itemArray[i] + '_icon.png" /><div class="iconText">' + itemArray[i].replace(/_/g, '&nbsp;') + '</div></div>')

			//	dotContainer.append('<div class="dotIndicator" id="dot' + i + '">&nbsp;</div>');


			}
		}

populateSliders();

