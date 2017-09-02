export default new function() {
	const config = this;

	this.dev = false;
	this.ssl = false;
	this.port = "3100";
	this.staticFolder = "/dist"
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + "Site Domain";
	this.staticURL = this.domain + this.staticFolder;
	this.host = !this.dev ? "Server Ip" : "127.0.0.1";
	this.hosturl = this.type + this.host;
	this.token = "Application Token"
	this.mail = new function() {
		this.port = "3080";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Who send";
		this.to = "To who";
	}
};
