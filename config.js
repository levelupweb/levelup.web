export default new function() {
	const config = this;

	this.dev = false;
	this.ssl = false;
	this.port = "3100";
	this.staticFolder = "/dist"
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + "web.levelupworlds.com";
	this.staticURL = this.domain + this.staticFolder;
	this.host = this.dev ? "185.22.232.114" : "127.0.0.1";
	this.hosturl = this.type + this.host;
	this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWIubGV2ZWx1cHdvcmxkcy5jb20iLCJpYXQiOjE1MDM4Mzc2OTUsImV4cCI6MTUzNTM3MzcwMywiYXVkIjoiMTg1LjIyLjIzMi4xMTQiLCJzdWIiOiIwMzI1ODkzNCIsImFwcGxpY2F0aW9uX2lkIjoiMDMyNTg5MzQifQ.s5-dmQTAUlavJfofRUM9PhXFIHbW0D9WK4nipFfAFT4"
	this.mail = new function() {
		this.port = "3080";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Иван из Levelup Web";
		this.to = "beatzhitta@gmail.com";
	}
};
