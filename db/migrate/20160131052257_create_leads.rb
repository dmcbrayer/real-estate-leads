class CreateLeads < ActiveRecord::Migration
  def change
    create_table :leads do |t|
      t.string :email
      t.string :address
      t.string :name
      t.string :phone
      t.integer :survey

      t.timestamps null: false
    end
  end
end
