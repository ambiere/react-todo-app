import React, { FormEvent, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'


export default function UserForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const checkEmail = (emailParam: string): void => {
        if (emailParam) {
            if (!/@/.test(emailParam)) {
                setEmailError(`Sorry, include an '@' in the email address. ${email} is missing an '@'`)
            } else if (!emailParam.substring(emailParam.indexOf('@') + 1) || !emailParam.substring(emailParam.indexOf('@') + 1).includes('.') || !emailParam.substring(emailParam.indexOf('.') + 1)) {
                setEmailError(`Please enter a part following '@'. ${emailParam} is incomplete`)
            } else {
                setEmailError('')
                setPasswordError('')
            }
        }
    }


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        let emailValid = false
        if (email.length === 0) {
            setEmailError('Email is required')
        } else if (email.length < 6) {
            setEmailError('Email should be minimum 6 characters')
        } else if (email.includes(' ')) {
            setEmailError('Email cannot contain spaces')
        } else {
            setEmailError('')
            emailValid = true
        }

        let passWordValid = false
        if (password.length === 0) {
            setPasswordError('Password is required')
        } else if (password.length < 6) {
            setPasswordError('Password should be minimum 6 character')
        } else if (password.includes(' ')) {
            setPasswordError('Password cannot contain spaces')
        } else {
            setPasswordError('')
            passWordValid = true
        }


        if (emailValid && passWordValid) {
            alert(`Email: '${email}' \nPassword: ${password}`)
            setEmail('')
            setPassword('')
        }
    }

    return (
        <>
            <div className='md:w-[460px] ml-auto mr-auto text-gray-800 text-xl mb-6'><button type='button' title='backArrow' className='outline-none'><IoIosArrowBack /></button></div>
            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col md:w-[460px] ml-auto mr-auto'>
                    <label htmlFor="email" className='font-medium text-purple-700'>
                        Email address
                    </label>
                    <div className='mt-3 rounded-md border h-10 flex flex-col justify-center md:max-w-lg' >
                        <input
                            className='pl-3 pr-3 pb-1 focus:outline-none rounded-md h-10'
                            type="email"
                            name="email"
                            id="email"
                            placeholder='you@example.com'
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <span className='mt-1 text-sm text-gray-600'>We'll never share your email with anyone</span>
                    {
                        emailError.length > 0 && <div className='h-10 flex flex-col justify-center mt-3 p-4 bg-red-200'><span className='text-gray-900 text-sm'>{emailError}</span></div>
                    }
                    <div className='mt-3'>
                        <label htmlFor="password" className='font-medium text-purple-700'>
                            Password
                        </label>
                        <div className='mt-3 rounded-md border h-10 flex flex-col justify-center md:max-w-lg'>
                            <input
                                className='pl-3 pr-3 pb-1 focus:outline-none rounded-md h-10'
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                onFocus={event => checkEmail(email)}
                            />
                        </div>
                    </div>
                    {
                        passwordError.length > 0 && <div className='h-10 flex flex-col justify-center mt-4 p-4 bg-red-200'><span className='text-gray-900 text-sm'>{passwordError}</span></div>
                    }
                    <div className='flex content-center justify-center mt-6 w-24 h-10 rounded-md bg-purple-700 hover:bg-purple-600'>
                        <button
                            className='mb-0.5 text-slate-50 font-medium outline-none'
                            type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}