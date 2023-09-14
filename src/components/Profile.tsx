import React from "react";
import { StaticImage} from "gatsby-plugin-image";

const Profile = () => {
    return (
        <div className="my-6 mx-6 pl-2">
            <StaticImage
                className="bio-avatar object-cover mb-3"
                formats={["auto", "webp", "avif"]}
                src="../images/profile.jpeg"
                alt="Profile picture"
            />
            <div className="m-1">
                This is a personal blog where I organize and share knowledge 😚 
            </div>
        </div>
    )
};


export default Profile;