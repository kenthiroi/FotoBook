class AddWorkAndBioColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :work, :string
    add_column :users, :intro_bio, :string
    add_column :users, :relationship, :string
  end
end
