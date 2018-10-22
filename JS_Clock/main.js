// Get items from the DOM
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
let secCounter = 0;
let minCounter = 0;
let hrCounter = 0;


function setDate() {
	// Get the actual time
	const now = new Date();
	// Get seconds
	const secs = now.getSeconds();
	// Get minutes
	const mins = now.getMinutes();
	// Get hours
	const hours = now.getHours();
	// Convert time to degrees for secs
	const secsDeg = ((secs + secCounter) * 6) + 90;
	// Convert time to degrees for mins
	const minsDeg = ((mins + minCounter) * 6) + 90;
	// Convert time to degrees for hours
	const hoursDeg = ((hours + hrCounter) * 30) + 90;
	// Apply style to second-hand of clock
	secondHand.style.transform = `rotate(${secsDeg}deg)`;
	// Apply style to min-hand of clock
	minHand.style.transform = `rotate(${minsDeg}deg)`;
	// Apply style to hour-hand of clock
	hourHand.style.transform = `rotate(${hoursDeg}deg)`;

	// IFs to avoid animation reset
	if (secs === 59) {
		secCounter += 60;
	}
	if (mins === 59 && secs === 59) {
		minCounter += 60;
	}
	if (hours === 11 && mins === 59 && secs === 59) {
		hrCounter += 60;
	}
}

setInterval(setDate, 1000);

