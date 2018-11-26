import { App } from './app.js';
import '../styles/main.scss';
import json from '../custom-loader-testing/custom-loader-test.json';

console.log({ json });

/** Initialize the application here */
document.addEventListener('DOMContentLoaded', () => new App());
