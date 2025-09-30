import React from 'react';
import styles from './GithubProjects.module.scss';

interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const GithubProjects: React.FC<{repos: Repo[]}> = ({ repos }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.projectsGrid}>
      {repos.map(repo => (
        <a 
          key={repo.name} 
          className={styles.projectCard} 
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.cardHeader}>
            <h3 className={styles.projectTitle}>{repo.name}</h3>
            <div className={styles.projectStats}>
              <span className={styles.stat}>
                ⭐ {repo.stargazers_count}
              </span>
              <span className={styles.stat}>
                🍴 {repo.forks_count}
              </span>
            </div>
          </div>
          
          <p className={styles.projectDescription}>
            {repo.description || 'No description available'}
          </p>
          
          <div className={styles.cardFooter}>
            <div className={styles.projectMeta}>
              {repo.language && (
                <span className={styles.language}>
                  {repo.language}
                </span>
              )}
              <span className={styles.updated}>
                Updated {formatDate(repo.updated_at)}
              </span>
            </div>
            <div className={styles.externalLink}>
              →
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GithubProjects;
