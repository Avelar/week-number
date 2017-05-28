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

	var d= new Date();
	var currentYear = d.getFullYear();
	$(".container-week").html(d.getWeek()-1);
	$(".container-year").html(currentYear);

	// Get current date
	var curr = new Date;
	// First day is the day of the month - the day of the week
	// Adds curr.getDay() +1 if the getWeek fuction goes from thuesday to sunday
	var first = curr.getDate() - curr.getDay();
	// last day is the first day + 6
	var last = first + 6;
	var firstday = new Date(curr.setDate(first)).toDateString();
	var lastday = new Date(curr.setDate(last)).toDateString();
	// Show first and last day of the week
	$(".from-date--number").html(firstday);
	$(".to-date--number").html(lastday);
});
