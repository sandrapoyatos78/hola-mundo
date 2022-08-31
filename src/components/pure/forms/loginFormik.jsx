import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// shape es como propsType
const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email format error')
        .required('email is required'),

    // solo las comas se ponen entre los campos y con . se añaden
    password: Yup.string()
        .required('password is required')
})


const LoginFormik = () => {

    const initialCredenci = {
        email: '',
        password: ''
    }
    return (

        <div>
            <h1>LOGING FORMIK</h1>
            <Formik
                // *** initial values
                initialValues={initialCredenci}
                // *** yup validation schema
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // se quedan registrados en el localstorage
                    localStorage.setItem('credencial', values)
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
        </div>
    );
}

export default LoginFormik;
