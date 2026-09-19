import styles from './About.module.css'

function About() {
  return (
    <div className={styles.About}>
      <h1>About SFPOPOS</h1>
      <h2>San Francisco Privately Owned Public Spaces</h2>
      <p>POPOS are publicly accessible spaces in
        forms of plazas, terraces, atriums, small
        parks, and even snippets which are provided
        and maintained by private developers. In San
        Francisco, POPOS mostly appear in the Downtown
        office district area.</p>
    </div>
  )
}

export default About