import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/Themecontext';

const Button = () => {
    const [theme ,setTheme]  = useContext(ThemeDataContext)
    const changeTheme =()=>{

        setTheme('dark')


    }
  return (
    <div>
      <button onClick={changeTheme}>change theme {theme}</button>
    </div>
  )
}

export default Button
