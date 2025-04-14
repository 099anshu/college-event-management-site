import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GalleryPage from './components/GalleryPage';
import { ContactPage, AboutPage } from './components/ContactPage';
import NotificationsPage from './components/NotificationsPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/gallery" component={GalleryPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/notifications" component={NotificationsPage} />
            </Switch>
        </Router>
    );
};

export default App;