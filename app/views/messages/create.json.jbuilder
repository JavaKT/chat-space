json.body      @message.body
json.image       @message.image.url
json.created_at   @message.created_at
json.updated_at   @message.updated_at
json.id           @message.user.id
json.user_name      @message.user.name

