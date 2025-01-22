import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { setAuthToken, authToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
    navigate('/signin');
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            Job Portal
          </Link>
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color='inherit'>
            <Link
              to='/job-list'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              View All Jobs
            </Link>
          </Button>

          <Button color='inherit'>
            <Link
              to='/create-job'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Create Job
            </Link>
          </Button>

          <Button color='inherit' onClick={handleLogout}>
            {authToken ? 'Logout' : 'Login'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
