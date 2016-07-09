// JavaScript Document
$(document).ready(function(e) {
    $('nav a').on('click', function(){
		
		//Current class assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');
		
		//Set heading text
		$('h1#heading').text($(this).text());
		
		//Get and filter link text
		var category = $(this).text().toLowerCase().replace(' ','-');
		
		//Remove hidden class if 'all-projects' is selected
		if(category == 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		}else{
			$('ul#gallery li').each(function(index, element) {
                if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				}else{
					$(this).fadeIn('slow').removeClass('hidden');
				}
            });
		}
		//Stop Link Behavior
		return false;
	});
	
	//Mouseenter Overlay
	$('ul#gallery li').on('mouseenter', function(){
		//Get data attribute values
		var title = $(this).data('title');
		var desc = $(this).data('desc');
		
		//Validation
		if(desc == null){
			desc = 'Click to enlarge';
		}
		
		if(title == null){
			title = '';
		}
		
		//Create overlay div
		$(this).append('<div class="overlay"></div>');
		
		//Get the overlay div
		var overlay = $(this).children('.overlay');
		
		//Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		
		//Fade in overlay
		overlay.fadeIn(800);
	});
	
	//Mouseleave Overlay
	$('ul#gallery li').on('mouseleave', function(){		
		//Get the overlay div
		var overlay = $(this).children('.overlay');
		
		//Fade in overlay
		overlay.fadeOut(500);
		
	});	
});