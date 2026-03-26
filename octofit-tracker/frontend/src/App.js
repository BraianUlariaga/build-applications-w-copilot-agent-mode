import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import octofitLogo from './octofitapp-small.png';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo" />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/activities">Actividades</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Equipos</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Usuarios</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Entrenamientos</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title display-4">Bienvenido a OctoFit Tracker</h1>
                <p className="card-text lead">Gestiona tus actividades, equipos, usuarios y entrenamientos de forma sencilla y visual.</p>
                <Link to="/activities" className="btn btn-primary m-2">Ver Actividades</Link>
                <Link to="/leaderboard" className="btn btn-success m-2">Ver Leaderboard</Link>
                <Link to="/teams" className="btn btn-info m-2">Ver Equipos</Link>
                <Link to="/users" className="btn btn-warning m-2">Ver Usuarios</Link>
                <Link to="/workouts" className="btn btn-danger m-2">Ver Entrenamientos</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
