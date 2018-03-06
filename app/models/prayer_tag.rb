class PrayerTag < ApplicationRecord
  belongs_to :prayer
  belongs_to :tag
end
