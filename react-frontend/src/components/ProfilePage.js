import React from 'react';
import ProfileForm from './ProfileForm';

const ProfilePage = ({ userId }) => {
    // In a real app, you would fetch the profileId based on the userId
    // For this example, we'll assume profileId is known
    const profileId = 1; // This should be dynamically set

    return (
        <div>
            <h2>Edit Profile</h2>
            <ProfileForm userId={userId} profileId={profileId} />
        </div>
    );
};

export default ProfilePage;