'use strict'

/**
 * Event pages
 * 
 * @module controllers/event
 */

const Event = require('../models/event-model')

module.exports = {

  initRoutes: function (app) {
    app.get('/event/:uuid', viewEvent)
  }

}

/**
 * Browse event
 */
async function viewEvent (req, res, next) {
  let event = await Event.where('id', req.params.uuid).fetch({ withRelated: 'entries' })
  if (event !== null) {
    res.render('event', {
      event: event
    })
  } else {
    res.locals.errorMessage = 'Event not found'
    next()
  }
}
