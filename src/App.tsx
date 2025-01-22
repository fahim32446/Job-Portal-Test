import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import AuthProvider from './contexts/AuthContext';
import JobList from './job/JobList';
import CreateJob from './job/CreateJob';
import SignIn from './auth/SingIn';
import SignUp from './auth/SignUp';
import Navbar from './common/AppBar';
import ProtectedRoute from './common/ProtectedRoute';
import EditJob from './job/EditJob';
import Home from './Home';
import ViewJob from './job/ViewJobs';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Home />} />
              <Route path='/job-list' element={<JobList />} />
              <Route path='/create-job' element={<CreateJob />} />
              <Route path='/edit-job/:id' element={<EditJob />} />
              <Route path='/view-job/:id' element={<ViewJob />} />
            </Route>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
