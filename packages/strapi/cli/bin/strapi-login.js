#!/usr/bin/env node

'use strict';

/**
 * Module dependencies
 */

// Processes.
const loginProcess = require('../process/login');

/**
 * `$ strapi login`
 *
 * Sigin in to Strapi online services
 */

module.exports = async () => {
  await loginProcess();

  process.exit(1);
};