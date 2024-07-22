
<template>
  <div id="index">
    <div class="content">
      <div class="box">
        <div class="text" >
          <p>{{content}}</p>
          <p>--{{author}}</p>
        </div>
        <div class="button">
          <div class="left">
            <mt-button type="primary" icon="back" class="change"></mt-button>
            <mt-button type="primary" icon="more" class="change"></mt-button>
          </div>
          <div class="right">
            <mt-button type="primary" @click="update" id="newQu" class="change">new quote</mt-button>
          </div>
          
        </div>
      </div>
      <div class="author">by Sarah</div>
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui';

import api from './../axios/api.js'

export default {
  data () {
    return {
      content:'府之型头变天走先。',
      author:'阎洋',
      index:0,
      quotesList:[]
    }
  },
  created () {
    this.getDatas()
  },
  methods: {
    getDatas: function() {
      api.newQuotes('/quotes/index', 'type=top&key=123456')
        .then(res => {
          console.log(res)
          this.quotesList = res.quotes
        })
    },
    update: function() {
      if(this.index==100){
        this.index=0
      }
      this.content= this.quotesList[this.index].content
      this.author=this.quotesList[this.index].author
      this.index++

      var color=this.quotesList[this.index].color
      console.log(color)

      var change=document.getElementsByClassName("change")
      for (let i = 0; i < change.length; i++) {
        change[i].style.backgroundColor=color
      }

      var pChange=document.getElementsByTagName("p")
      for (let i = 0; i < pChange.length; i++) {
        pChange[i].style.color=color
      }

      document.body.style.backgroundColor=color
    }
  }
  
}
</script>

<style lang="less">
@color-primary: #79c3f2;
.mint-button--primary {
    background-color: @color-primary;
}
body{
  background-color: #79c3f2;
}
#index{
  .content {
    width: 600px;
    height: auto;
    margin: 60px auto;
    box-sizing: border-box;

    .box {
      width: 600px;
      height: 300px;
      background-color: #fff;
      padding: 40px;
      
      .text {
        width: 100%;
        height: 200px;
        padding-bottom: 20px;

        p:first-child {
          font-size: 30px;
          color: #79c3f2;
        }
        p:last-child {
          font-size: 24px;
          color: #79c3f2;
          text-align: right;
        }
      }

      .button {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;

        .left {
          width: auto;
          height: auto;
        }
        .right {
          width: auto;
          height: auto;
        }
      }
    }

    .author {
      padding-top: 20px;
      color: #fff;
    }
  }
}
</style>
