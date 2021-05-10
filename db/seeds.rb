# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trip1 = {name: 'Bach Party', location: "Chicago", description: "girls weekend trip"}
trip2 = {name: 'Camping in PA', location: 'Pocono Mountain', description: "quick weekend trip"}
trip3 = {name: 'West Coast', location: 'San Diego', description: "much needed trip"}
trip4 = {name: 'Aloha', location: 'Hawaii', description: "getaway"}
trip5 = {name: 'Red Rock Land', location: 'Sedona', description: 'day trip'}
trip6 = {name: 'Food Trip', location: 'NYC', description: 'food adventures'}

day1 = {trip_id: trip1}
day2 = {trip_id: trip1}
day3 = {trip_id: trip1}
day4 = {trip_id: trip2}
day5 = {trip_id: trip2}
day6 = {trip_id: trip3}
day7 = {trip_id: trip3}
day9 = {trip_id: trip3}
day10 = {trip_id: trip1}

activity1 = {day_id: day1, name: '', location: ''}
activity2 = {day_id: day1, name: '', location: ''}
activity3 = {day_id: day1, name: '', location: ''}
activity4 = {day_id: day2, name: '', location: ''}
activity5 = {day_id: day2, name: '', location: ''}
activity6 = {day_id: day3, name: '', location: ''}
activity7 = {day_id: day3, name: '', location: ''}
activity9 = {day_id: day3, name: '', location: ''}
activity10 = {day_id: day1, name: '', location: ''}
