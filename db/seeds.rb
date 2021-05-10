# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trip1 = Trip.create!{name: 'Bach Party', location: "Chicago", description: "girls weekend trip"}
trip2 = Trip.create!{name: 'Camping in PA', location: 'Pocono Mountain', description: "quick weekend trip"}
trip3 = Trip.create!{name: 'West Coast', location: 'San Diego', description: "much needed trip"}
trip4 = Trip.create!{name: 'Aloha', location: 'Hawaii', description: "getaway"}
trip5 = Trip.create!{name: 'Red Rock Land', location: 'Sedona', description: 'day trip'}
trip6 = Trip.create!{name: 'Food Trip', location: 'NYC', description: 'food adventures'}

day1 = Day.create!{trip_id: trip1, trip_day: 1, activities_attributes: []}
day2 = Day.create!{trip_id: trip1, trip_day: 2, activities_attributes: []}
day3 = Day.create!{trip_id: trip1, trip_day: 3, activities_attributes: []}
day4 = Day.create!{trip_id: trip2, trip_day: 1, activities_attributes: []}
day5 = Day.create!{trip_id: trip2, trip_day: 2, activities_attributes: []}
day6 = Day.create!{trip_id: trip3, trip_day: 1, activities_attributes: []}
day7 = Day.create!{trip_id: trip3, trip_day: 2, activities_attributes: []}
day9 = Day.create!{trip_id: trip3, trip_day: 3, activities_attributes: []}
day10 = Day.create!{trip_id: trip4, trip_day: 1, activities_attributes: []}
day11 = Day.create!{trip_id: trip4, trip_day: 2, activities_attributes: []}
day12 = Day.create!{trip_id: trip4, trip_day: 3, activities_attributes: []}
day13 = Day.create!{trip_id: trip5, trip_day: 1, activities_attributes: []}
day14 = Day.create!{trip_id: trip5, trip_day: 2, activities_attributes: []}
day15 = Day.create!{trip_id: trip5, trip_day: 3, activities_attributes: []}
day16 = Day.create!{trip_id: trip6, trip_day: 1, activities_attributes: []}
day17 = Day.create!{trip_id: trip6, trip_day: 2, activities_attributes: []}
day19 = Day.create!{trip_id: trip6, trip_day: 3, activities_attributes: []}
day20 = Day.create!{trip_id: trip6, trip_day: 4, activities_attributes: []}

activity1 = {day_id: day1, name: 'Breakfast', location: '62 Vale Dr. Washington, PA 15301', start: '9:00'}
activity2 = {day_id: day1, name: 'Expore the city', location: '9 Brickell Street, Reston, VA 20191', start: '11:00'}
activity3 = {day_id: day1, name: 'Lunch', location: '58 Lake St. Athens, GA 30605', start: '12:00'}
activity4 = {day_id: day2, name: 'Wander the park', location: '7528 Richardson Drive, Marquette, MI 49855', start: '15:00'}
activity5 = {day_id: day2, name: 'Check out the art museum', location: '513 Race Street, Grand Blanc, MI 48439', start: '16:00'}
activity6 = {day_id: day3, name: '', location: '317 Greystone Drive, Mechanicsville, VA 2311', start: '18:00'}
activity7 = {day_id: day3, name: '', location: '510 Wintergreen Street, Glendale, AZ 85302', start: '20:00'}
