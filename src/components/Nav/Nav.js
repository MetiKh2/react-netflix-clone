import React, { useEffect, useState } from 'react'
import styles from './Nav.module.css'
import userAvatar from '../../images/R.png'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
const Nav = () => {
  const [handleShow, setHandleShow] = useState(false)
  const transitionNavbar = () => {
    if(window.scrollY>100)setHandleShow(true)
    else setHandleShow(false)
  }
  useEffect(()=>{
    window.addEventListener('scroll',transitionNavbar)
    return ()=>{
      window.removeEventListener('scroll',transitionNavbar)
    }
  },[])
  const containerClassNames = classNames(styles.navContainer,handleShow?styles.navBlack :'' );
  return (
    <div   className={containerClassNames}>
      <Link to={'/'}>
      <img width={100} src='https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0'/>
      </Link>
    {/* {!isAuth&&  <Link to={'/signin'} className={styles.signIn}>Sign in</Link>} */}
    {true && <Link to={'profile'}><img width={70} src={userAvatar} style={{background:'#fff'}}/></Link>}
    </div>
  )
}

export default Nav