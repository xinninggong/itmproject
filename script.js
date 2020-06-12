const programmes = [
	{name: "Summer exchange", 
	duration: "1 - 3 months", 
	time: "November", 
	study: "Short university course", 
	requirements: "Undergraduate", 
	countries: "USA, Canada, France, Italy", 
	description:"Looking for an overseas experience that fits during semester break? This is the perfect opportunity for you. With time and location flexibility, this exchange is fully customisable to individuals. Students in this programme will get a taste of the different school environment and life style overseas while studying at one of our partnered universities. It is possible to gain credit for some courses towardsyour current university programme. You will need to discuss this with your faculty and the university you choose.  ", 
	review: "", 
	images: "research.jpg", 
	reviewImage: ""},
	
	{name: "Semester exchange", 
	duration: "6 months", 
	time: "March or July", 
	study: "Full semester course", 
	requirements: "Second year undergraduate and up", 
	countries: "USA, Canada, France, South Korea, United Kingdom, Japan", 
	description:"Immerse yourself in a whole new country, environment and education. Students in this programme will be able arranged to live with a local host family to develop respect, understanding and appreciation of their culture, beliefs and way of life. Students who attend this program will make life-long friends and learn about societies with a different culture, political and economic system. It is possible to gain credit for some courses towards your current university programme. You will need to discuss this with your university faculty as well as the university you choose. Monthly activities and events are organised by partners to ensure students are able to experience a balanced mix of education and culture.", 
	review: "", 
	images: "building2.jpg", 
	reviewImage: ""},
	
	{name: "Internship", 
	duration: "2 months", 
	time: "December or July", 
	study: "No study", 
	requirements:"Last year of undergraduate", 
	countries:"Canada, France, Germany, Japan", 
	description:"In your last year of undergrad and want work experience? This is the perfect programme for you. Many different internships are available during the semester break from engineering, accounting, law to med. Experience a different lifestyle while working towards your future career. We will work with you to ensure you are placed into an environment suitable to your needs and interests. Build connections and meet new friends. The world is your oyster. Scholarships are available to cover living costs and accomodation. Things to consider are visas, travel and language which we can help you sort out once you have applied. ", 
	review: "", 
	images: "engineer.jpg", 
	reviewImage: "" },
	
	{name: "Postgraduate exchange", 
	duration: "1 - 6 months", 
	time: "Various", 
	study: "Short to full courses", 
	requirements:"Postgraduate", 
	countries:"Canada, France, United Kingdom, USA", 
	description:"Immerse yourself in a whole new country, environment and education. Students in this programme will need to have finished undergraduate in order to apply. We understand that it may be difficult to find the right time and course, hence, we have developed a very flexible and customisable programme to fit students needs. This programme has various durations and times vary depending on the country chosen. Short term research courses are available over semester breaks as well as full semester courses at various universities around the world. Students who attend this program will make life-long friends and learn about societies with a different culture, political and economic system. It is possible to gain credit for some courses towards your current university programme. You will need to discuss this with your university faculty as well as the university you choose.", 
	review: "", 
	images: "postgrad.jpg", 
	reviewImage:"" },
	
	{name: "Volunteer", 
	duration: "4 weeks", 
	time: "December", 
	study: "No study", 
	requirements:"Undergraduate", 
	countries:"Thailand, Myanmar, South America, Africa", 
	description:"Volunteering overseas gives the unique opportunity to experience local cultures first hand while making a difference to the world. Think Global has a large variety of volunteering options from teaching English, humantarian projects, animal rehabilitation and vetted organisations. See the real world from a different prespective, make new friends, learn new skills and embark on a journey of cultural and self discovery. Most volunteer options cover food and accomodation. You will also have time off each week to explore the world for yourself. ", 
	review: "", 
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
    
		/* if(i == 3) {
		    summaryList.append($("<tr>"));
		} */ 
		
		summaryList.append(summaryHTML);
	}
	
	summaryList.append($("</table>"))
}

$(document).ready(function(){
   displaySummary(programmes);
});


