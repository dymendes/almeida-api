import mongosse from "mongoose"

const newsletters = new mongosse.Schema({
  email: String
})

export default newsletters