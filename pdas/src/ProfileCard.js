import ProfileImage from "./ProfileImage";
import ProfileDetails from "./ProfileDetails";

function ProfileCard({ title, handle, image, description }) {
    const alt = `logo of ${title} pda`
    return (
        <div className="card">
            <ProfileImage image={image} altText={alt} />
            <div className="card-content" >
                <ProfileDetails title={title} handle={handle} />
                <div className="content">{description}</div>
            </div>
        </div>
        
    );
}

export default ProfileCard;
