module.exports = {
	staticFileGlobs: [
		"/",
		"index.html",
		"images/**",
		"js/app.js",
		"css/app.css"
	],
	runtimeCaching: [{
	   urlPattern: /jsonplaceholder\.typicode\.com\/users/,
	   handler: 'fastest'
	 }]
};
