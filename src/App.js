import React, { useEffect, useState } from 'react';
import './App.css';
import GithubProjects from './components/GithubProjects/GithubProjects';

const githubOwner = 'BryanDGuy'

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const response = await fetch(`https://api.github.com/users/${githubOwner}/repos`);
      const reposJson = await response.json();

      const readMeForRepos = [];
      await Promise.all(reposJson.map(async repo => {
        const readMeResponse = await fetch(`https://raw.githubusercontent.com/${githubOwner}/${repo.name}/master/README.md`, {
          'Content-Type': 'text/plain; charset=utf-8'
        });
        const readMe = await readMeResponse.text();
        readMeForRepos.push({ name: repo.name, url: repo.html_url, readMe: readMe});
      }));
      setRepos(readMeForRepos);
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
