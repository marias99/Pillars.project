const router = require('express').Router();
const {
  models: { User },
} = require('../db');

router.get("/", (req, res) => {
  res.send('User List')

})

router.get("/new", (req, res) => {
  res.render("users/new")
})

router.post("/", (req, res) => {
  res.send('Create User')
})


router
.route("/:id")
.get((req, res) => {
  res.send(`Get User with ID ${req.params.id}`)
})
.put((req, res) => {
  res.send(`Update User With ID ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Update User With ID ${req.params.id}`)
})



const users = [{name: "Kyle"}, {name: "Sally"}]
router.param("id", (req, res, next, id) => { // param midower?
  req.user = users[id]
  next()// code above is now going to run the commented out chunck
})


/**
 * All of the routes in this are mounted on /api/users
 * For instance:
 *
 * router.get('/hello', () => {...})
 *
 * would be accessible on the browser at http://localhost:3000/api/users/hello
 *
 * These route tests depend on the User Sequelize Model tests. However, it is
 * possible to pass the bulk of these tests after having properly configured
 * the User model's name and userType fields.
 */

// Add your routes here:

module.exports = router;
