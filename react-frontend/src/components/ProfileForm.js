import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileForm = ({ userId, profileId }) => {
    const [profile, setProfile] = useState({
        favorite_genres: '',
        book_preferences: '',
        history_of_swapped_books: '',
    });

    useEffect(() => {
        // Fetch profile data from the API and set it to state
        axios.get(`/api/profiles/${profileId}/`)
            .then(response => {
                setProfile(response.data);
            });
    }, [profileId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update profile data using the API
        axios.put(`/api/profiles/${profileId}/`, profile)
            .then(response => {
                // handle success
            })
            .catch(error => {
                // handle error
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Favorite Genres:
                <input
                    type="text"
                    name="favorite_genres"
                    value={profile.favorite_genres}
                    onChange={handleChange}
                />
            </label>
            <label>
                Book Preferences:
                <input
                    type="text"
                    name="book_preferences"
                    value={profile.book_preferences}
                    onChange={handleChange}
                />
            </label>
            <label>
                History of Swapped Books:
                <textarea
                    name="history_of_swapped_books"
                    value={profile.history_of_swapped_books}
                        onChange={handleChange}
                />
            </label>
            <button type="submit">Save Profile</button>
        </form>
    );
};

export default ProfileForm;