import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Projects from './pages/Projects';
import DealFlow from './pages/DealFlow';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import DevNotes from './pages/DevNotes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="projects" element={<Projects />} />
        <Route path="dealflow" element={<DealFlow />} />
        <Route path="team" element={<Team />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="notes" element={<DevNotes />} />
      </Route>
    </Routes>
  );
}

export default App;
