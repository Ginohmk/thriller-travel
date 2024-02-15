import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Flight from './pages/flight';
import Wallet from './pages/wallet';
import UserDashboard from './pages/user-dashboard';
import Report from './pages/report';
import Statistics from './pages/statistics';
import Settings from './pages/settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<UserDashboard />} />
        <Route path="flight" element={<Flight />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="report" element={<Report />} />
        <Route path="statistic" element={<Statistics />} />
        <Route path="setting" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
