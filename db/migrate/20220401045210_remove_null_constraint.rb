class RemoveNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :comments, :post_id, true
  end
end
