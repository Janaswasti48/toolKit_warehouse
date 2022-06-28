import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../../Components/Loading';
import { async } from '@firebase/util';

const SignUp = () => {
    const navigate = useNavigate()
    // const [user, loading, error] = useAuthState(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // React Hook Form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);

  
    if (eUser || gUser || updateProfile) {
        // console.log(eUser || gUser);
    }

    if (eLoading || gLoading || updating) {
        return <Loading></Loading>
    }

    let signInError;
    if (eError || gError || updatingError) {
        signInError = <p className='text-red-600'>{eError?.message || gError?.message || updatingError?.message}</p>
    }
    
    // Hook form OnSubmit
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });

    };
    return (

        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div>
                        <h1 className='text-3xl my-3 text-slate-600 text-center '>Please Register</h1>
                    </div>



                    {/* --------------------- React Hook Form----------------------------------- */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    valid: true,
                                    message: 'Name is required'
                                },
                                pattern: {
                                    value: 8,
                                    message: 'At least 8 letter should be contained'
                                }
                            })}
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                            />
                            <label className='label'>
                                {errors.name?.type === 'required' && <span className='text-red-600'>{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className='text-red-600'>{errors.name.message}</span>}

                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"

                                {
                                ...register("email", {
                                    required: {
                                        valid: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })
                                }

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
                                type="password" placeholder="confirm password" className="input input-bordered"
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
                            <button className="btn bg-green-500 border-0 text-white">Sign Up</button>
                        </div>


                        <div>
                            <p className='underline '>Already have an account?<Link className='text-green-600 mx-2' to='/login'>Please login</Link></p>
                        </div>

                        <div className="flex flex-col w-full border-opacity-50">
                            <button onClick={() => signInWithGoogle()} className="btn mt-6 bg-red-600 border-0 text-white">Google</button>
                            <div className="divider">OR</div>
                            <button className="btn bg-accent border-0 text-white">Facebook</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>



    );
};


export default SignUp;