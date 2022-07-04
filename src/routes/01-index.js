const auth = require('./auth.routes');
const dashboard = require('./dashboard.routes');
const home = require('./index.routes');

module.exports = {
    auth,
    dashboard,
    home
}