import React,{Component} from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from './colors';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import index from './routes/index'
import login from './routes/login'
import panel from './routes/panel'
import register from './routes/register'
import registerSuccess from './routes/registerSuccess'
import newCharacter from './routes/new-character'
import character from './routes/character'
import './App.css';

class App extends Component {
	render(){
		return(
			<ThemeProvider theme={theme}>
				<Router>
					<Route exact path="/" component={index} />
					<Route exact path="/login" component={login} />
					<Route exact path="/panel" component={panel} />
					<Route exact path="/character" component={character} />
					<Route exact path="/new-character" component={newCharacter} />
					<Route exact path="/register" component={register} />
					<Route exact path="/register/success" component={registerSuccess} />
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;
