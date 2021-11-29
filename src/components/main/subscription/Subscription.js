import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions';
import '../../../styles/components/subscription.scss';
import { loginValidationSchema } from './validation/validationSchema';

const Subscription = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
        },

        validationSchema: loginValidationSchema,

        onSubmit: ({email}) => {
            const user = {
                email: email.toLowerCase(),
            };
         dispatch(login(user));   
        }
    })

    return (
        <div className="bgSubscription">
            <div className="container subscriptionContainer">
                 <div className="subscriptionDesc">
            <h3 className="subscriptionTitle">
            Haven't found a suitable vehicle?
            </h3>
            <p className="subscriptionText">
            Sign up for our newsletter and be the first to know when we publish new vehicle offers.
            </p>
                 </div> 
                 <div className="subscriptionInput">
                <form onSubmit={formik.handleSubmit} className="subForm">
                    <input type="text"
                    id="email" 
                    className="subInput"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email"
                     />
                     {formik.errors.email && formik.touched.email && (
            <div className="inputError">{formik.errors.email}</div>
          )}
                </form>
                <button className="subBtn" type="submit">Subscribe now</button>
                 </div>
            </div>
        </div>
    );
}

export default Subscription;