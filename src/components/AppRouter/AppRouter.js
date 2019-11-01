import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import MainPage from "../mainPage/mainPage";
import DetailsPage from "../detailsPage/detailsPage";
import PageLayout from "../pageLayout/pageLayout";
import Container from "../container/container";

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
