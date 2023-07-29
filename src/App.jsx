// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'




function App() {

  // console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)

  return (

    <div className="puppyList">
      <h1>List of Puppies</h1>
      {
        puppies.map((puppy) => {
          return <p onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>
        })
      }

      {featPupId &&
        // <p>{featPupId}</p>
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      }



    </div>


  )
}

export default App
