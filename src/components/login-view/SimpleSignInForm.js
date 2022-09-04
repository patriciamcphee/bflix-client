/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post('https://my-bmovie-app.herokuapp.com/login', {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log('no such user');
      });
  };

  return (
    <Box bgcolor={'alternate.main'}>
      <Container maxWidth={800}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
            }}
            gutterBottom
            color={'text.secondary'}
            fontWeight={700}
          >
            Login
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Welcome back
          </Typography>
          <Typography color="text.secondary">
            Login to manage your account.
          </Typography>
        </Box>
        <Card sx={{ p: { xs: 4, md: 6 } }}>
          <form>
            <Grid container spacing={4}>
              <Grid item sm={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                  Enter your username
                </Typography>
                <TextField
                  type='text'
                  onChange={e => setUsername(e.target.value)}
                  required
                  placeholder='Enter Username'
                />
              </Grid>
              <Grid item sm={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  marginBottom={2}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      Enter your password
                    </Typography>
                  </Box>

                </Box>
                <TextField
                  type='password'
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder='Enter Password'
                />
              </Grid>
              <Grid item container sm={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  maxWidth={600}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      Don't have an account yet?{' '}
                      <Link
                        component={'a'}
                        color={'primary'}
                        href={'#'}
                        underline={'none'}
                      >
                        Sign up here.
                      </Link>
                    </Typography>
                  </Box>
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </Box>
  );
};


LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
