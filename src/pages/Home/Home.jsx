import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/shared/Button/Button'
import Card from '../../components/shared/card/Card'
import styles from './Home.module.css'

const Home = () => {

  const signLink = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
  }

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Meeting House" icon="logo">
        <p className={styles.cardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga totam minus tempore beatae, quam quas optio consectetur repellat assumenda laborum cum voluptatem aliquid deleniti illum asperiores, dicta, tempora ab molestiae quo molestias tenetur.
        </p>
        <div>
          <Button usernameClick={handleClick} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.inviteText}>Have an invite link?</span>
          <Link style={signLink} to="/login">Sign In</Link>
        </div>
      </Card>
    </div>
  )
}

export default Home