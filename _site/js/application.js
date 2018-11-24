$( document ).ready(function() {
	// Get Date
	Date.prototype.getWeek = function () {
			var target  = new Date(this.valueOf());
			var dayNr   = (this.getDay() + 6) % 7;
			target.setDate(target.getDate() - dayNr + 3);
			var firstThursday = target.valueOf();
			target.setMonth(0, 1);
			if (target.getDay() != 4) {
					target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
			}
			return 1 + Math.ceil((firstThursday - target) / 604800000);
	}

// Get current date
	var d = new Date();
	// Get current Year
	var currentYear = d.getFullYear();
	// show Week Number
	$(".container-week").html(d.getWeek()-1);
	// show Current Year
	$(".container-year").html(currentYear);


	// first = the day of this month - the day of the week
	var first = d.getDate() - d.getDay()+1;
	// last = the first day + 6
	var last = first + 6;
	//
	var firstday = new Date(d.setDate(first)).toDateString();
	//
	var lastday = new Date(d.setDate(last)).toDateString();

	// remove Year from Date string
	const newFirstday = firstday.replace(currentYear, " ");
	const newlastday = lastday.replace(currentYear, " ");

	// Show from first to last day of the current week
	$(".from-date--number").html(newFirstday);
	$(".to-date--number").html(newlastday);
});
