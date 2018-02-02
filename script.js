$(document).ready(function(){

	var isDarkLayer = true;

	$(".colag__picture").click(function(){
		var source = $(this).attr("src");

		$("._active").removeClass("_active");
		$(this).addClass("_active");

		var frame = $(this).attr("frame");

		$(".colag__ramka").css("transform", "translateX("+100*frame+"%)");

		var $hidden = $(".colag__main._hidden");

		$(".colag__main._hidden").attr("src", source);
		$(".colag__main._visible").removeClass("_visible").addClass("_hidden");;

		$hidden.removeClass("_hidden").addClass("_visible");
	});


	$("a[href='#okno']").click(function(event){
		event.preventDefault();
		
		$(".modal").addClass("_active");
	
	});

	$(".modal__content").click(function() {
		isDarkLayer = false;
	});

	$(".modal__close").click(function(){
		$(".modal").removeClass("_active");
	});

	$(".modal").click(function(){
		if (isDarkLayer) {
			$(".modal").removeClass("_active");
		}
		isDarkLayer = true;
	});

	$(document).ready(function(){
  			$('.bigimg__container').slick({
    			autoplay: true,
    			autoplaySpeed: 2000,
  			});
		});
});