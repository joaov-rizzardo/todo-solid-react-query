import mongoose from "mongoose";

async function connect() {
  try {
    const dbURL = `mongodb://localhost:27017/todo_react_solid`;
    await mongoose.connect(dbURL);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

export default connect;
