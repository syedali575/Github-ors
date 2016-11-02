(function() {

"use strict";


window.github = window.github || {};

window.github.buildList = function buildList(data) {

    $.each(data, function loopArray(i){
        $(".list").append('<li><img src="'+data[i].avatar_url+'"></img><p>' + data[i].login + '</p></li>');
    });

};


})();
