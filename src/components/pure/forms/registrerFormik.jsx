import React from 'react';
import { Formik,Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import { User } from '../../../models/user.class.js';
import { ROLES } from '../../../models/roles.enum.js';

const RegistrerFormik = () => {
    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Name must be too short')
                .max (12, 'name too longe')
                .required ('user is required'), 
            email: Yup.string()
                .email('Email format error')
                .required('email is required'),  
            role : Yup.string()
                .oneOf([ROLES.USER,ROLES.ADMIN, 'You must select a role: User/ admin'])
                .required('Role is requiered'),  
            password: Yup.string()
            .min(8, 'password min')
                .required('password is required'),
                // .matches(``), 
            confirm: Yup.string()
            .when("password" , {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    'Password must match'
                )
            }).required('you must confirm the password')    
        }

    )

    const submit = (values) => {
        alert('register user')
    }

    return (
        <div>
            <h1>REGISTER FORMIK</h1>
     
            <Formik
                // *** initial values
                initialValues={initialValues}
                // *** yup validation schema
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
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
                    <label htmlFor="username">NAME</label>
                    <Field id="username" type="username" name="username" placeholder="Your user name" />
                    {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name="username" component='div'></ErrorMessage>
                            )
                        }

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
                        <label htmlFor="confirm">Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm"
                            type="confirm"
                        />
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name="confirm" component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit">Register</button>
                        {isSubmitting ? (<p>Sending your credenciales...</p>) : null}
                    </Form>
                )
                }

            </Formik>

            
        </div>
    );
}

export default RegistrerFormik;
