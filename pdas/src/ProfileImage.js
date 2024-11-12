function ProfileImage({ image, altText }) {
    return (
        <div class="card-image">
            <figure class="image is-1by1">
                <img src={image} alt={altText} />
            </figure>
        </div>
    );
}

export default ProfileImage;
