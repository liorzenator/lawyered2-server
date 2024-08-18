const dbConnection = require('./src/boot/startDatabase');
const app = require('./src/http-server/main');
const sequelize = require('./src/boot/sequelize');

// dbConnection().then(sequelize()).then(app);

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to create the database:', err);
    });
    
sequelize().then(app); 
