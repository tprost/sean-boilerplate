var user = require('../controllers/user.controller.js');
var authentication = require('../controllers/authentication.controller.js');

module.exports = function(app) {
  app.post('/api/signup', authentication.signupWithUsernameAndPassword);

  app.post('/api/login', authentication.login);

  app.get('/api/logout', authentication.logout);

  app.get('/api/me', user.currentUser);

  app.route('/api/me/profile')
    .put(authentication.ensureAuthenticated, user.updateUser)
    .delete(authentication.ensureAuthenticated, user.deleteAccount);

  app.route('/api/me/password')
    .put(authentication.ensureAuthenticated, user.updatePassword);
};
