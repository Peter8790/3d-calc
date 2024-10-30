import React, { useEffect } from 'react';
import * as THREE from 'three';

const Calculator: React.FC = () => {
    useEffect(() => {
        // Create the scene
        const scene = new THREE.Scene();

        // Set up the camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5; // Move the camera back so we can see the scene

        // Create the WebGL renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            // You can add any animations or updates here
            renderer.render(scene, camera);
        };

        animate();

        // Clean up on component unmount
        return () => {
            // Remove the renderer from the DOM
            document.body.removeChild(renderer.domElement);
        };
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <div>
            {/* Other components or elements can go here */}
            <h1>3D Calculator</h1>
        </div>
    );
};

export default Calculator;