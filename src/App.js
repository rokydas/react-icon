import React, { useState, useEffect } from 'react';
import './App.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function App() {
  const [likeColor, setLikeColor] = useState('action');

  const [user, setUser] = useState({});

  useEffect( () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setUser(data.results[0]))
  }, [])

  return (
    <div>
      <h1>Like button</h1>
      <ThumbUpIcon onClick={() => 
        (likeColor === 'action' && setLikeColor('primary')) || (likeColor === 'primary' && setLikeColor('action'))}  
        color={likeColor} 
      />
      <h1>Name: {user.name && user.name.first}</h1>
      {/* ekhane user.gender e sorasori access kora jai. kintu user.name.first dile jhamela kore. er karon holo: 
      data load howar age state e ekta empty object thake. empty object e user.gender dile se kisu na diye bose thake. 
      data asar por gender bosai dei. kintu 2 level vitore user.name.first dile se data asar jonno na bose theke error mare. 
      but user.name && user.name.first eta dile user.name thaklei user.name.first ke show korabe. ete error khabe na. 
      */}
    </div>
  );
}

export default App;
