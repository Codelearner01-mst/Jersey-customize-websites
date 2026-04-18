// Vercel Web Analytics initialization
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({
  mode: 'auto', // Automatically detect environment (production/development)
  debug: true, // Enable debug logging in development
});
