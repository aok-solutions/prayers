class Prayer < ApplicationRecord
  has_many :prayer_tags
  has_many :tags, through: :prayer_tags
end
