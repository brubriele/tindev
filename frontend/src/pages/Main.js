import React, { useEffect, useState } from 'react';
import './Main.css'
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import api from '../services/api'


export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    //Captura ID do user que está dando like
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
            setUsers(response.data)
        }

        loadUsers();
    }, [match.params.id])

    //Captura ID do user que está recebendo like/dislike
    async function handleLike(id) {
        console.log('like', id)
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id },
        });

        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul >
                {users.map(user => (
                    <li key ={user._id}>
                        <img src={user.avatar} alt={user.name}></img>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>

                        <div className="buttons">
                            <button type="button" onClick={() => handleDislike(user._id)}>
                                <img src={dislike} alt="Dislike" />
                            </button>
                            <button type="button" onClick={() => handleLike(user._id)}>
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}