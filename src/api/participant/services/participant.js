'use strict';

/**
 * participant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::participant.participant');
