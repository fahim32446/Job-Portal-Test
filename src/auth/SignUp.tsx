import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { UserData } from '../utils/api';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const fake_response = {
    data: {
      token: '41553135248655aASDad@#@$#@#$',
    },
  };

  const handleSubmit = async () => {
    const userData: UserData = { email, password };
    // const response = await api.signUp(userData);
    setAuthToken(fake_response.data.token);
    localStorage.setItem('authToken', fake_response.data.token);
    navigate('/');
  };

  return (
    <div>
      <Container maxWidth='sm' sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant='h5' gutterBottom>
            Sign up (use any email and password)
          </Typography>
          <>
            <TextField
              fullWidth
              label='Email'
              margin='normal'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label='Password'
              type='password'
              margin='normal'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
              variant='contained'
              color='primary'
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign up
            </Button>
          </>
        </Paper>
      </Container>
    </div>
  );
};

export default SignUp;
