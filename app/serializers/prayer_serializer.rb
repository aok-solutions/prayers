class PrayerSerializer < ActiveModel::Serializer
  attributes :id, :title, :request, :email, :private, :tag_ids
  # has_many :tags

  def tag_ids
    object.tags.map(&:id)
  end
end
