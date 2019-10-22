# README

# groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


# usersテーブル
|Column|Type|Options|
|------|----|-------|
|id |integer|null: false|
|name|string|null: false|
|e-mail|string|null: false|
|group_id|integer|null: true|

### Association
- has many :groups,through :groups_users

# groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|user_id|integer|null: false|
|message_id|integer|null: false|

### Associtaion
- has many :users,through :groups_users
- has many :messages

# messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false|
|group_id|integer|null: false|
|body|text|null false|
|image|string|null true|

### Association
- belongs_to :user



