import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // Social scrapers do not run JS, so every route is emitted as real HTML with
    // its own title, canonical, and og:* set baked in.
    formatting: 'minify',
    dirStyle: 'nested',
  },
});
