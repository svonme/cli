/*
 * @file main
 * @author svon.me@gmail.com
 */

import Vue from 'vue';
// import "../styles/main.scss";
import Test from './test';

function main() {
  new Vue({
    el: '#app',
    components: { Test }
  })
}

setTimeout(main);