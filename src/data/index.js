const {merge} = require('ramda');
const actions = require('./actions');
const statuses = require('./statuses');

const data = merge(actions, statuses);

module.exports = data;
