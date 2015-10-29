class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :text
      t.boolean :isCompleted
      t.integer :project_id

      t.timestamps
    end
  end
end
