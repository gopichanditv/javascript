var fruits=["orange","Apple"]
 var vegetables=["Potatao","Tomatao"]

 var mixedone=fruits.concat(vegetables)
 console.log(mixedone);
 var mixedTwo=vegetables.concat(fruits)

 console.log(mixedTwo);

 //Join to convert array into string
 console.log(vegetables.join("$"))
 //string to array
 console.log(vegetables.join("$").split("$"))
