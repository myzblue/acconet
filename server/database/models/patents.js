var Sequelize = require('sequelize');

module.exports = function (db) {

    return db.define('patents', {

        category: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        comment: {
        	type: Sequelize.STRING
        }

    }, {
        instanceMethods: {
           
        },
        classMethods: {
 
        },
        hooks: {

        }
    });

};