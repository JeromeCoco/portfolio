( function( $ ) {

    var app = {
		fixedHeader: {
			init: function() {
				this.scrollAppearance();
			},
			scrollAppearance: function() {
				if (jQuery(window).scrollTop() >= 100) {
					jQuery('header').addClass('scrolled');
				} else {
					jQuery('header').removeClass('scrolled');
				}
			}
		},
		aboutPopup: {
			init: function() {
				this.openPopup();
				this.closePopup();
			},
			openPopup: function() {
				$('.am-link a').click( function(e) {
					e.preventDefault();

					$('.am-popup-wrapper').addClass('open');
					$('body').addClass('hide-scroll');
				});
			},
			closePopup: function() {
				$('.am-pop-close a').click( function(e) {
					e.preventDefault();

					$('.am-popup-wrapper').removeClass('open');
					$('body').removeClass('hide-scroll');
				});
			},
		},
		jumpTrigger: {
			init: function() {
				this.jumpToAbout();
			},
			jumpToAbout: function() {
				$('.banner-link a').click( function(e) {
					e.preventDefault();

					var about_section_position = $('.am-wrapper').offset().top;

					$('html, body').animate({
						scrollTop: about_section_position
					});
				});
			}
		}
    }

    $(document).ready( function() {
		new WOW().init();
		app.fixedHeader.init();
		app.aboutPopup.init();
		app.jumpTrigger.init();
    });
    
    $(window).on('load', function() {

	});

	$(window).on('scroll', function() {
		app.fixedHeader.init();
    });
    
    $(window).on('resize', function() {
		
	});

})( jQuery );