'use strict';
var path = require('path');
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/acconet');

require('./models/articles')(db);
require('./models/companies')(db);
require('./models/patents')(db);
require('./models/people')(db);

module.exports = db;