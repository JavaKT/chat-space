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
       var html
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
      $(".chat__main__content").append(html);
      $("#new_message").val("");
      $(".form");
      $("#newmessage").prop("disabled", false);
      
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});
