
export enum NavTab {
  HOME = 'home',
  EXPLORE = 'explore',
  ROUTE = 'route',
  MY_ROUTES = 'my_routes',
  PROFILE = 'profile'
}

export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
  bike?: {
    brand: string;
    model: string;
    year: number;
    nickname?: string;
  };
}

export interface LocationPoint {
  lat: number;
  lng: number;
  timestamp: number;
}

export interface BikerRoute {
  id: string;
  userId: string;
  userName: string;
  title: string;
  path: LocationPoint[];
  distance: number; // in km
  duration: number; // in seconds
  isPublic: boolean;
  rating: number;
  createdAt: number;
  thumbnail?: string;
}

export interface Place {
  id: string;
  name: string;
  type: 'workshop' | 'restaurant' | 'viewpoint' | 'gas_station';
  lat: number;
  lng: number;
  rating: number;
  reviewsCount: number;
  image: string;
}
