
$(document).ready(function() {

	 $('.start-carousel').slick({
	 	cssEase: 'linear',
		autoplay: false,
		indinity: false,
		autoplaySpeed: 2500,
		pauseOnHover: true,
        pauseOnFocus: true,
        prevArrow:
	        `
		        <button class="start-carousel__btn _prev btn">
		        	<span class="icon icon-arrow-left start-carousel__icon"></div>
		        </button>
	        `,
		nextArrow:
			`
				<button class="start-carousel__btn _next btn">
					<span class="icon icon-arrow-right start-carousel__icon"></span>
				</button>
			`,
      });

});