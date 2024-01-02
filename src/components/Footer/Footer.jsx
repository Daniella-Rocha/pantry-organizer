import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h3>Pantry Orgamizer</h3>
      </div>
      <div>
        <ul>
          <li>Privacidade</li>
          <li>Trabalhe conosco</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
