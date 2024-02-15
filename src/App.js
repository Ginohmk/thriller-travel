import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Flight from './pages/flight';
import Wallet from './pages/wallet';
import UserDashboard from './pages/user-dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<UserDashboard />} />
        <Route path="flight" element={<Flight />} />
        <Route path="wallet" element={<Wallet />} />
      </Route>
    </Routes>
  );
}

export default App;
