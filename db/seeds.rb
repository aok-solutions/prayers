# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
p1 = Prayer.create(title: 'Lords Prayer', request: 'Our Father who art in Heaven, hallowed by thy name', email: 'peter@rock.com', private: false)
p2 = Prayer.create(title: 'Serenity Prayer', request: 'God, grant me the serenity to accept the things I cannot change,Courage to change the things I can,And wisdom to know the difference', email: 'john@scripture.com', private: false)
p3 = Prayer.create(title: 'Sign of the Cross', request: 'In the name of the Father, and of the Son, and of the Holy Spirit.', email: 'pope@catholic.com', private: false)
p4 = Prayer.create(title: 'Apostles Creed', request: 'I believe in God, the Father Almighty, Creator of Heaven and earth', email: 'apostle@catholic.com', private: false)

t1 = Tag.create(name: 'catholic')
t2 = Tag.create(name: 'scriptural')
t3 = Tag.create(name: 'help')

t1.prayers << p3 << p4
t2.prayers << p1
t3.prayers << p2
