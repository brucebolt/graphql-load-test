#!/usr/bin/env ruby

require "json"
require "fileutils"

data = JSON.parse(File.read("data.json"))
names = data["pages"].map{|x| x["name"]}
vuss = data["vus"]
scenarios = []

names.each do |name|
  vuss.each do |vus|
    scenarios << "#{name}_#{vus}"
    scenarios << "#{name}_#{vus}_graphql"
  end
end

FileUtils.mkdir_p("summaries")

scenarios.first(2).each do |scenario|
  puts "\n#{Time.now} Starting scenario: #{scenario}"
  `SCENARIO=#{scenario} k6 run k6.js --summary-export summaries/#{scenario}_summary.json`
  puts "#{Time.now} Finished scenario: #{scenario}"
end
