import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import Container from '../Container/Container';
import PageLayout from '../PageLayout/PageLayout';

const AppRouter = (
    <Router>
        <PageLayout>
            <Container>
                <Route exact path="/" component={MainPage}/>
                <Route path="/details" component={DetailsPage}/>
            </Container>
        </PageLayout>
    </Router>
);
export default AppRouter;
