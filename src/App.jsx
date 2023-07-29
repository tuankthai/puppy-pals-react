// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'



function App() { 
  
  // console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)

  return (

    <div>{
      puppies.map((puppy) => {
        return <p key = {puppy.id}>{puppy.name}</p>
      })
    }        
      </div>
      
    
  )
}

export default App
