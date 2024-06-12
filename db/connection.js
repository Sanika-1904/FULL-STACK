const M=require('mongoose')
M.connect('mongodb+srv://sanikanikam219:s6slCdKLtl7eoSvV@cluster0.yr116mw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then( ()=>{
    console.log("server is connected to database")
})
.catch( ()=>{
    console.log("database is not connected")
})
