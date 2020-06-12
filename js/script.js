let programmes = [
	{name: "Summer exchange", 
	duration: "1 - 3 months", 
	time: "November", 
	study: "Short course", 
	requirements: "Undergraduate", 
	countries: "USA, Canada, France, Italy", 
	description:"Looking for an overseas experience that fits during semester break? This is the perfect opportunity for you. With time and location flexibility, this exchange is fully customisable to individuals needs and preferences.... Students in this programme will get a taste of the different school environment and life style overseas while studying at one of our partnered universities. Short term accomodation may be available at universities or can be arranged through Think Global. It is possible to gain credit for some courses towardsyour current university programme. You will need to discuss this with your faculty and the university you choose. Scholarships are not available for short term courses directly with Think Global however some universities and countries offer scholarships which our advisors can help you find. ", 
	review: "Going to Canada has always been my dream and being able to actually experience the wonderful culture and education system was life changing. The programme was really flexible and allowed me to pick courses and activities that I was interested in. The university was very different from my own and through this I was able to develop my work ethic. Aside from education, there was a few activities and events that Think Global had organised for me to attend which was really eye opening as the culture and food was so different.", 
	images: "research.jpg", 
	reviewImage: ""},
	
	{name: "Semester exchange", 
	duration: "6 months", 
	time: "March or July", 
	study: "Full semester", 
	requirements: "Second year undergraduate and up", 
	countries: "USA, Canada, France, South Korea, United Kingdom, Japan", 
	description:"Immerse yourself in a whole new country, environment and education. Students in this programme will be able arranged to live with a local host family to develop respect, understanding and appreciation of their culture, beliefs and way of life.... Students who attend this program will make life-long friends and learn about societies with a different culture, political and economic system. It is possible to gain credit for some courses towards your current university programme. You will need to discuss this with your university faculty as well as the university you choose. Monthly activities and events are organised by partners to ensure students are able to experience a balanced mix of education and culture.", 
	review: "This programme was absolutely life changing for me. I have made wonderful connections with peers and my host family that will last for a life time. The university was very different from my own and through this I was able to develop my work ethic. My host family also regularly took me sightseeing and to local markets during the weekends where I was really able to explore the culture and food.", 
	images: "building2.jpg", 
	reviewImage: ""},
	
	{name: "Internship", 
	duration: "2 months", 
	time: "December or July", 
	study: "No study", 
	requirements:"Last year of undergraduate", 
	countries:"Canada, France, Germany, Japan", 
	description:"In your last year of undergrad and want work experience? This is the perfect programme for you. Many different internships are available during the semester break from engineering, accounting, law to med. Experience a different lifestyle while working towards your future career.... We will work with you to ensure you are placed into an environment suitable to your needs and interests. Build connections and meet new friends. The world is your oyster. Scholarships are available to cover living costs and accomodation. Things to consider are visas, travel and language which we can help you sort out once you have applied. ", 
	review: "This internship is why I got my dream job. I was struggling with what to do after completing my degree. However, Think Global was able to connect me to an amazing internship at one of the leading accounting firms over the summer break. I was able to put all the theory I had learnt into action while completing real-life tasks alongside senior employees. I was able to develop life long skills to benefit my career while also exploring a new country and all the culture and diversity.", 
	images: "engineer.jpg", 
	reviewImage: "" },
	
	{name: "Postgraduate", 
	duration: "1 - 6 months", 
	time: "Various", 
	study: "Short to full courses", 
	requirements:"Postgraduate", 
	countries:"Canada, France, United Kingdom, USA", 
	description:"Immerse yourself in a whole new country, environment and education. Students in this programme will need to have finished undergraduate in order to apply. We understand that it may be difficult to find the right time and course.... Therefore, we have developed a very flexible and customisable programme to fit students needs. This programme has various durations and times vary depending on the country chosen. Short term research courses are available over semester breaks as well as full semester courses at various universities around the world. Students who attend this program will make life-long friends and learn about societies with a different culture, political and economic system. It is possible to gain credit for some courses towards your current university programme. You will need to discuss this with your university faculty as well as the university you choose.", 
	review: "I highly recommend taking the opportunity to go overseas during your postgraduate degree. It has really helped open my eyes to the large diversity in the world and how wonderful other cultures are. I loved having the flexibility to customise an option which fits well into my degree. The research centres at the Australia National University were amazing and has influenced me to continue researching in my current field of study.", 
	images: "postgrad.jpg", 
	reviewImage:"" },
	
	{name: "Volunteer", 
	duration: "4 weeks", 
	time: "December", 
	study: "No study", 
	requirements:"Undergraduate", 
	countries:"Thailand, Myanmar, South America, Africa", 
	description:"Volunteering overseas gives the unique opportunity to experience local cultures first hand while making a difference to the world. Think Global has a large variety of volunteering options from teaching English, humantarian projects, animal rehabilitation and vetted organisations.... See the real world from a different prespective, make new friends, learn new skills and embark on a journey of cultural and self discovery. Most volunteer options cover food and accomodation. You will also have time off each week to explore the world for yourself. ", 
	review: "Volunteering was something that has been on my bucket list for a long time and was definitely worth doing. I got to meet amazing people and experience their culture, food and way of life. It really opened my eyes to how diverse people are. I especially enjoyed being able to care and feed the elephants every morning. This has been a life changing experience and has helped me develop myself.", 
	images: "volunteer.jpg", 
	reviewImage: ""} 
];

