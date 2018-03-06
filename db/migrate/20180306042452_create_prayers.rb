class CreatePrayers < ActiveRecord::Migration[5.1]
  def change
    create_table :prayers do |t|
      t.string :title
      t.text :request
      t.string :email
      t.boolean :private

      t.timestamps
    end
  end
end
