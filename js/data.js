(function(){
"use strict";

window.github = window.github || {};


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

      .done(function processData(ajaxIncomingData){
        window.github.buildList(ajaxIncomingData);
      })

      .fail(function noData(){
        console.log("Did not get data");
      });

  });

})();
