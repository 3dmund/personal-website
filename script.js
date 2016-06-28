$(document).ready(function() {

	$('#navi-name').click(scrollToTop);
	$('#about-me-link').click(scrollToAboutMe);
	$('#projects-link').click(scrollToProjects);
	$('#skills-link').click(scrollToSkills);
	$('#experience-link').click(scrollToExperience);
	$('#education-link').click(scrollToEducation);
	$('#extracurriculars-link').click(scrollToExtracurriculars);

	$('#arrow-up').click(scrollToTop);
	$('#arrow-down').click(scrollToBottom);

	$('#letter-unopened').hover(function() {
		$(this).hide();
		$('#letter-opened').show();
	});
	$('#letter-opened').mouseleave(function() {
		$(this).hide();
		$('#letter-unopened').show();
	})

	$('.arrow').hover(function() {
		$(this).css('opacity', 1.0);
	}, function() {
		$(this).css('opacity', 0.6);
	});

	$('.icon').hover(function() {
		$('.icon').addClass('icon-not-selected');
		$(this).removeClass('icon-not-selected');
	}, function() {
		$('.icon').removeClass('icon-not-selected');
	});


	$(window).scroll(function() {
		// $('.progress').animate({
		// 	marginLeft: '+=10px'
		// 	// width: '50%'
		// }, 500, function() {});

	    var top_of_element = $(".progress").offset().top;
	    var bottom_of_element = $(".progress").offset().top + $(".progress").outerHeight;
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();

	    // if((bottom_of_screen > top_of_element) && (bottom_of_screen < bottom_of_element))
	    if (isElementInViewport($('#java'))) {
	        $('#java').slideOver('90%');
	    }
	    if (isElementInViewport($('#python'))) {
	        $('#python').slideOver('85%');
	    }
	    if (isElementInViewport($('#html5'))) {
	        $('#html5').slideOver('85%');
	    }
	    if (isElementInViewport($('#css3'))) {
	        $('#css3').slideOver('85%');
	    }
	    if (isElementInViewport($('#javascript'))) {
	        $('#javascript').slideOver('75%');
	    }
	    if (isElementInViewport($('#c-sharp'))) {
	        $('#c-sharp').slideOver('60%');
	    }
	    if (isElementInViewport($('#sql'))) {
	        $('#sql').slideOver('40%');
	    }
	    if (isElementInViewport($('#sql'))) {
	        $('#sql').slideOver('40%');
	    }
	    if (isElementInViewport($('#tools-header'))) {
	        $('#tools').animate({
				marginRight: '3%'
			}, 500, function() {});
	    }
	});

});

$.fn.slideOver = function(amount) {
	$(this).animate({
		width: amount
	}, 1000, function() {});
}


// function animate
function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}


function scrollAt(destination) {
	$('html, body').animate({
        scrollTop: $(destination).offset().top
    }, 500);
};

var scrollToTop = function() {
    $('html, body').animate({
        scrollTop:0}, 500);
};
var scrollToAboutMe = function() {
    $('html, body').animate({
        scrollTop: $('#about-me').offset().top
    }, 500);
};
var scrollToProjects = function() {
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 500);
};
var scrollToSkills = function() {
    $('html, body').animate({
        scrollTop: $('#skills').offset().top
    }, 500);
};
var scrollToExperience = function() {
    $('html, body').animate({
        scrollTop: $('#experience').offset().top
    }, 500);
};
var scrollToEducation = function() {
    $('html, body').animate({
        scrollTop: $('#education').offset().top
    }, 500);
};
var scrollToExtracurriculars = function() {
    $('html, body').animate({
        scrollTop: $('#extracurriculars').offset().top
    }, 500);
};
var scrollToBottom = function() {
	$('html, body').animate({
        scrollTop: $('.footer').offset().top
    }, 500);
}
