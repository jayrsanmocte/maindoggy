import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import LoginForm from './components/Login&Register/LoginForm';
import RegisterForm from './components/Login&Register/RegisterForm';
import Adopt from './components/Adopt/Adopt';
import ApplicantsInfo from './components/Adopt/ApplicantsInfo';
import Dogdata from './components/dogdata/Dogdata';
import About from './components/About/About';
import SearchDog from './components/dogdata/SearchDog';


  const App = () => {
    const [selectedDogName, setSelectedDogName] = useState('');

    return (
      <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/applicants" element={<Adopt />} />
            <Route path="/appinfo" element={<ApplicantsInfo selectedDogName={selectedDogName} />} />
            <Route path="/appinfo/:id" element={<ApplicantsInfo />} />
            <Route path="/searchDog" element={<SearchDog />} />
            <Route path="/dogdata" element={<Dogdata />} />
            {/* <Route path="/contacts" element={<Footer />} /> */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
        </Routes>
      </>
    );
  };

  export default App;
