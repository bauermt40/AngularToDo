ngTodo.controller('ngTodoCtrl', function($scope, $filter) {
    $scope.todos = [
        { val: "A new cool thing", completed: true},
        { val: "Get milk", completed: false},
        { val: "Get bread", completed: true},
        { val: "Buy a car", completed: false},
        { val: "Get cookies", completed: false},
    ];
    
    $scope.addNewTask = function() {
        $scope.todos.unshift({ completed: false, val: $filter('altCaps')($scope.newTask) });
        $scope.newTask = '';
    };
    
    $scope.clearCompleted = function() {
        $scope.todos = $scope.todos.filter(function(item, idx) {
            return !item.completed;
        });  
    };
    
    $scope.removeTodo = function(idx) {
        $scope.todos.splice(idx, 1);
    };
});