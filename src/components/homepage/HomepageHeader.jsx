import styles from './HomepageHeader.module.scss';

export default function HomepageHeader() {
  const HEADING = `Choose a Planet`;

  const BODY = `Learn about the planets in our solar system, including an overview of their internal structure, surface geology, and other fun facts!`;

  return (
    <header className={styles.header}>
      <h1 className="headingOne">{HEADING}</h1>
      <p className={styles.headerBody}>{BODY}</p>
    </header>
  );
}
