'use strict';
/* eslint-disable */
const Controller = require('egg').Controller;

let joinUsers = [];

let userCards = {
  public: []
};

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async startGame() {
    const { ctx } = this;
    const userId = ctx.query.userId;
    if (joinUsers.length < 5) {
      userCards[userId] = [];
      if (!joinUsers.includes(userId)) {
        joinUsers.push(userId);
      }
    }
    ctx.body = {
      userId,
      hasStart: joinUsers.length >= 5,
      curUserList: joinUsers,
      publicCards: [],
      priList: []
    };
  }

  async isOpt() {
    const { ctx } = this;
  }

  async resetUsers() {
    joinUsers = [];
    userCards = {
      public: []
    };
  }
}

module.exports = HomeController;
