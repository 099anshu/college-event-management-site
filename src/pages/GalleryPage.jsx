import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GalleryPage = () => {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        axios.get('/api/gallery')
            .then(response => setGalleryItems(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Gallery</h1>
            {galleryItems.map(item => (
                <div key={item._id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    {item.mediaType === 'photo' ? (
                        <img src={item.url} alt={item.title} />
                    ) : (
                        <video controls>
                            <source src={item.url} type="video/mp4" />
                        </video>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GalleryPage;