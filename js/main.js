const app = {
	initCurrencyConverter: () => {
			const naira = document.getElementById('naira');
			const euro = document.getElementById('euro');
			const dollar = document.getElementById('dollars');
			const pound = document.getElementById('pounds');

			const convert = document.getElementById('convert_btn');
			const clearInputs = document.getElementById('clear_btn');

		const euroConverter = () => {
			naira.value = Math.round(euro.value * 409.17);
			dollar.value = Math.round(euro.value * 1.13);
			pound.value = Math.round(euro.value * 0.87);
		}
		const nairaConverter = () => {
			euro.value = Math.round(naira.value * 0.0024);
			dollar.value = Math.round(naira.value * 0.0028);
			pound.value = Math.round(naira.value * 0.0021);
		}
		const dollarConverter = () => {
			euro.value = Math.round(dollar.value * 0.89);
			pound.value = Math.round(dollar.value * 0.77);
			naira.value = Math.round(dollar.value * 363.14);
		}
		const poundConverter = () => {
			naira.value = Math.round(pound.value * 470.01);
			euro.value = Math.round(pound.value * 1.15);
			dollar.value = Math.round(pound.value * 1.29);
		}

		const converterHandler = (ev) => {
			if(naira.value !== ''){
				nairaConverter();
			} else if (dollar.value !== ''){
				dollarConverter();
			} else if(euro.value !== ''){
				euroConverter();
			} else if(pound.value !== ''){
				poundConverter();
			} else {
				alert('you have not entered any amount');
			}
			//ev.preventDefault();
			// ev.stopPropagation();
		}

		const clearInputHandler = (ev) => {
			naira.value = "";
			euro.value = "";
			pound.value = "";
			dollar.value = '';
			ev.preventDefault();
		}

		convert.addEventListener('click', converterHandler);
		clearInputs.addEventListener('click', clearInputHandler);
	},
	initGoogleLogin: () => {
		const apiKey = 'AIzaSyA5gzSYcg9F6XeAhFEL3XPPQPFBPgG29ZY';
	}
};