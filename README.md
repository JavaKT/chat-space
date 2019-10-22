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
|name|string|null: false|
|e-mail|string|null: false|
|password|string|null: false|
|group_id|integer|null: true, foreign_key: true|　←これは削除

### Association
- has_many :groups,through: :groups_users

# groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|null: false,foreign_key: true|
|message_id|integer|null: false,foreign_key: true|

### Associtaion
- has_many :users,through: :groups_users
- has_many :messages

# messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|
|body|text|null: false|
|image|string|null: true|

### Association
- belongs_to :group



