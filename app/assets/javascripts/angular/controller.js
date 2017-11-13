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
      } else {
        $scope.searchResults = [];
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
        var params = {page: $scope.page};
        if ($scope.searchText != "") {
          params.q = $scope.searchText
        }
        routes.videos(params, function(response) {
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

    $scope.applySearch = function (searchText) {
      $scope.page = 0;
      $scope.isVideoAvailable = true;
      $scope.videosData = [];
      $scope.searchText = searchText;
      $(".search-form-container").toggleClass('visible');
      $(".touch-overlay").toggle(10);
      $scope.loadVideos();
    }

    $scope.resetForm = function() {
      $scope.searchText = "";
      $scope.searchResults = [];
      $(".search-form-container").find("input").focus();
      $scope.page = 0;
      $scope.isVideoAvailable = true;
      $scope.videosData = [];
      $scope.loadVideos();
    }
  }
])