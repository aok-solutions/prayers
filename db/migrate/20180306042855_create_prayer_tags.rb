class CreatePrayerTags < ActiveRecord::Migration[5.1]
  def change
    create_table :prayer_tags do |t|
      t.references :prayer, index: true
      t.references :tag, index: true
      t.timestamps
    end
  end
end
