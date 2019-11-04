$(function(){
  function buildHTML(message){
    var html =   '<div>
                    <div> ${message.user_name} </div>
                    <div> ${message.created_at} </div>
                  </div>
                  <div>
                    <p>${message.body}, ${message.image}</p>
                  </div>'

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
      var image = 
      var html = buildHTML(data);
      $(".chat__main__content").appned(html);
      $("#new_message").val("")
      $("#newmessage").prop("disabled", false);

    : var html = buildHTML(data);
      $(".chat__main__content").appned(html);
      $("#new_message").val("")
      $("#newmessage").prop("disabled", false);

    })
  })
});
