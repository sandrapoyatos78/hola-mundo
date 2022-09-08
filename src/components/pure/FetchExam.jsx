import React, { useEffect, useState } from 'react';
import { getAllUser } from '../../service/fetchService';
import { getAllPagesUser } from '../../service/fetchService';
import {getuserDetails} from '../../service/fetchService';

const FetchExam = () => {
    const [users, setUsers] = useState([]); // se tiene que inicializar vacio, no podemos tener map sobre 0
    const [totalUser, setTotalUser] = useState(12);
    const [pages, setPages] = useState(2);
    const [userperPage, setUserperPage] = useState(6);
    const [selectUser, setSelectUser] = useState(null);

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUser()
            .then((response) => {
                console.log('all user: ', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUser(response.total);
                setUserperPage(response.per_page);
            })
            .catch((error) => {
                alert(`error while retreiving ${error}`)
            })
            .finally(() => {
                console.log('end');
                console.table(users)
            })
    }

    const obteinPageUsers = (page) => {
        getAllPagesUser(page)
            .then((response) => {
                console.log('all paged user: ', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUser(response.total);
                setUserperPage(response.per_page);
            })
            .catch((error) => {
                alert(`error while retreiving ${error}`)
            })
            .finally(() => {
                console.log('end');
                console.table(users);
            });
    }

    const obtainUserDetails = (id) => {
        getuserDetails(id)
        .then((response) => {
            console.log('all paged user: ', response.data);
            setSelectUser(response.data);
        })
        .catch((error) => {
            alert(`error while retreiving ${error}`)
        })
        .finally(() => {
            console.log('end');
            console.table(selectUser);
        });


    }
    return (
        <div>
            <h2>USERS: </h2>
            {users.map((user, index) => (
                <p key={index} onClick= {()=> obtainUserDetails(user.id)}>
                    {user.first_name}
                    {user.last_name}
                </p>)
            )
            }
            <p>showing {userperPage} user of {totalUser} in total.</p>
            <button onClick={() => obteinPageUsers(1)}>1</button>
            <button onClick={() => obteinPageUsers(2)}>2</button>

            <div>
                <h3>Details user: </h3>
                { selectUser && (
                    <div>
                        <p>NAME: {selectUser.first_name}</p>
                        <p>LAST NAME: {selectUser.last_name}</p>
                        <p>EMAIL: {selectUser.email}</p>
                        <img alt= 'avatar'src={selectUser.avatar} style= {{height: '50px', width:'50px'}}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchExam;
