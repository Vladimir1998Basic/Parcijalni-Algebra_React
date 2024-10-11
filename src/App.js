import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUserDetails = async () => {
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      setUser(userResponse.data);
      setRepos(reposResponse.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Korisnik nije pronađen. Molimo provjerite korisničko ime.');
    }
  };

  const reset = () => {
    setUsername('');
    setUser(null);
    setRepos([]);
  };

  return (
    <div className="App">
      {!user ? (
        <UserForm
          username={username}
          setUsername={setUsername}
          fetchUserDetails={fetchUserDetails}
        />
      ) : (
        <UserDetails user={user} repos={repos} reset={reset} />
      )}
    </div>
  );
}

export default App;
