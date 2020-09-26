const sub = document.getElementById('sub');
const answrP = document.getElementById('answrP');
sub.addEventListener('click', (e) => {
	e.preventDefault();
	const question = document.getElementById('question').value;
	answrP.textContent = returnMessage();
});
