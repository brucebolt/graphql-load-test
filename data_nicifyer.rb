require "json"
require "csv"

data = JSON.parse(File.read("data.json"))
page_names = data["pages"].map{|x| x["name"]}
vuss = data["vus"]



TITLE_PLACE_MASHUP_HASH = {
  "request_count" =>  ["metrics", "http_reqs", "count"],
  "request_duration_avg" => ["metrics", "http_req_duration", "avg"],
  "request_duration_p90" => ["metrics", "http_req_duration", "p(90)"],
  "request_duration_p95" => ["metrics", "http_req_duration", "p(95)"],
  "failed_request_count" => ["metrics", "http_req_failed", "passes"], #this is correct because k6 loves the weird double negative of a failure pass
}

def row_data(page_name, vus, graphql: false)
  filename = if graphql
               "summaries/#{page_name}_#{vus}_graphql_summary.json"
             else
               "summaries/#{page_name}_#{vus}_summary.json"
             end

  summary_data = JSON.parse(File.read(filename))

  [page_name, vus, graphql] +
    TITLE_PLACE_MASHUP_HASH.map { |_, dig_path| summary_data.dig(*dig_path) }
end

CSV.open("summaries/data_amalgam.csv", "w") do |csv|
  csv << ["page_name", "vus", "graphql?"] + TITLE_PLACE_MASHUP_HASH.keys
  page_names.each do |page_name|
    vuss.each do |vus|
      csv << row_data(page_name, vus)
      csv << row_data(page_name, vus, graphql: true)
    end
  end
end
