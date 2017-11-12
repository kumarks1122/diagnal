dApp.directive('videoSearch', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs, ngModelCtrl){
			$(".search-icon, .touch-overlay").click(function(event) {
				$(".search-form-container").toggleClass('visible');
				if($(".search-form-container").hasClass('visible')){
					$(".search-form-container").find("input").focus();
				}
				$(".touch-overlay").toggle(10)
			});
			$(".close-icon").click(function(event) {
				$(".search-form-container").find("input").focus();
			});
		}
	}
})

dApp.directive('scrollify', function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			var visibleHeight = element.height();
			var threshold = 1000;

			element.scroll(function() {
				var scrollableHeight = element.prop('scrollHeight');
				var hiddenContentHeight = scrollableHeight - visibleHeight;

				if (hiddenContentHeight - element.scrollTop() <= threshold) {
					scope.$apply(attrs.scrollify);
				}
			});
		}
	};
});


// t2App.directive('timepicker', function(){
// 	return {
// 		restrict: 'A',
// 		require: 'ngModel',
// 		scope: {
// 			model: '=ngModel'
// 		},
// 		link: function(scope, element, attrs, ngModelCtrl){
// 			element.timepicker({
// 				change: function(time) {
// 					scope.$apply(function () {
// 						console.log(element.val())
// 						scope.model = element.val();
// 					})
// 				}
// 			});
// 		}
// 	}
// });

// offerPriceEditOnProcess = true
// t2App.directive('offerPriceEdit', function(){
// 	return {
// 		restrict: 'A',
// 		link: function(scope, element, attrs){
// 			if (offerPriceEditOnProcess) {
// 				$('body').click(function(event) {
// 					if($(event.target).closest('[offer-price-edit]').length==0 && $(event.target).closest('.editCurrentOffers').length==0 && $('.editCurrentOffers').hasClass('show')) {
// 						console.log('asdasd')
// 						$('.editCurrentOffers').removeClass('show')
// 						$('[offer-price-edit]').removeClass('show')
// 					}
// 				});
// 				offerPriceEditOnProcess = false
// 			}
// 			$(element).click(function(event) {
// 				if ($('.editCurrentOffers').hasClass('show')) {
// 					$('.editCurrentOffers').removeClass('show');
// 				}
// 				if($(element).hasClass('show')) {
// 					$(element).removeClass('show');
// 					$('.editCurrentOffers').removeClass('show');
// 				} else {
// 					$('[offer-price-edit]').removeClass('show')
// 					$(element).addClass('show');
// 					$('.editCurrentOffers').addClass('show');
// 				}
// 				editButtonTop = $(element).offset().top
// 				$('.editCurrentOffers').css({"top" : (editButtonTop+30)+"px"})
// 			});
// 		}
// 	}
// });

// t2App.directive('actionBtn', function(){
// 	return {
// 		restrict: 'A',
// 		link: function(scope, element, attrs){
// 			$(element).mouseenter(function() {
// 				$(this).find('.action-container').addClass('active')
// 			}).mouseleave(function() {
// 				$(this).find('.action-container').removeClass('active')
// 			});
// 		}
// 	}
// });