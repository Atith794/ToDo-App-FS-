const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task:String,
    done:{                  //We are not using the code from line 5 to line 8. It is a dummy code.
        type:Boolean,
        default:false
    }
})

const TodoModel = mongoose.model('todos',TodoSchema);
module.exports = TodoModel;