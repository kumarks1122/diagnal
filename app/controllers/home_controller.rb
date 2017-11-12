class HomeController < ApplicationController

	def videos
		file = File.read("#{Rails.root}/public/json/CONTENTLISTINGPAGE-PAGE#{params[:page]}.json") rescue nil
		render :json => { :data => file.nil? ? [] : JSON.parse(file)["page"]["content-items"]["content"] }
	end

	def search
		results = []
		Dir.glob("#{Rails.root}/public/json/*").each do |file|
			data = JSON.parse(File.read(file))
			data["page"]["content-items"]["content"].each do |video|
				if video["name"].downcase.include?(params["q"].downcase)
					results << video["name"]
				end
				break if results.length == 7;
			end
			break if results.length == 7;
		end
		render :json => { :data => results }
	end
end
