import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";

// components
import Index from "../../pages/index/index.js";
import About from "../../pages/about/About.js";
import Contact from "../../pages/contact/Contact.js";
import Projects from "../../pages/projects/Projects.js";
import Sustav from "../../pages/projects/sustav/Sustav.js";
import Avantazh from "../../pages/projects/avantazh/Avantazh.js";
import Montemilli from "../../pages/projects/montemilli/Montemilli.js";
import Prices from "../../pages/prices/Prices.js";
import notFound from "../../pages/notFound/notFound.js";
import RouteDefaultContainer from "../../containers/RouteDefaultContainer.js";
import RoutePageContainer from "../../containers/RoutePageContainer.js";

const App = props => {
	const { location } = props;
	return (
		<div className="App">
			<SwitchCSSTransitionGroup
				location={location}
				transitionName="fade"
				transitionEnterTimeout={600}
				transitionLeaveTimeout={600}
				onUpdate={() => window.scrollTo(0, 0)}
			>
				<RouteDefaultContainer exact path="/" component={Index} />
				<RoutePageContainer path="/about" component={About} />
				<RoutePageContainer path="/projects" component={Projects} />
				<RoutePageContainer path="/prices" component={Prices} />
				<RoutePageContainer path="/contact" component={Contact} />
				<RouteDefaultContainer path="/sustav" component={Sustav} />
				<RouteDefaultContainer path="/montemilli" component={Montemilli} />
				<RouteDefaultContainer path="/avantazh" component={Avantazh} />
				<RouteDefaultContainer component={notFound} />
			</SwitchCSSTransitionGroup>
		</div>
	);
};

export default withRouter(App);
