export default new function() {
	const config = this;

	this.dev = false;
	this.ssl = false;
	this.port = "3100";
	this.staticFolder = "/dist"
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + "web.levelupworlds.com";
	this.staticURL = this.domain + this.staticFolder;
	this.host = "185.22.232.114";
	this.hosturl = this.type + this.host;
	this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJ2aWNlSWQiOiIwMzI1ODkzNCIsImlhdCI6MTUwMzgzNTAwNH0.re9GGadfB3v3VNfctfYUsyHvZ0oDHXFQHHoeX4YrrxM"
	this.mail = new function() {
		this.port = "3080";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Иван из Levelup Web";
		this.to = "beatzhitta@gmail.com";
	}
};
