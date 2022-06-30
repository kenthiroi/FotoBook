class AddProfilePicAndProfileBannerColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :profile_banner_update, :boolean, :default => false
    add_column :posts, :profile_pic_update, :boolean, :default => false
  end
end