import React from 'react';
import { ErrorInfo } from 'react';
import './UserTable.css';
import { error } from 'console';
import'./UserTable.css';

interface User {//props
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

interface State {
    users: User[];
    loading: boolean;
    error: string | null;
}

export class UserTable extends React.Component<{}, State> {
    state: State = {
        users: [],
        loading: true,
        error: null
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            if(!res.ok){throw new Error("Error al conectar a la URL");}
            return res.json()
        })
        .then(data=>this.setState({users:data,loading:false}))
           
        .catch(error=>this.setState({error:error.message,loading:false}))
    }
    render() {
        const{users,loading,error}=this.state;
        if(loading){
            return<div>Loading...</div>
        }
        if(error){
            return<div>Error: {error}</div>
        }
        return (
            <div>
                <table className='user-table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}