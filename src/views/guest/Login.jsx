import React, {useState} from 'react';
import {Avatar, Button, CssBaseline, Grid, Link, makeStyles, Paper, TextField, Typography} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import i18n from '../../i18n';
import {useDispatch} from 'react-redux';
import {useToasts} from 'react-toast-notifications'
import {loginUser} from "../../store/AuthStore/thunks";

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {addToast} = useToasts()

    const doLogin = () => {
        if(login === '' || password === ''){
            addToast('Nie poprawne dane logowania', {
                appearance: 'error',
                autoDismiss: true,
            })
        }
        dispatch(loginUser(login, password));
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.rightSide}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {i18n.t('sign_in')}
                    </Typography>
                    <div className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={i18n.t('email_login')}
                            name="email"
                            autoComplete="email"
                            value={login}
                            autoFocus
                            onChange={e => setLogin(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={i18n.t('password')}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={doLogin}
                        >
                            {i18n.t('sign_in')}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    {i18n.t('forgot_password')}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    rightSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

}));


export default Login;
