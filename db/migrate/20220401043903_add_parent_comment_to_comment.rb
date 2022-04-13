class AddParentCommentToComment < ActiveRecord::Migration[5.2]
  def change
    change_table :comments do |t|
      t.change :post_id, :integer
      t.column :parent_comment_id, :integer
    end
  end
end
