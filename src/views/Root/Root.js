import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/mainTheme';
import HomeView from 'views/HomeView/HomeView';
import PantryView from 'views/PantryView/PantryView';
import ShoppingListView from 'views/ShoppingListView/ShoppingListView';
import SettingsView from 'views/SettingsView/SettingsView';

const Root = () => (
    <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/pantry" component={PantryView} />
                <Route path="/shopping" component={ShoppingListView} />
                <Route path="/settings" component={SettingsView} />
            </Switch>
        </ThemeProvider>
    </BrowserRouter>
);

export default Root;
