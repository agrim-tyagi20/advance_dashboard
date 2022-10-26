import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Navbar = () => {
  return (
    <>
    <div className="header">
      <span className="curve">
   
      </span>
      <div className="navbar">
        <div className="nav_title">
          <p>Dashboard</p>
        </div>


        <div className="Nav_items">
          <i class="fa-solid fa-magnifying-glass" style={{fontSize:"1.7rem"}}></i>
          <img src="https://cdn.pixabay.com/photo/2017/02/06/15/09/american-flag-2043285_960_720.png" alt="img"></img>
          <GridViewIcon  style={{ fontSize: "1.9rem" }} />
          <div style={{display:"flex",position:"relative"}}>
          <i class="fa-regular fa-bell" style={{fontSize:"1.7rem"}}></i>
          <div className="counter">
            4
            </div>
          </div>
          <SettingsOutlinedIcon style={{fontSize:"1.7rem"}} />
          <img src="https://tse1.mm.bing.net/th?id=OIP.uMfq46b0Bt9KZ8r2PdTwmAHaJ5&pid=Api&rs=1&c=1&qlt=95&w=81&h=108" alt="img" style={{borderRadius:"50%",height:"22px"}}></img>
        </div>
      </div>
      </div>

    </>
  )
}

export default Navbar
