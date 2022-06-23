// var add=function(a,b) {
//     return a+b   
// }
// add()

(function() {
    console.log("I am an immediatley invoked func");
})();

(function() {
    console.log("I am an immediatley invoked func in other way");
}());
(function(a,b){
    console.log(a+b);
}(2,3));
var m=(function(a,b){
    console.log(a+b);
}())

//undefined+undefined=NaN can be checked by isNAN