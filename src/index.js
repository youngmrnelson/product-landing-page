import React from "react";
import { createRoot} from 'react-dom/client';
import App from './js/App';
import styles from './scss/main.scss';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(<App />);