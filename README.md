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

