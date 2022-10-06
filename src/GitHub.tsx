import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

export default function GitHub() {

  const [data, setData] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   getData()
  // },[])


  const getData = async () => {
    const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
    // console.log(res.data.items)
    setData(res.data.items)
    setIsLoading(false)

  }


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    getData()
  }




  const listUsers = data.map((user) =>
    <div key={user.id} className='flex mb-6 gap-2 md:w-8/12 mr-auto ml-auto'>
      <a href={user.html_url}>
        <img
          width={54}
          height={54}
          className='mr-3'
          src={user.avatar_url}
          alt='Generic placeholder'
        />
      </a>

      <div>
        <h5>Login: {user.login}</h5>
        <p>Id: {user.id}</p>
      </div>
    </div>

  )

  return (
    <>
      <form action='' onSubmit={handleSubmit} className='mb-4 md:w-8/12 mr-auto ml-auto'>
        <div className='flex border h-10 justify-between rounded-full'>
          <input
            className='focus:outline-none flex-1 pl-4 text-sm bg-transparent'
            placeholder='Search user'
            type='text'
            onChange={event => setSearchTerm(event.target.value)}
          />
          <button className='bg-black border-black rounded-r-full text-slate-50 w-20 font-semibold text-sm' type='submit'>Search</button>
        </div>
      </form>
      {isLoading && <ReactLoading className='ml-auto mr-auto mt-8' type='balls' color='#444' width={25} />}
      {isLoading ? null : (<h4 className='mb-3 pb-2 border-b-[0.1px] text-sm font-semibold text-gray-800 md:w-8/12 mr-auto ml-auto'>GitHub Users Results</h4>) }
      {listUsers}
    </>
  )
}
