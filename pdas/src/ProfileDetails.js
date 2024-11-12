function ProfileDetails({ title, handle }) {
    return (
        <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
        </div>
    );
}

export default ProfileDetails;
