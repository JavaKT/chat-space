# README

# groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

# usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: ture|
|e-mail|string|null: false|
|password|string|null: false|


### Association
- has_many :groups,through: :groups_users
- has_many :groups_users
- has_many :messages


# groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Associtaion
- has_many :users,through: :groups_users
- has_many :groups_users
- has_many :messages

# messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false,foreign_key: true|
|group_id|references|null: false,foreign_key: true|
|body|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user



