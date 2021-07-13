const mongoose = require('mongoose');
const Exercise = require('./Exercise.js');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  date: {type: Date},
  exerciseList: [{
      exercise:{type: Exercise},
      set: {type: Number},
      completed: {type: Number},
      duration: {type: Number},
      notes: {type: String}
    }]
});

const Session = mongoose.model('Session', SessionSchema);

module.export = Session;
