import React from 'react';
import styles from './GithubProjects.module.scss';

const GithubProjects: React.FC<{repos: any[]}> = ({ repos }) => {
  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.header}>My Projects</h1>
      {repos.map(repo => {
        return (
          <a key={repo.name} className={styles.GithubProjects} href={repo.html_url}>
            <h2>{repo.name}</h2>
            <h3>{repo.description}</h3>
          </a>
        );
      })}
    </section>
  );
};

export default GithubProjects;
