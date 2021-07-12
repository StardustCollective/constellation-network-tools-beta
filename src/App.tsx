import React from 'react';
import AnalyticsPage from 'pages/Analytics';
import { Redirect, Route, Switch } from 'react-router';
import BlockExplorer from 'pages/BlockExplorer';
import NetworkMonitor from 'pages/NetworkMonitor';

export const APP_ROUTES = [
  {
    path: '/analytics',
    component: AnalyticsPage,
    title: 'analytics',
  },
  {
    path: '/block-explorer',
    component: BlockExplorer,
    title: 'Block Explorer',
  },
  {
    path: '/network-monitor',
    component: NetworkMonitor,
    title: 'Network Monitor',
  },
];

function App() {
  return (
    <Switch>
      {APP_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
      <Redirect from="/" to="/analytics" />
    </Switch>
  );
}

export default App;
