import React from "react";
import { withRouter } from "react-router";
import { Switch } from 'react-router-dom'
import Index from "../../pages/Index";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import Prices from "../../pages/Prices";
import notFound from "../../pages/NotFound";
import DefaultContainer from "../../containers/Default";
import PageContainer from "../../containers/Page";

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
				<DefaultContainer component={notFound} />
			</Switch>
		</div>
	);
};

export default withRouter(App);