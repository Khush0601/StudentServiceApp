// creating server
const express=require('express')
const app=express()


// in memory object of students
const students={
1:{
vishwa:{
    name:"vishwa",
    age:16,
    subject:"Maths"
},
mohan:{
    name:"mohan",
    age:18,
    subject:"English"
}
},

2:{
khushboo:{
    name:"khushboo",
    age:19,
    subject:"Maths"
},
kumari:{
    name:"kumari",
    age:20,
    subject:"computer Science"
}
}

}
app.use(express.json())

// for getting all students:get request
app.get('/studentApp/api/v1/students',(req,res)=>{
    res.status(200).send(students)
})

// creating new students:post request
app.post('/studentApp/api/v1/classes/:classid/students',(req,res)=>{
    console.log(req.params)
    const className=req.params.classid
    const studentBody=req.body
    // for getting frontend data we do req.body
    console.log(req.query)
    students[className][req.body.name]=req.body

   if(req.query.class){
    res.status(200).send(students[req.query.class])
   }
   res.status(200).send(students)
})


// starting the server

app.listen(7878,()=>{
    console.log('server is connected')
})