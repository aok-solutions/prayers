class PrayerSerializer < ActiveModel::Serializer
  attributes :id, :title, :request, :email, :private
end
