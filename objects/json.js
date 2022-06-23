var todo={
    a:[
        {
            "userId":1,
            "name":"a"
        },
        {
            "userId":2,
            "name":"a1"
        }
    ],
    b:[
        {
            "userId":2,
           "name":"b"
        }
    ]
}
console.log(todo);

var jsonobj={
    "userId":2,
    "name":"B"
}
var student={
    name:"HI",
    city:"Hello"
}
//Serialization and deserialization
//converting object to string and vice versa
var studentstringify=JSON.stringify(student)
console.log(studentstringify,typeof(studentstringify));
console.log(JSON.parse(studentstringify))