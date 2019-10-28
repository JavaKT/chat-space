class Group < ApplicationRecord

  has_many :users,through: :groups_users
  has_many :gropu_users
  validates :name, presence: true, uniqueness: true

end
