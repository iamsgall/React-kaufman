import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import BadgesAddPage from './pages/badges/add/BadgesAddPage';
import BadgesEditPage from './pages/badges/edit/BadgesEditPage';
import BadgePage from './pages/badge/BadgePage';
import Layout from './components/layout/Layout';
import notFound from './pages/notFound/notFoundPage';
import Home from './pages/home/HomePage';
import RickAndMortyPage from './pages/rickAndMorty/rickAndMortyPage';
import BadgeDetailsContainerPage from './pages/badges/details/container/BadgeDetailsContainerPage';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/badges' component={BadgePage} />
					<Route exact path='/badges/add' component={BadgesAddPage} />
					<Route
						exact
						path='/badges/:badgeId'
						component={BadgeDetailsContainerPage}
					/>
					<Route
						exact
						path='/badges/:badgeId/edit'
						component={BadgesEditPage}
					/>
					<Route exact path='/api' component={RickAndMortyPage} />
					<Route component={notFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
