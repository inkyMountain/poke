'use strict';
/* eslint-disable */
const Controller = require('egg').Controller;

let joinUsers = [];

let userCards = {
  public: []
};

let userIdIncrement = 0;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async startGame() {
    const { ctx } = this;
    if (joinUsers.length >= 5) {
      ctx.body = {
        hasStart: true
      };
      return;
    }
    const userId = ctx.query.userId || ++userIdIncrement;
    userCards[userId] = [];
    if (!joinUsers.includes(userId)) {
      joinUsers.push(userId);
    }
    ctx.body = {
      userId,
      hasStart: joinUsers.length >= 5,
      curUserList: joinUsers,
      publicCards: [],
      priList: [],
      isNeed
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
    userIdIncrement = 0;
  }
}

module.exports = HomeController;
