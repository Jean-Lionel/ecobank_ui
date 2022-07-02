import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { Alert } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
        Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
        );
    }
    
    const theme = createTheme();
    
    export default function LoginForm() {
        const [error, setError] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const history = useHistory();
        
        const handleSubmit = async (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const email = data.get('email');
            const password = data.get('password');
            
            console.log({
                email: data.get('email'),
                password: data.get('password'),
            });
            
            if(!email || !password) {
                setError('Please enter email and password');
                return;
            }
            setIsLoading(true);
            console.log(email, password);
            try {
                const response = await axios.post('/login/', {
                    email,
                    password
                });
                console.log(response.data.access_token, response.data.data);
                
                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                setIsLoading(false);
                //window.location.href = '/admin';
                history.push("/admin")
            } catch (error) {
                setError(error?.response?.data?.message);
                setIsLoading(false);
            }
            
            
        };
        
        return (
            <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
            Authentification
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            />
            <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Se Connecter
                                </Button>
                                {error && <Alert severity="error">
                                    {JSON.stringify(error)}
                                </Alert>}

                                {isLoading && <span>wait ...</span>}
            {/* <Grid container>
            <Grid item xs>
            <Link href="#" variant="body2">
            Forgot password?
            </Link>
            </Grid>
            <Grid item>
            <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
            </Link>
            </Grid>
        </Grid> */}
        <Copyright sx={{ mt: 5 }} />
        </Box>
        </Box>
        </Grid>
        </Grid>
        </ThemeProvider>
        );
    }