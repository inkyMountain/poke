'use strict';
/* eslint-disable */
const Controller = require('egg').Controller;

let joinUsers = [];

let userCards = {
  public: []
};

let userIdIncrement = 0;

// 跟牌的用户人数
let optUsersNum = 0; 

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

  async isFollowCard (uid) {
    const { ctx } = this;
    if (isOpt) { // 跟牌
      optUsersNum ++;
      if (optUsersNum == joinUsers.length) {
        this.pushCard(); // 发牌
      }
      
    } else { // 不跟牌
      const deleteIndex = joinUsers.findIndex(item => {
        return item === uid
      })
  
      // 删除不跟牌的用户
      joinUsers.splice(deleteIndex, 1);
      ctx.body = {
        curUserList: joinUsers
      };
    }
  }
}

module.exports = HomeController;