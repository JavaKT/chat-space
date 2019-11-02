FactoryBot.define do
  factory :message do

    body {Faker::Lorem.sentence}
    image  {(File.open("#{Rails.root}/spec/fixtures/image.jpg"))}
    user  
    group
  end
end
