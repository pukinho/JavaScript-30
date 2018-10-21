function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) {
		return; // Stop the function
	} else {
		audio.currentTime = 0; // Remove playing sound delay
		audio.play();
		key.classList.add('key-anim');
	}
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('key-anim');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)

