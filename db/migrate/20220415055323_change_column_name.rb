class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :friends, :friend_1, :user_id
    rename_column :friends, :friend_2, :friend_id
  end
end
