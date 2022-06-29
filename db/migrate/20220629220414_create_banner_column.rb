class CreateBannerColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_banner, :string
  end
end