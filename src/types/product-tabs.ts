export type TabType = 'description' | 'review' | 'qa';

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  avatarLetter: string;
}

export interface RatingBreakdown {
  stars: number;
  count: number;
  percentage: number;
}

export interface QAItem {
  id: string;
  question: string;
  answer: string;
  likes: number;
  dislikes: number;
}