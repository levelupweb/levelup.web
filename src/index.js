import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from "./registerServiceWorker";
import App from './components/app/App.js';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return this.props.children
  }
}

ReactDOM.render(
	<HashRouter>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</HashRouter>,
	document.getElementById("root")
);
registerServiceWorker();
