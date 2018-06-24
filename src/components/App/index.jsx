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
import DefaultContainer from "../../containers/Default";
import PageContainer from "../../containers/Page";
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
				<DefaultContainer exact path="/" component={Index} />
				<PageContainer path="/about" component={About} />
				<PageContainer path="/projects" component={Projects} />
				<PageContainer path="/prices" component={Prices} />
				<PageContainer path="/contact" component={Contact} />
				<DefaultContainer path="/sustav" component={Sustav} />
				<DefaultContainer path="/music" component={Music} />
				<DefaultContainer path="/avantazh" component={Avantazh} />
				<DefaultContainer path="/kino" component={Kino} />
				<DefaultContainer path="/klassnye" component={Klassnye} />
				<DefaultContainer component={notFound} />
			</Switch>
		</div>
	);
};

export default withRouter(App);