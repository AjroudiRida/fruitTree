import { Route, Routes } from 'react-router-dom';
import FruitCategories from './components/fruitCategories/FruitCategories';
import FruitDetails from './components/fruitDetails/FruitDetails';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<FruitCategories />} />
          <Route path="/details/:family" element={<FruitDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