function displaySummary(programmes) {    /*to display the summary section */ 
	let summaryList = $("#summary");
	summaryList.empty(); 
	summaryList.append($("<table>"));   /*table used to organise programmes */
  
	
	for (let i = 0; i < programmes.length; i ++) { /*to separate programmes into 2 row */ 
		
	  	if(i == 0) {
				summaryList.append($("<tr>"));
			}
    
		let summaryHTML = $("<td>");
		
		let image = $("<img src = 'images/" + programmes[i].images + "'>");
		summaryHTML.append(image);
		
		let name = $("<h3>" + programmes[i].name + "</h3>"); 
		summaryHTML.append(name); 
		
		let duration = $("<p> Duration: " + programmes[i].duration + "</p>");
		summaryHTML.append(duration);
		
		let study = $("<p> Study: " + programmes[i].study + "</p>");
		summaryHTML.append(study);
		
		let requirement =  $("<p> Requirements: " + programmes[i].requirements + "</p>");
		summaryHTML.append(requirement);
    
		if(i == 3) {
		    summaryList.append($("<tr>"));
		} 
		
		summaryList.append(summaryHTML);
	}
	
	summaryList.append($("</table>"));
}

function displayProgrammes(programmes) {
	let programmeList = $("#programmes");
	programmeList.empty(); 
	
	for (let i = 0; i < programmes.length; i ++) {
		let programmeHTML = $("<article>"); 
		
		let name = $("<h3>" + programmes[i].name + "</h3>"); 
		programmeHTML.append(name); 
		
		let duration = $("<p> Duration: " + programmes[i].duration + "</p>");
		programmeHTML.append(duration);
		
		let time = $("<p> Time: " + programmes[i].time + "</p>");
		programmeHTML.append(time);
		
		let study = $("<p> Study: " + programmes[i].study + "</p>");
		programmeHTML.append(study);
		
		let requirements = $("<p> Requirements: " + programmes[i].requirements + "</p>");
		programmeHTML.append(requirements);
		
		let countries = $("<p> Countries: " + programmes[i].countries + "</p>");
		programmeHTML.append(countries);
		
		programmeHTML.append($("<p>"));
		
		let description = programmes[i].description.split("...")[0];
		programmeHTML.append(description);
		
		let dots = $("<span id = 'dots'> ... </span>");
		programmeHTML.append(dots);
	
		let moreDescription = $('<span  id="show_more' + i + '" class = "hidden">' + programmes[i].description.split("...")[1] + "</span> </p>");
		programmeHTML.append(moreDescription);
		
		let readMore = $('<p id = "more' + i + '" class="more">read more</p>');
		programmeHTML.append(readMore);
		
		programmeHTML.append($("</article>"));
		
		programmeList.append(programmeHTML);
		
		let programmeReview = $("<aside>");

		let review = $("<p> Review: " + programmes[i].review + "</p>");
		programmeReview.append(review);
		programmeReview.append($("</aside>"));
		programmeList.append(programmeReview);
		
		$(".more").on("click", displayMore);
	}
} 

function displayMore() {
	let moreItem = $(this);
	let textElement = moreItem.attr('id');
	let showMoreID = "show_" + textElement; 
	$('#' + showMoreID).show(); 
	
	/* $('#' + textElement).text("Show less"); */
	
	if ($('#' + textElement).text() == "show less") {
		$('#' + textElement).text("Read more");
		$('#' + showMoreID).hide(); 
	} else {
		$('#' + textElement).text("show less");
		$('#' + showMoreID).show(); 
	}
	
	/*
	if($('#' + textElement).text() == "Show less") {
		$('#' + textElement).text("Read more");
		$('#' + showMoreID).hide(); 
		
	} else {
		$('#' + textElement).text("Show less");
		$('#' + showMoreID).show(); 
	} */
		
	/*let dots = $('#dots');
	
	if($('#' + textElement).text() == "Show less") {
		$('#' + textElement).text("Read more");
		dots.show();
		$('#' + showMoreID).hide(); 
		
	} else {
		$('#' + textElement).text("Show less");
		dots.hide();
		$('#' + showMoreID).show(); 
	} */
}

$(document).ready(function(){
   displaySummary(programmes);
   displayProgrammes(programmes);
   $("#searchText").on("keyup", search);
   
});

function search() {
	let query = $("#searchText").val(); 
	query = query.toLowerCase().trim();
	
	let matches = []; 
	for(let programme of programmes) {
		let programmeTitle = programme.name;
		programmeTitle = programmeTitle.toLowerCase(); 
		if(programmeTitle.includes(query)) {
			matches.push(programme);
		}
	}
	
	displayProgrammes(matches);
}



