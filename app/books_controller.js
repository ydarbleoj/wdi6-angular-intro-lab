var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  
  $scope.books = books;
	$scope.allCart = [];
 	$scope.itemCount = 0;

 	// manage cart here
 	$scope.add = function(index){
 		var addedBook = $scope.books[index];

 		if($scope.checkout.indexOf(addedBook) >= 0) {
 			$scope.checkout[$scope.checkout.indexOf(addedBook)].quantity += 1;
 		} else {
 			addedBook.quantity = 1;
 			$scope.checkout.push(addedBook);
 		}
 		$scope.itemCount++;
 	};

 	$scope.total = function() {
 		var value = 0;

 		_.each($scope.checkout, function(element, index){
 			value += element.price * element.quantity;
 		});
 		if(value === 0){
 			return;
 		} else {
 			return money.toPrecision(4);
 		}
 	};
	
 	$scope.empty = function(){
 		$scope.checkout = [];
 		$scope.itemCount = 0;
 	};

};
