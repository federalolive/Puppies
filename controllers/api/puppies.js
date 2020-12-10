const puppy = require('../../models/puppy')
const Puppy = require('../../models/puppy')
module.exports = {
  index, 
  show,
  create,
  update,
  delete: deletePuppy
}
function index(req, res) {
    Puppy.find({})
    .then((puppies) => {
      res.status(200).json(puppies)
    })
  }
function show(req, res) {
  Puppy.findById(req.params.id)
  .then((Puppy) => {
  (res.status(200).json(puppy))
})
}

function create( req, res) {
    Puppy.create(req.body)
    .then((puppy)=>{
        res.status(201).json(puppy)
    })
}
function update(req, res) {
  Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((Puppy) => {
    res.status(200).json(puppy)
  })
}
  
function deletePuppy(req, res) {
  Puppy.findByIdAndDelete(req.params.id)
  .then((Puppy) => {
  (res.status(200).json(puppy))
})
}