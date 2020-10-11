import React from 'react';
import ReactMarkdown from 'react-markdown'
import styles from './GithubProjects.module.scss';

const GithubProjects: React.FC<{repos: any[]}> = ({ repos }) => {
  return (
    <div className={styles.projectsSection}>
      <h1 className={styles.header}>My Projects</h1>
      {repos.map(repo => {
        return (
          <a key={repo.name} className={styles.GithubProjects} href={repo.url}>
            <ReactMarkdown source={repo.readMe} />
          </a>
        );
      })}
    </div>
  );
};

export default GithubProjects;
