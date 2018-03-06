class PrayerSerializer < ActiveModel::Serializer
  attributes :id, :title, :request, :email, :private
  has_many :tags
end
