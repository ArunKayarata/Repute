import React from 'react'
import { useForm } from 'react-hook-form';

function SignIn() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    // Watch password to validate confirm password
    const password = watch('password');

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-5">Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-md text-start  font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        {...register('username', { required: 'Username is required' })}
                        className="mt-1 block w-full border bg-gray-100 rounded-md shadow-sm p-2"
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>

                <div>
                    <label className="block text-md   text-start font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } })}
                        className="mt-1 block w-full border bg-gray-100 rounded-md shadow-sm p-2"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block text-md  text-start font-medium text-gray-700">Number</label>
                    <input
                        type="number"
                        {...register('number', { required: 'Number is required' })}
                        className="mt-1 block w-full border bg-gray-100 rounded-md shadow-sm p-2"
                    />
                    {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
                </div>

                <div>
                    <label className="block text-md    text-start font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                        className="mt-1 block w-full border bg-gray-100 rounded-md shadow-sm p-2"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <div>
                    <label className="block text-md  text-start  font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: value => value === password || 'Passwords do not match'
                        })}
                        className="mt-1 block w-full border bg-gray-100 bg- rounded-md shadow-sm p-2"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                </div>

              

                <button
                    type="submit"
                    className="mt-4 bg-gray-300 text-black p-2 w-1/3 text-lg rounded-md"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn