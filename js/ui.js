(function(){
"use strict";

window.github = window.github || {};

window.github.storage = [];



$("button")
  .on("click", function getData(){
    var token = $("input").val();
    $.ajax({
      url:"https://api.github.com/users/jisaacks/orgs",
      method: "GET",
      dataType: "json",
      headers: {
      Authorization: "token " + token
      }

    })
    .done(function processData(incomingData){
    console.log("Received data from git", incomingData);
    })

    .fail(function noData(){
    console.log("Did not get data");
  });

    // storage.push[incomingData];

});


})();
