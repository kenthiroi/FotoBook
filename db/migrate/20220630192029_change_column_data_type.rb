class ChangeColumnDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :profile_picture, 'integer USING CAST(profile_picture AS integer)'
    change_column :users, :profile_banner, 'integer USING CAST(profile_banner AS integer)'
  end
end
