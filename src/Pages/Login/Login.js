import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Components/Loading';


const Login = () => {
    // Require Authentication
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // React Hook Form
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        // signInWithGoogle(data.email, data.password)

    };
    if (user || gUser) {
        console.log(user || gUser);
        navigate(from, { replace: true });
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-600'>{error?.message || gError?.message}</p>
    }
    // const handleToSubmit = event => {
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     signInWithEmailAndPassword(email, password)
    //     event.preventDefault();
    // }
    return (

        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div>
                        <h1 className='text-3xl my-3 text-slate-600 text-center '>Please Login</h1>
                    </div>



                    {/* --------------------- React Hook Form----------------------------------- */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    valid: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a valid email'
                                }
                            })}
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                            <label className='label'>
                                {errors.email?.type === 'required' && <span className='text-red-600'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-600'>{errors.email.message}</span>}
                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    valid: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or more' // JS only: <p>error message</p> TS only support string
                                }


                            })}
                                type="password" placeholder="password" className="input input-bordered"
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className='text-red-600'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>{errors.password.message}</span>}
                            </label>
                            <label className="label">
                                <Link to='' href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        {signInError}
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500 border-0 text-white">Login</button>
                        </div>

                        <div>
                            <p className='underline '>New to TooKit?<Link className='text-green-600 mx-2' to='/signup'>Please Register</Link> </p>
                        </div>

                        
                    </form>

                     <div className="flex flex-col w-full border-opacity-50">
                            <button onClick={() => signInWithGoogle()} className="btn mt-6 bg-red-600 border-0 text-white">Google</button>
                            <div className="divider">OR</div>
                            <button className="btn bg-accent border-0 text-white">Facebook</button>
                        </div>

                </div>
            </div>
        </div>

    );
};

export default Login;