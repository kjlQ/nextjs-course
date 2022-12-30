export default function handler(req,res) {
  console.log(req)
  if(req.method === "POST") {
    res.status(201).json({message:`${req.body.email} signed up`})
  }
}