import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './Pages/AddUser';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";


const override: CSSProperties = {
  display: "block",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const getUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response.data);

      setUsers(response.data);
      setLoading(false);
    }
    getUsers();
  }, [])





  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          {
            loading ? <ScaleLoader 
            color='#36d7b7'
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> : 
            <Routes>
              <Route path='/' element={<HomePage userList={users}/>}/>
              <Route path='/add' element={<AddUser />} />
            </Routes>
          }
      </BrowserRouter>
    </div>
  );
}

export default App;
