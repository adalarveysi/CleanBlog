const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog)
})

const port = 3001;
app.listen(port , ()=>{
    console.log(`Server ${port} üzerinden çalışıyor.`)
})