require "json"
require "csv"

data = JSON.parse(File.read("data.json"))
names = data["pages"].map{|x| x["name"]}
vuss = data["vus"]



title_place_mashup_hash = {
  "request_count" =>  ["metrics", "http_reqs", "count"],
  "request_duration_avg" => ["metrics", "http_req_duration", "avg"],
  "request_duration_p90" => ["metrics", "http_req_duration", "p(90)"],
  "request_duration_p95" => ["metrics", "http_req_duration", "p(95)"],
  "failed_request_count" => ["metrics", "http_req_failed", "passes"], #this is correct because k6 loves the weird double negative of a failure pass
}

CSV.open("summaries/data_amalgam.csv", "w") do |csv|
  csv << ["page_name", "vus", "graphql?"] + title_place_mashup_hash.keys
  names.each do |name|
    vuss.each do |vus|
      
      scenarios << "#{name}_#{vus}"
      scenarios << "#{name}_#{vus}_graphql"
    end
  end
end
