// ==UserScript==
// @name         Happy
// @author       Rickard
// @match        http://www.happypancake.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    function hideIt(){
        $('div #header').siblings(0).height(0);
    }

    $(window).load(function(){ 
        hideIt();
    });

})();