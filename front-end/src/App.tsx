import { gql } from '@apollo/client'
import React from 'react'
import { mutate } from './apollo_client'
import './App.css'
import logo from './logo.svg'
import { CreateLaptopArgs } from './type-graphql'

function App() {
   function createLaptop() {
      const args: CreateLaptopArgs = {
         data: {
            brand: 'Lenovo',
            cpu: 'Ryzen 7 5800H',
            model: 'Lenovo Ideapad 5 Pro 16"',
         },
      }

      const doc = gql`
         mutation ($data: LaptopCreateInput!) {
            createLaptop(data: $data) {
               brand
               model
               material
               display
            }
         }
      `

      mutate(doc, args)
         .then((data) => console.log('Data: ', data))
         .catch((errors) => console.log('Errors: ', errors))
   }

   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <button onClick={createLaptop}>Create Laptop</button>
         </header>
      </div>
   )
}

export default App
