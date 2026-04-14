export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'mentor' | 'immigrant';
  location?: string;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  originCountry: string;
  currentCountry: string;
  tags: string[];
  verified: boolean;
}

export interface Post {
  id: string;
  author: {
    name: string;
    image: string;
    role?: string;
    title?: string;
  };
  content: string;
  image?: string;
  timeAgo: string;
  likes: number;
  comments: number;
  shares: number;
  tags?: string[];
  isQuestion?: boolean;
}

export interface DocumentStatus {
    name: string;
    desc: string;
    status: 'Uploaded' | 'Pending' | 'Rejected';
    icon: string;
    colorClass: string;
}