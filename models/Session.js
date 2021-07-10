const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  date: {type: Date},
  exerciseList: [ {type: Exercise} ]
});

const Session = mongoose.model('Session', SessionSchema);

module.export = Session;
