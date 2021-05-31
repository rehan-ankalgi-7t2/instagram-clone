import { IconButton } from '@material-ui/core'
import { Add, Face, FavoriteBorder, HomeOutlined,Search } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/tab.css';


function Tab() {
    return (
            <div className="tab">
                <Link to="/home">
                    <IconButton>
                        <HomeOutlined/>
                    </IconButton>
                </Link>
                <Link to="/searchPage">
                    <IconButton>
                        <Search/>
                    </IconButton>
                </Link>
                <Link to="/addPost">
                    <IconButton>
                        <Add/>
                    </IconButton>
                </Link>
                <Link to="/likes">
                    <IconButton>
                        <FavoriteBorder/>
                    </IconButton>
                </Link>
                <Link to="/profile">
                    <IconButton>
                        <Face/>
                    </IconButton>
                </Link>
            </div>
    )
}

export default Tab

