import { create } from 'zustand';

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

// Direct, synchronous loading of the stored authentication state from localStorage
const getPersistedState = () => {
  try {
    const data = localStorage.getItem('qix-auth-storage');
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed && parsed.state) {
        return {
          user: parsed.state.user || null,
          isLoggedIn: !!parsed.state.isLoggedIn
        };
      }
    }
  } catch (e) {
    console.error('Failed to load persisted auth state:', e);
  }
  return { user: null, isLoggedIn: false };
};

const initialSession = getPersistedState();

export const useAuthStore = create((set) => ({
  user: initialSession.user,
  isLoggedIn: initialSession.isLoggedIn,
  
  // Action to log in user with email, name and avatar
  login: (email, name, avatar) => {
    const newUser = { 
      email, 
      name,
      avatar: avatar || getAvatarUri(AVATARS[0].colors)
    };
    
    set({ isLoggedIn: true, user: newUser });
    
    // Save to localStorage immediately
    try {
      localStorage.setItem('qix-auth-storage', JSON.stringify({
        state: { isLoggedIn: true, user: newUser }
      }));
    } catch (e) {
      console.error('Failed to persist auth state:', e);
    }
  },
  
  // Action to log out user
  logout: () => {
    set({ isLoggedIn: false, user: null });
    
    // Clear localStorage immediately
    try {
      localStorage.removeItem('qix-auth-storage');
    } catch (e) {
      console.error('Failed to remove persisted auth state:', e);
    }
  }
}));
