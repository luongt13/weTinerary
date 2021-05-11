# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy
Trip.destroy

activity1 = {day_id: day1, name: 'Check-in At Hotel', location: '6350 West Mart Center Drive, Chicago, IL 60654', start: '12:00'}
activity2 = {day_id: day1, name: 'Expore the city', location: 'Chinatown', start: '14:00'}
activity3 = {day_id: day1, name: 'Dinner', location: 'Ramen at hotel', start: '17:00'}

activity4 = {day_id: day2, name: 'Breakfast', location: 'Eat in', start: '08:00'}
activity5 = {day_id: day2, name: 'Explore', location: '346 N Clark St, Chicago, IL 60654', start: '09:00'}
activity6 = {day_id: day2, name: 'Lunch', location: 'Lou Malnattis 439 N Wells St, Chicago, IL 60654', start: '12:00'}
activity7 = {day_id: day2, name: 'Magnificient Mile', location: '540 N Michigan Ave, Chicago, IL 60611', start: '15:00'}
activity8 = {day_id: day2, name: 'Dinner', location: 'Portillos Hot Dogs', start: '17:00'}

activity9 = {day_id: day3, name: 'Breakfast', location: 'Eat in', start: '08:00'}
activity10 = {day_id: day3, name: 'Explore', location: 'Millenium Park', start: '09:00'}
activity11 = {day_id: day3, name: 'Lunch', location: 'French Market', start: '12:00'}
activity12 = {day_id: day3, name: 'Check-out', location: 'Hotel', start: '15:00'}


user1 = User.create!{email: 'tester@email.com', password: '1234567'}
user2 = User.create!{email: 'anothertest@email.com', password: '1234567'}

trip1 = Trip.create!{user_id: user1, name: 'Bach Party', location: "Chicago", description: "girls weekend trip"}
trip2 = Trip.create!{user_id: user1, name: 'Camping in PA', location: 'Pocono Mountain', description: "quick weekend trip"}
trip3 = Trip.create!{user_id: user1, name: 'West Coast', location: 'San Diego', description: "much needed trip"}
trip4 = Trip.create!{user_id: user2, name: 'Weekend Getaway', location: 'Hawaii', description: "getaway"}
trip5 = Trip.create!{user_id: user2, name: 'Red Rock Land', location: 'Sedona', description: 'day trip'}
trip6 = Trip.create!{user_id: user2, name: 'Food Trip', location: 'NYC', description: 'food adventures'}

puts "#{Trip.count} trips created"

day1 = Day.create!{trip_id: trip1, trip_day: 1, activities_attributes: [activity1, activity2, activity3]}
day2 = Day.create!{trip_id: trip1, trip_day: 2, activities_attributes: [activity4, activity5, activity6, activity7, activity8]}
day3 = Day.create!{trip_id: trip1, trip_day: 3, activities_attributes: [activity9, activity10, activity11, activity12]}
day4 = Day.create!{trip_id: trip2, trip_day: 1, activities_attributes: [activity1, activity2, activity3]}
day5 = Day.create!{trip_id: trip2, trip_day: 2, activities_attributes: [activity4, activity5, activity6, activity7, activity8]}
day6 = Day.create!{trip_id: trip3, trip_day: 1, activities_attributes: [activity1, activity2, activity3]}
day7 = Day.create!{trip_id: trip3, trip_day: 2, activities_attributes: [activity4, activity5, activity6, activity7, activity8]}
day9 = Day.create!{trip_id: trip3, trip_day: 3, activities_attributes: [activity9, activity10, activity11, activity12]}
day10 = Day.create!{trip_id: trip4, trip_day: 1, activities_attributes: [activity1, activity2, activity3]}
day11 = Day.create!{trip_id: trip4, trip_day: 2, activities_attributes: [activity4, activity5, activity6, activity7, activity8]}
day12 = Day.create!{trip_id: trip4, trip_day: 3, activities_attributes: [activity9, activity10, activity11, activity12]}
day13 = Day.create!{trip_id: trip5, trip_day: 1, activities_attributes: [activity1, activity2, activity3]}
day14 = Day.create!{trip_id: trip5, trip_day: 2, activities_attributes: [activity4, activity5, activity6, activity7, activity8]}
day15 = Day.create!{trip_id: trip5, trip_day: 3, activities_attributes: []activity9, activity10, activity11, activity12}
day16 = Day.create!{trip_id: trip6, trip_day: 1, activities_attributes: [activity1, activity2, activity3]}
day17 = Day.create!{trip_id: trip6, trip_day: 2, activities_attributes: [activity4, activity5, activity6, activity7, activity8]}
day19 = Day.create!{trip_id: trip6, trip_day: 3, activities_attributes: [activity9, activity10, activity11, activity12]}

puts "#{Day.count} days created"