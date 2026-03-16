import {Navigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Routes} from '../routes';
import {IAuthProtectedRouteProps} from './auth-protected';
import {getToken} from '../../core/helpers/get-token';
import {useEffect} from 'react';
import {setUser} from '../../store/store.reducer';
const AuthProtectedComponent = ({children, layout = 'public'}: IAuthProtectedRouteProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token  = getToken();
        if (token){
            dispatch(setUser(token));
        }
    }, []);
        switch (layout) {
            case 'auth':
                return children;
            case 'public':
                return children;
            default:
                return children;
        }
};

export default AuthProtectedComponent;
