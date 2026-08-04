import { ViteReactSSG } from 'vite-react-ssg';

import { routes } from './routes.jsx';
import './styles/styles.css';

export const createRoot = ViteReactSSG({ routes });
