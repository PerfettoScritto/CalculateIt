$(document).ready(function(){$("<link/>").appendTo("head").attr({href:"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700&subset=latin,latin-ext",rel:"stylesheet"}),$.get(chrome.extension.getURL("/calculator.html"),function(e){$(e).appendTo("body")}),$.get(chrome.extension.getURL("/calculate.js"),function(e){$("<script></script>").appendTo("body").attr("src",chrome.extension.getURL("/calculate.js"))});var e={67:!1,73:!1};$(document).keydown(function(t){t.keyCode in e&&(e[t.keyCode]=!0,e[67]&&e[73]&&$("#wrap").slideToggle(100,"linear"))}).keyup(function(t){t.keyCode in e&&(e[t.keyCode]=!1)})});