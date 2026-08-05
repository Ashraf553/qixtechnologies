import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const AVATARS = [
  { id: 'avatar-1', colors: ['#ff416c', '#ff4b2b'], name: 'Crimson Sunset' },
  { id: 'avatar-2', colors: ['#a855f7', '#3b82f6'], name: 'Nebula Cyber' },
  { id: 'avatar-3', colors: ['#10b981', '#059669'], name: 'Teal Forest' },
  { id: 'avatar-4', colors: ['#f59e0b', '#e11d48'], name: 'Solar Flare' },
  { id: 'avatar-5', colors: ['#ec4899', '#8b5cf6'], name: 'Cosmic Fuchsia' },
  { id: 'avatar-6', colors: ['#06b6d4', '#3b82f6'], name: 'Cyan Ocean' }
];

export const getAvatarUri = (colors) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" /><stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#grad)" /></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      
      // Action to log in user with email, name and avatar
      login: (email, name, avatar) => set({ 
        isLoggedIn: true, 
        user: { 
          email, 
          name: name,
          avatar: avatar || getAvatarUri(AVATARS[0].colors)
        } 
      }),
      
      // Action to log out user
      logout: () => set({ 
        isLoggedIn: false, 
        user: null 
      })
    }),
    {
      name: 'qix-auth-storage', // key name in localStorage
    }
  )
);
