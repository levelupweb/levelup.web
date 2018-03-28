import React from "react";
import { withRouter } from "react-router";
import { Switch } from 'react-router-dom'

// components
import Index from "../../pages/index/index.js";
import About from "../../pages/about/About.js";
import Contact from "../../pages/contact/Contact.js";
import Projects from "../../pages/projects/Projects.js";
import Sustav from "../../pages/projects/sustav/Sustav.js";
import Avantazh from "../../pages/projects/avantazh/Avantazh.js";
import Kino from "../../pages/projects/kino/Kino.js";
import Music from "../../pages/projects/music/Music.js";
import Prices from "../../pages/prices/Prices.js";
import notFound from "../../pages/notFound/notFound.js";
import RouteDefaultContainer from "../../containers/RouteDefaultContainer.js";
import RoutePageContainer from "../../containers/RoutePageContainer.js";
import Klassnye from "../../pages/projects/klassnye/Klassnye.js";

const App = props => {
	const { location } = props;
	return (
		<div className="App">
			<Switch
				location={location}
				key={location.key}
				onUpdate={() => window.scrollTo(0, 0)}
			>
				<RouteDefaultContainer exact path="/" component={Index} />
				<RoutePageContainer path="/about" component={About} />
				<RoutePageContainer path="/projects" component={Projects} />
				<RoutePageContainer path="/prices" component={Prices} />
				<RoutePageContainer path="/contact" component={Contact} />
				<RouteDefaultContainer path="/sustav" component={Sustav} />
				<RouteDefaultContainer path="/music" component={Music} />
				<RouteDefaultContainer path="/avantazh" component={Avantazh} />
				<RouteDefaultContainer path="/kino" component={Kino} />
				<RouteDefaultContainer path="/klassnye" component={Klassnye} />
				<RouteDefaultContainer component={notFound} />
			</Switch>
		</div>
	);
};

export default withRouter(App);