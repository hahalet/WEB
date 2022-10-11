import * as React from "react";
import ReactDOM from 'react-dom'
import {
	HashRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import VConsole from 'vconsole';
import 'lib-flexible';
import 'animate.css';
import Contact from './pages/contact/contact';
import './index.scss'
import { local } from './locals/local'
import Home from './pages/home/home';
import AboutUs from './pages/aboutUs/aboutUs';
import Product from './pages/product/product';
import Detail from './pages/detail/detail';
import PersonInfo from './pages/personInfo/personInfo';
import './index.scss';

export class Index extends React.Component {
	state = {
		language: 'en',
	}
	componentDidMount = () => {
		window.onload = () => {
			try {
				new VConsole();
			} catch (error) { }

		};
		window.addEventListener("message", data => {
			console.log('message===lang:', data, data.origin == location.origin, data.data.language);
			
			// eslint-disable-next-line no-restricted-globals
			if (data.origin == location.origin) {
				let language = data.data.language;
				if (language) {
					this.setState({
						language: data.data.language || 'en'
					});
				}
			}
		});
	}

	render() {
		const { language } = this.state;
		
		const message = local[language];
		return (
      <IntlProvider locale={language} messages={message}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/personInfo">
              <PersonInfo />
            </Route>
            <Route exact path="/detail">
              <Detail />
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
          </Switch>
        </Router>
      </IntlProvider>
    );
	}
}

ReactDOM.render(
	<Index></Index>,
	document.getElementById("root")
)