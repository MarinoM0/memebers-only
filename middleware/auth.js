function ensureAuthenticated(req,res,next) {
    if (req.isAuthenticated && req.isAuthenticated()) return next();
    return res.redirect('/login');
}

function ensureAdmin(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated() && req.user?.is_admin) return next();
  return res.status(403).send('Forbidden');
}

module.exports = {ensureAuthenticated, ensureAdmin};