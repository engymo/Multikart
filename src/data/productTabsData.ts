import { ReviewItem, RatingBreakdown, QAItem } from '@/types/product-tabs';

export const productDescriptionData = {
  mainText:
    "The Model is wearing a white blouse from our stylist's collection, see the image for a mock-up of what the actual blouse would look like.it has text written on it in a black cursive language which looks great on a white color.",
  fabric:
    "Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.",
  sizeAndFit: 'The model (height 5\'8") is wearing a size S',
  materialAndCare: [
    'Top fabric: pure cotton',
    'Bottom fabric: pure cotton',
    'Hand-wash',
  ],
};

export const reviewsSummaryData = {
  averageRating: 4.0,
  totalRatings: 25,
  breakdown: [
    { stars: 5, count: 9, percentage: 90 },
    { stars: 4, count: 7, percentage: 70 },
    { stars: 3, count: 5, percentage: 50 },
    { stars: 2, count: 3, percentage: 30 },
    { stars: 1, count: 1, percentage: 10 },
  ] as RatingBreakdown[],
};

export const productReviewsData: ReviewItem[] = [
  {
    id: '1',
    author: 'John Due',
    date: '10 Aug 2024 11:05:AM',
    rating: 4,
    avatarLetter: 'J',
    content:
      '"Wow! This fashion product exceeded all my expectations! From the moment I opened the package, I could tell it was something special. The quality of the materials is outstanding.',
  },
  {
    id: '2',
    author: 'Rhoda Mayer',
    date: '10 Aug 2024 11:05:AM',
    rating: 5,
    avatarLetter: 'R',
    content:
      '"Nice the attention to detail in the craftsmanship is truly impressive. Not only does it look fabulous, but it feels incredibly comfortable too. I\'ve received so many compliments whenever I wear it!',
  },
  {
    id: '3',
    author: 'Jack Deo',
    date: '10 Aug 2024 11:05:AM',
    rating: 4,
    avatarLetter: 'J',
    content:
      '"The product boasts impressive craftsmanship, meticulous attention to detail, and a stunning appearance, resulting in a comfortable feel and numerous...',
  },
];

export const productQAData: QAItem[] = [
  {
    id: '1',
    question: 'Does the dress offer any UV protection?',
    answer:
      'Yes, the dress offers UV protection. It blocks harmful UV rays, providing an additional layer of sun safety.',
    likes: 0,
    dislikes: 0,
  },
  {
    id: '2',
    question:
      'Are there any pockets, and if so, how many and where are they located?',
    answer:
      'Yes, there are pockets. There are two pockets, one on each side of the garment.',
    likes: 0,
    dislikes: 0,
  },
  {
    id: '3',
    question: 'Is the fabric breathable and quick-drying?',
    answer:
      'Yes, the fabric is breathable, allowing for excellent airflow. Additionally, it is quick-drying, ensuring comfort during and after activities.',
    likes: 0,
    dislikes: 0,
  },
];