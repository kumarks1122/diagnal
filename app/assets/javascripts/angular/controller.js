dApp.controller("controller", ["$scope", "routes", '$sce',
  function($scope, routes, $sce) {
    $scope.searchText = "";
    $scope.searchResults = [];
    $scope.isVideoAvailable = true;
    $scope.page = 0;
    $scope.videosData = [];

    $scope.searchVideos = function(searchText) {
      if (searchText.length>2) {
        routes.search({q: searchText}, function(response) {
          $scope.searchResults = response.data
        }, function(error) {
          console.log("error")
        })
      }
    }

    $scope.highlight = function(text, search) {
      if (!search) {
        return $sce.trustAsHtml(text);
      }
      return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<b>$&</b>'));
    };

    $scope.loadVideos = function() {
      if ($scope.isVideoAvailable) {
        $scope.page += 1;
        routes.videos({page: $scope.page}, function(response) {
        	$scope.videosData = $scope.videosData.concat(response.data);
          if (response.data.length == 0) {
            $scope.isVideoAvailable = false;
          }
        }, function(error) {
          console.log("error")
        })
      }
    }
    $scope.loadVideos()

    $scope.resetForm = function() {
      $scope.searchText = "";
      $scope.searchResults = [];
      $(".search-form-container").find("input").focus();
    }
  }
])