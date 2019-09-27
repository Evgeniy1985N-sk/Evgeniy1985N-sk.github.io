$(document).ready(function() {

	/* menu */
	$('.header-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.header-menu_list').toggleClass('active');
	});
	$('.header-menu_list').on('click', 'a:not(.active)', function(){
		$('.header-menu_list a').removeClass('active');
		$(this).addClass('active');
	});

	/* accordion */
	$('.answers-list_item').eq(1).addClass('active');
	$('.answers-list_sub').eq(1).slideDown();
	
	$('.answers-list').on('click', '.answers-list_item', function() {

		$('.answers-list_item').not(this).removeClass('active');
		$(this).toggleClass('active');

		$('.answers-list_sub').not( $(this).siblings('.answers-list_sub') ).slideUp();
		$(this).siblings('.answers-list_sub').slideToggle();

	});

});