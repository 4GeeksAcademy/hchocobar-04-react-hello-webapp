import React from 'react';  // Import react into the bundle
import {createRoot} from 'react-dom/client';
import "../styles/index.css";  // Include your index.scss file into the bundle
import Layout from './Layout.jsx';  //import your own components


const root = createRoot(document.querySelector("#app"))
root.render(<Layout/>)  // Render your react application
