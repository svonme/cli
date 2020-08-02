/*
 * @file main
 * @author svon.me@gmail.com
 */

import Vue from 'vue';
import "../styles/main.scss";


function main() {
  new Vue({
    el: '#app',
    components: { 
      Test: () => import('./test')
    }
  })
}

setTimeout(main);