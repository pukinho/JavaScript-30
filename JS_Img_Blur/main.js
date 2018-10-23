// Select DOM controls
const inputs = document.querySelectorAll('.controls input');

// Change values while sliding the slider
function sliderValues() {
	// Select data- elements from HTML. in this case 'sizing' or '' (nothing) for hex colors
	const suffix = this.dataset.sizing || '';
	// Get 
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Event Listeners for slider moves
inputs.forEach(input => input.addEventListener('change', sliderValues));
inputs.forEach(input => input.addEventListener('mousemove', sliderValues));