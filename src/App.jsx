import React, { useState, useEffect } from 'react'

function App() {

  const URL = 'https://randomuser.me/api?results=3';

  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data.results);
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      {
        users.map(user =>
          <div key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.first} />
            <p><span>{user.name.first}</span> <span>{user.name.last}</span></p>
          </div>
        )
      }
    </div>

  )
}

export default App;
