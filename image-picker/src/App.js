import React, { useState } from 'react';
import './App.css';
import WebcamCapture from './component/WebcamCapture';
import ImagePicker from './component/ImagePicker';

const App = () => {
    const [imageSrc, setImageSrc] = useState('');

    return (
        <div className="App">
            <h1>Image Picker and Camera</h1>
            <div className="buttons">
                <button onClick={() => setImageSrc('')}>Upload from Gallery</button>
                <button onClick={() => setImageSrc('webcam')}>Take a Photo</button>
            </div>
            {imageSrc === 'webcam' ? (
                <WebcamCapture onImageCapture={(src) => setImageSrc(src)} />
            ) : (
                <ImagePicker onImageSelect={(src) => setImageSrc(src)} />
            )}
            {imageSrc && <img src={imageSrc} alt="Selected" />}
        </div>
    );
};

export default App;
