'use strict'

/**
 * Models listing
 *
 * @module models
 */

module.exports = {

  version: 1, // NB. No need to increment DB versioning until we're going live

  /*
   * List models in table creation order
   */
  modelFilenamesUp: function () {
    return [
      'setting-model',
      'event-model',
      'entry-model',
      'user-model',
      'user-role-model',
      'post-model'
    ]
  }

}