$(function(){
  function buildHTML(message){
    var img = ""
{message.image == null? img = ``: img =`<img src = ${message.image} >`};
  
    var html =  `<div class = "chat__main__content__message__name">
                  <div  class = "chat__main__content__message__name--namae"> ${message.user_name} </div>
                  <div  class = "chat__main__content__message__name--date"> ${message.created_at} </div>
                </div>
                <div class = "chat__main__content__message__body">
                  <p> ${message.body}</p>
                  ${img}
                </div>`

    return html;
  }


  $("#newmessage").click("submit",function(e){
    e.preventDefault();
    var formData = new FormData(document.getElementById("new_message"));
    var url = $(".new_message").attr("action")
 
    $.ajax({
      url: url,
      type: 'POST', 
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data)
      $(".chat__main__content__message").append(html)
      $("#new_message")[0].reset();
      $("#newmessage").prop("disabled", false);
      $(".chat__main__content").animate({scrollTop:$(".chat__main__content")[0].scrollHeight});
      
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });

    var reloadMessages = function() {
      last_name_id = $("chat__main__content__message__name").data("id")
      last_body_id = $("chat__main__content__message__body").data("id")

      $.ajax({
        url: "api/messages",
        type: "GET",
        dataType: "json",
        data: {id: last_name_id},
        data: {id: last_body_id},

      })
      .done(function(messages){
        console.log("success");
      })
      fail(function() {
        console.log("error");
      });
    };
});
