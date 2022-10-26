import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <span></span>
                </div>

                <div className="menus">
                    <p className="list_titles">MENU</p>


                    <ul>
                        <li><GridViewIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Dashboards</span></li>
                        <li><span className="li_subset">Ecommerce</span></li>
                        <li><span className="li_subset">Saas</span></li>
                        <li><span className="li_subset">Crypto</span></li>
                    </ul>

                </div>

                <div className="Applications">
                    <p className="list_titles">APPLICATIONS</p>

                    <ul>
                        <li><CalendarTodayOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Calender</span></li>
                        <li><SmsOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Chat</span></li>
                        <li><Inventory2OutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>File Manager</span></li>
                        <li><CropSquareOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Ecommerce</span></li>
                        <li><EmailOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Email</span></li>
                        <li><InboxOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Invoices</span></li>
                        <li><WorkOutlineOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Projects</span></li>
                        <li><WifiOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Contacts</span></li>
                    </ul>

                </div>
                <div className="pages">
                    <p className="list_titles">LAYOUT</p>
                    <p className="list_titles">PAGES</p>

                    <ul>
                        <li><PersonAddAltOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Authentication</span></li>
                        <li><MarkunreadMailboxOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Utility</span></li>

                    </ul>
                </div>

                <div className="components">
                    <p className="list_titles">COMPONENTS</p>

                    <ul>
                        <li> <TerrainOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>UI Elements</span></li>
                        <li><EditOutlinedIcon className="icons" style={{fontSize:"1.8rem"}}/><span>Forms</span></li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar
