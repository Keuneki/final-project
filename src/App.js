import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllElements from './pages/AllElements';
import SingleElement from './pages/SingleElement';
import AllMagic from './pages/AllMagic';
import SingleMagic from './pages/SingleMagic';
import PureMagic from './pages/PureMagic';
import MixedMagic from './pages/MixedMagic';
import MagicBuilder from './pages/MagicBuilder';
import AlClasses from './pages/AlClasses';
import ClassDetails from './components/ClassDetails';
import BasicClass from './pages/BasicClass';
import AdvancedClass from './pages/AdvancedClass';
import MasterClass from './pages/MasterClass';
import SingleClass from './pages/SingleClass';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AllElements />} />
        <Route path="/element/:id" element={<SingleElement />} />
        <Route exact path="/magic-builder" element={<MagicBuilder />} />
        <Route exact path="/magic" element={<AllMagic />} />
        <Route path="/magic/:id" element={<SingleMagic />} />
        <Route path="/pure-magic" element={<PureMagic />} />
        <Route path="/mixed-magic" element={<MixedMagic />} />
        <Route path="/classes" element={<AlClasses />} />
        <Route path="/class/:classId" element={<ClassDetails />}>
          <Route path="/" element={<SingleClass />} />
          <Route path="basic" element={<BasicClass />} />
          <Route path="advanced" element={<AdvancedClass />} />
          <Route path="master" element={<MasterClass />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
