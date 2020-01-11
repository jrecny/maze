const currentTimer = document.querySelector('.timer');

const timer = {
	hasStarted : false,
	start (delay = 1000) {
		this.timerId = setInterval(() => {
			currentTimer.value++;
		}, delay);
		this.hasStarted = true;
	},
	stop () {
		clearInterval(this.timerId);
		currentTimer.style.color = 'rgba(0,255,0,.5)';
	}
};
