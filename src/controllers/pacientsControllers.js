import pacientsServices from "../services/pacientsServices.js"

async function create(req, res, next){
  const{name, email, password, dateOfBirth} = res.locals.data
  try {
    await pacientsServices.create({name, email, password, dateOfBirth})
    res.sendStatus(201)   
  } catch (error) {
    next(error)
  }
}



export default {
  create
}