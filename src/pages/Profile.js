import React from 'react'
import {useStateValue} from '../StateProvider'
import '../css/profile.css'

function Profile() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="profile">
            <div className="profile__header">
                <img className="profile__img" src={user?.photoURL} alt="" />
                <div className="profile__info">
                    <h1 className="profile__username">Shutterbuggr</h1>
                    <div className="profile__insight">
                        <p><strong>79</strong> posts</p>
                        <p><strong>700</strong> followers</p>
                        <p><strong>253</strong> following</p>
                    </div>
                    <div className="profile__bio">
                        <p>name</p>
                        <span>personal blog</span>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum at deserunt, sunt rerum deleniti perspiciatis dolore necessitatibus dolores maiores facilis alias omnis assumenda quos amet, expedita blanditiis id sint distinctio? Eos provident, explicabo illum impedit deserunt maxime voluptatem aut repudiandae corrupti. Exercitationem officiis, odio accusantium illo nulla ex optio.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
