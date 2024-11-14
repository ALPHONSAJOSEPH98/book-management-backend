const books = require('../Models/bookSchema')

exports.addBook= async(req,res)=>{
    console.log("inside add");
    
    const{title,author,description} = req.body

    try{
          const newBook = new books({
                title,author,description  
            })
            await newBook.save()
            res.status(200).json(newBook)
            }
    catch(error){
        res.status(400).json(error+"Server error") 
    }
}

exports.getBooks=async(req,res)=>{
    console.log("inside get books")
    try{
     const book = await books.find()
     res.status(200).json(book)
    }
    catch(error){
        res.status(500).json('server error')
      } 
}

exports.deleteBook= async(req,res)=>{
    const {id} = req.params
    console.log("inside");
    
    try{
        console.log("inside try");
        const response = await books.findByIdAndDelete({_id:id}) 
        res.status(200).json("deletd")
    }
    catch(err){
    res.status(500).json('server error')
    }
}
exports.updateBook=async(req,res)=>{
    console.log("updates");
    const{title,author,description} =req.body
    const {id} = req.params

    try{
        const updates = await books.findByIdAndUpdate({_id:id},{title:title,author:author,description:description}) 
        await updates.save()
    res.status(200).json(updates)
    }
    catch(error){
        res.status(500).json('server error')
      } 
    }

    