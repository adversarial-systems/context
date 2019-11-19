import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Store, initLocalState } from "../../store";
import reducers from "../../reducers"
import initialState from "../../store/initialState"

import { 
  Puller,
  StateViewer, 
  Timer, 
  TodayList 
} from "../";


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

export const App = () => {
  return (
    <Store initialState={initLocalState(initialState)} reducer={reducers}>
    	<ThemeProvider theme={theme} >
        <Puller />
        <TodayList />
  	    <StateViewer />
        <Timer />
      </ThemeProvider>
    </Store>
  )
};