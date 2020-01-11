let currentTimer = document.querySelector('.timer');

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
	}
};

// timer.start(1000);

// function startTimer (delay) {
// 	setInterval(() => {
// 		currentTimer.value++;
// 	}, delay);
// }
// startTimer(1000);
