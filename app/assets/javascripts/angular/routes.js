dApp.factory('routes', ["$resource",
	function($resource) {
		var rule = $resource('/', {
			id: '@id'
		}, {
			videos: {
				url: '/videos',
				method: 'GET'
			},
			search: {
				url: '/search',
				method: 'GET'
			}
		});
		return rule;
	}
])