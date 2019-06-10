// ==UserScript==
// @name         Ptt Add Push Floor
// @namespace    https://wiki.gslin.org/wiki/Ptt_Add_Push_Floor
// @version      0.20190610.0
// @description  Add floor number to Ptt's pushes
// @author       Gea-Suan Lin <darkkiller@gmail.com>
// @match        https://www.ptt.cc/bbs/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    let n = 1;
    for (let el of document.getElementsByClassName('push')) {
        let floor = document.createElement('span');
        floor.setAttribute('style', 'color: gray; float: right;');
        floor.innerHTML = n + 'F';
        n++;
        el.appendChild(floor);
    }
})();
