class Tag < ApplicationRecord
  has_many :prayer_tags
  has_many :prayers, through: :prayer_tags
end
