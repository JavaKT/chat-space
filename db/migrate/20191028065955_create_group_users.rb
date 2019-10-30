class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :group, foregin_key: true, unique: true
      t.references :user, foregin_key: true, unique: true
      t.timestamps 
    end
  end
end
