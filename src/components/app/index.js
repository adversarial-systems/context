import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Store } from "../../store";
import reducers from "../../reducers"
import initialState from "../../store/initialState"

import Header from "../header";
// import List from "../list";
import StateDisplay from "../state";

const theme = createMuiTheme({
	overrides: {
		background: 'linear-gradient(45deg, #9BFE4B 30%, #4E53FF 80%)'
	},
	palette: {
		inverted: {
			contrastText: '#000',
		}
	}
});

export default () => (
  
  <Store initialState={initialState} reducer={reducers}>
  	<ThemeProvider theme={theme}>
			<Header />
	    <StateDisplay />
    </ThemeProvider>
  </Store>
);