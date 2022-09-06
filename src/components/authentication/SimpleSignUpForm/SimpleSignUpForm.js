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

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ Birthday, setBirthday] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, Birthday);
    /* Send a request to the server for authentication */
    /* then call props on registored user(username) */
    props.onRegistration(username);
  };

  return (
    <Box bgcolor={'alternate.main'}>
      <Container maxWidth={800}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
            }}
             
            color={'text.secondary'}
            fontWeight={700}
          >
            Signup
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Create an account
          </Typography>
          <Typography color="text.secondary">
            Fill out the form to get started.
          </Typography>
        </Box>
        <Card sx={{ p: { xs: 4, md: 6 } }}>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                  Enter your username
                </Typography>
                <TextField
                  label="Username *"
                  variant="outlined"
                  name={'userName'}
                  fullWidth
                  onChange={e => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                  Enter your password
                </Typography>
                <TextField
                  label="Password *"
                  variant="outlined"
                  name={'password'}
                  fullWidth
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                  Enter your email
                </Typography>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
                  fullWidth
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                  Enter your birthday
                </Typography>
                <TextField
                  label="Birthday *"
                  variant="outlined"
                  name={'birthday'}
                  type={'date'}
                  fullWidth
                  onChange={e => setBirthday(e.target.value)}
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
                      Already have an account?{' '}
                      <Link
                        component={'a'}
                        color={'primary'}
                        href={'#'}
                        underline={'none'}
                      >
                        Login.
                      </Link>
                    </Typography>
                  </Box>
                  <Button size={'large'} variant={'contained'} type={'submit'} onClick={handleSubmit}>
                    Sign up
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                container
                xs={12}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Typography
                  variant={'subtitle2'}
                  color={'text.secondary'}
                  align={'center'}
                >
                  By clicking "Sign up" button you agree with our{' '}
                  <Link
                    component={'a'}
                    color={'primary'}
                    href={'#'}
                    underline={'none'}
                  >
                    company terms and conditions.
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
