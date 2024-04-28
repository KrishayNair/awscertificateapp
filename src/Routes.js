import React from 'react';
import { Routes, Route } from 'react-router';
import Quiz from "./Quiz"


const createRoutes = () => (
    <Routes>
      <Route path="/quiz" element={<Quiz/>} exact={true} />
    </Routes>
);

export default createRoutes;