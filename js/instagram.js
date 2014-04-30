// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=1af56aaa01ef4001bc99e812d2b083b4&redirect_uri=http://www.unc.edu/~ablaine/api&response_type=token 

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id
	
						
$(function() {
	
	var apiurl = "https://api.instagram.com/v1/tags/freesyria/media/recent?access_token=351869367.1af56aa.ad73068511694b41a4c334bf6a8d8db3&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""
	
		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});
				
		
		function parseData(json){
			console.log(json);
			
			$.each(json.data,function(i,data){
				
				html += '<p>Filter:"'+ data.filter +'"</p>';
				html += '<img src ="' + data.images.low_resolution.url + '">'
			});
			
			console.log(html);
			$("#results").append(html);
			
		}
		
		
                
               
 });
		
		
