import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return(
            <div>
                Error:
                {error}
            </div>
        );
    }

    return (
        <div>
            {users.map((user) => (
                <div classname="divcont" key={user.id}>{user.name}</div>
            ))}
        </div>
    );  
};

export default UserList;