import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Store } from "../../store";
import reducers from "../../reducers"
import initialState from "../../store/initialState"

import Header from "../header";
// import List from "../list";
import StateDisplay from "../state";

const theme = createMuiTheme({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

export default () => (
  
  <Store initialState={initialState} reducer={reducers}>
  	<ThemeProvider theme={theme}>
			<Header />
	    <StateDisplay />
    </ThemeProvider>
  </Store>
);