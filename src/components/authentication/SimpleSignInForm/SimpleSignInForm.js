/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from '@mui/material';


export function SimpleSignInForm(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
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
            Welcome to Bflix
          </Typography>
          <Typography color="text.secondary">
            Login to manage your account.
          </Typography>
        </Box>
        <Card sx={{ p: { xs: 4, md: 6 } }}>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                  Enter your username
                </Typography>
                <TextField
                  label="Username *"
                  variant="outlined"
                  name={'username'}
                  onChange={e => setUsername(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
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
                  <Typography variant={'subtitle2'}>
                    <Link
                      component={'a'}
                      color={'primary'}
                      href={'#'}
                      underline={'none'}
                    >
                      Forgot your password?
                    </Link>
                  </Typography>
                </Box>
                <TextField
                  label="Password *"
                  variant="outlined"
                  name={'password'}
                  type={'password'}
                  onChange={e => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item container xs={12}>
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
                  <Button size={'large'} variant={'contained'} type={'submit'} onClick={handleSubmit}>
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

//export default SimpleSignInForm;

SimpleSignInForm.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};