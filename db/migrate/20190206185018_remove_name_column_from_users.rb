class RemoveNameColumnFromUsers < ActiveRecord::Migration[5.2]
  def up
    remove_column :users, :name, :string
  end
  def down
    add_column :users, :name, :string
  end
  def up
    remove_column :users, :name, :string
  end
end
