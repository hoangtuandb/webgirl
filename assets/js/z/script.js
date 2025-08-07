$(document).ready(function() {
	$('.content a').fancybox();
	TweenMax.staggerFrom(
			$('.content a'), // phần tử được chọn
			2, // thời gian chuyển động
			{top:100,opacity:0.1},
			0.1 // thời gian cách nhau giữa mỗi hiệu ứng
		);
});
$(document).ready(function() {
	$('.content-vid a').fancybox();
	TweenMax.staggerFrom(
			$('.content-vid a'), // phần tử được chọn
			2, // thời gian chuyển động
			{top:100,opacity:0.1},
			0.1 // thời gian cách nhau giữa mỗi hiệu ứng
		);
});