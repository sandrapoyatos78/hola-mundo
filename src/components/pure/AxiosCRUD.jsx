import React from 'react';
import {login, getAllUsers, getAllUsersPage, getUserbyId, createUser, updateUserById, deleteUserbyId } from '../../service/axiosCRUDservice';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AxiosExam = () => {

    const authUser = (values) => {
        login(values.email, values.password)
        // consume la respuesta del endpoint
            .then((response) => {
                if (response.data.token) {
               alert(JSON.stringify(response.data));
               sessionStorage.setItem('token', response.data.token)

                } else {
                    sessionStorage.removeItem('token'); 
                    throw new Error('Login failure');
                }
            })
            .catch((error) => {
                alert (`something went wrong: ${error}`);
                sessionStorage.removeItem('token'); 
            })
            .finally(() => console.log('login done'))
    }

    // CRUD EXAMPLE

    const obtainAllUser = () => {
        getAllUsers()
        .then((response) => {
            alert(JSON.stringify(response.data.data))
        })
        .catch((error) => alert('something went wrong')) 

    }
    const obtainAllUserPage = (page) => {
        getAllUsersPage()
        .then((response) => {
            alert(JSON.stringify(response.data.data))
        })
        .catch((error) => alert('something went wrong')) 

    }


    const obtainUserById = (id) => {

        getUserbyId(id)
        .then((response) => {
            alert(JSON.stringify(response.data.data))
        })
        .catch((error) => alert('something went wrong')) 
    }

    const createNewUser = (name, job) => {

        createUser(name, job)
        .then((response) => {
            if (response.data && response.status === 201) {
            alert(JSON.stringify(response.data))
            } else {
                throw new Error('error')
            }
        })
        .catch((error) => alert('something went wrong')) 
    }

    const updateUser = (id, name, job) => {

        updateUserById(id, name, job)
        .then((response) => {
            alert(JSON.stringify(response.data.data))
        })
        .catch((error) => alert('something went wrong')) 
    }

    const deleteUser = (id) => {

        deleteUserbyId(id)
        .then((response) => {
            alert(JSON.stringify(response.data.data))
        })
        .catch((error) => alert('something went wrong')) 
    }



    const initialCredenci = {
        email: '',
        password: ''
    }
    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email format error')
            .required('email is required'),
    
        // solo las comas se ponen entre los campos y con . se añaden
        password: Yup.string()
            .required('password is required')
    })

    return (
    
        <div>
            <h1>LOGING FORMIK</h1>
            <Formik
                // *** initial values
                initialValues={initialCredenci}
                // *** yup validation schema
                validationSchema={loginSchema}
                // *** onSUBMIT event
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >
                {/* props de Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email">EMAIL</label>
                        <Field id="email" type="email" name="email" placeholder="Your Email" />

                        {
                            errors.email && touched.email &&
                            (
                              
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                         
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credenciales...</p>) : null}
                    </Form>
                )
                }

            </Formik>
            
            <button onClick={ obtainAllUser}>OBTENER TODOS user con axios</button>
            <button onClick={() => obtainAllUserPage(1)}>por pagina 1</button>
            <button onClick={obtainUserById}>obtain by ID</button>
            <button onClick={ () =>  createNewUser('', '')}>create user</button>
            <button onClick={ () =>  deleteUser(1)}>delete</button>
            <button onClick={ () =>  updateUser('', '')}>udapte</button>
        </div>
    );
}

export default AxiosExam;
