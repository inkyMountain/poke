'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/startGame', controller.home.startGame);
  router.get('/isOpt', controller.home.isOpt);
  router.get('/resetUsers', controller.home.resetUsers);
  router.get('/isFollowCard', controller.home.isFollowCard);
};
