import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { useState } from 'react';
import axios from 'axios';

const HomePage = (props) => {
    const [value, setValue] = useState('');

    const filteredUsers = props.userList.filter(user => user.name.toLowerCase().includes(value.toLowerCase())) 
   

    const InputHandler = (e) => {
        setValue(e.target.value)
    } 

    const DeleteHandler = async (id) =>{
        
    }
    DeleteHandler();
      
  return (
    <div className='container mt-2'>
        <input onChange={InputHandler} type='text' placeholder='Search' className='form-control my-3 w-50 mx-auto' />

        <table className='w-100'>
            <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>FullName</th>
                    <th scope='col'>Phone</th>
                    <th scope='col' className='text-start'>Edit</th>
                </tr>
            </thead>
            <tbody>
                { 
                    filteredUsers.map(user =>{
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button className='btn btn-warning me-3 my-1'><GrUpdate/> Update</button>
                                    <button onClick={async () => {
                                        console.log('salam' + user.id)
                                        await axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                                        
                                    }} className='btn btn-danger'><FaTrashAlt/> Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default HomePage