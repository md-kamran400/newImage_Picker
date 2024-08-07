import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import './cam.css';

const WebcamCapture = ({ onImageCapture }) => {
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = useState('user');

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        onImageCapture(imageSrc);
    }, [webcamRef, onImageCapture]);

    const flipCamera = () => {
        setFacingMode((prevFacingMode) => (prevFacingMode === 'user' ? 'environment' : 'user'));
    };

    return (
        <div className="webcam-container">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
                videoConstraints={{ facingMode }}
            />
            <div className="controls">
                <button onClick={capture}>Capture photo</button>
                <button onClick={flipCamera}>Flip Camera</button>
            </div>
        </div>
    );
};

export default WebcamCapture;
