/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {layout: 'main', template: 'home-template'});
};
