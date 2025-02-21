import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/routes";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.message);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p>Error fetching data.</p>
        ) : (
          <p>Backend says: {data}</p>
        )}

        <RoutesConfig />
      </div>
    </Router>
  );
}

export default App;
