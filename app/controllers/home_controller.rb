class HomeController < ApplicationController

	def videos
		results = []
		Dir.glob("#{Rails.root}/public/json/*").each do |file|
			data = JSON.parse(File.read(file))
			data["page"]["content-items"]["content"].each do |video|
				if params["q"].present?
					if video["name"].downcase.include?(params["q"].downcase)
						results << video
					end
				else
					results << video
				end
			end
		end
		results.shift((params[:page].to_i - 1) * 20)
		render :json => { :data => results.take(20) }
	end

	def search
		results = []
		Dir.glob("#{Rails.root}/public/json/*").each do |file|
			data = JSON.parse(File.read(file))
			data["page"]["content-items"]["content"].each do |video|
				if video["name"].downcase.include?(params["q"].downcase) && !results.include?(video["name"])
					results << video["name"]
				end
				break if results.length == 7;
			end
			break if results.length == 7;
		end
		render :json => { :data => results }
	end
end
