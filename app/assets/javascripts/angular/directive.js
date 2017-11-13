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
		}
	}
})

dApp.directive('scrollify', function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			var visibleHeight = element.height();
			var threshold = 300;

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

dApp.directive('originalImage', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs, ngModelCtrl){
			$(element).on('load', function(event) {
				event.preventDefault();
				$(element).closest(".video").find(".loader-image").hide()
				/* Act on the event */
			});
		}
	}
})
