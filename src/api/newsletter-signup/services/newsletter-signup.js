'use strict';

/**
 * newsletter-signup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsletter-signup.newsletter-signup');
