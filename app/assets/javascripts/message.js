$(function(){
  function buildHTML(message){

    var html =  `<div>
                  <div> ${message.user_name} </div><div> ${message.created_at} </div>
                </div>
                <div>
                  <p> ${message.body}</p>
                  <img src = ${message.image}>
                </div>`
  

     if (message.image){
       image = `<img src = ${message.image}>`
     }else{
       image = "画像はありません"
     }

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
      $(".chat__main__content").append(html).trigger("create")
      $("#new_message").val("");
      $("#new_message").replaceWith($("#new_message").clone(true));
      $("#newmessage").prop("disabled", false);
      $(".chat__main__content").animate({scrollTop:$(".chat__main__content")[0].scrollHeight});
      
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});

