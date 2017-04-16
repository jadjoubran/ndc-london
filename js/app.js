(function() {

	function boot() {

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then((data) => {
			data.forEach(function(user){
				let name = user.name;
				let card = `<div class="card">Name: ${name}</div>`;
				document.querySelector('#speakers-list').innerHTML += card;
			});
		});
	}

    document.getElementById('is-homescreen').innerHTML = window.location.hash;

	boot();
})();
