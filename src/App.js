import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import EnhancedTable from './table';
import EditItem from './edit';
import { refillTable, clearTable } from './refill';

function App() {
  return (
    <div className="App">
      <header>
        <Link className="App-link" to="/" onClick={clearTable}>Clear</Link><span> | </span>
        <Link className="App-link" to="/" onClick={refillTable}>Refill</Link><span> | </span>
        <Link className="App-link" to="/" >View</Link>
      </header>
      <Routes>
        <Route path="/" element={<EnhancedTable />} />
        <Route path="/edit/:name/:age" element={<EditItem />} />
        <Route path="/edit/" element={<EditItem />} />
      </Routes>
    </div>
  );
}

export default App;
