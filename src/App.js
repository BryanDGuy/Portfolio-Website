import React, { useEffect, useState } from 'react';
import './App.css';
import GithubProjects from './components/GithubProjects/GithubProjects';

const githubOwner = 'BryanDGuy'

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const response = await fetch(`https://api.github.com/users/${githubOwner}/repos`);
      const repos = await response.json();
      setRepos(repos);
    }

    getRepos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Software Engineer</h1>
        <h2>Here's a nice little blurb about why I'm the best at my job</h2>
      </header>
      <GithubProjects repos={repos}/>
    </div>
  );
}



export default App;
