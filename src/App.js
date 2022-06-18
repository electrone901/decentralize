import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import './App.css'
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import CellTowerIcon from '@mui/icons-material/CellTower'
import logo from './images/logo.png'
import { Icon } from 'web3uikit'
import { UAuthMoralisConnector } from '@uauth/moralis'
import { useMoralis } from 'react-moralis'
import { uauth } from './connectors'

const App = () => {
  const { isAuthenticated, logout, authenticate } = useMoralis()
  const uauthMoralisConnector = new UAuthMoralisConnector()
  const [udUser, setudUser] = useState('')
  const [wallet, setWallet] = useState('')
  const [userInfo, setUserInfo] = useState('')

  useEffect(() => {
    const getUdNameLocal = localStorage.getItem('udName')
    setudUser(getUdNameLocal)
  }, [udUser])

  const userLogIn = async () => {
    try {
      let user = await authenticate(uauth)
      let domainDetials = uauthMoralisConnector.uauth.user()
      const udName = (await domainDetials).sub
      const wallet = (await domainDetials).wallet_address

      setudUser(udName)
      setWallet(wallet)
      setUserInfo(user)

      if (udName) {
        localStorage.setItem('udName', udName)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const userLogOut = () => logout()
  return (
    <>
      {isAuthenticated ? (
        <div className="page">
          <div className="sideBar">
            <Sidebar udUser={udUser} />
            <Button
              variant="contained"
              color="secondary"
              endIcon={<LogoutIcon />}
              onClick={userLogOut}
              className="logout-btn"
            >
              Logout
            </Button>

            {/* <div className="logout" onClick={userLogOut}>
              Logout
            </div> */}
          </div>
          <div className="mainWindow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <div className="rightBar">
            <Rightbar />
          </div>
        </div>
      ) : (
        <div className="loginPage">
          {/* <Icon fill="#5e98f7" size={40} svg="twitter" />
           */}
          <img src={logo} alt="company" className="logo" />
          <Button
            onClick={userLogIn}
            variant="contained"
            color="secondary"
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
        </div>
      )}
    </>
  )
}

export default App
