export const featuredCamp = {
  id: 'summer-adventure',
  name: 'Summer Adventure',
  title: 'Summer Adventure',
  dates: 'Du 1 au 15 juillet',
  duration: '2 semaines',
  ages: '8 – 15 ans',
  location: 'Alger',
  hours: '09h – 16h',
  price: '25 000',
  description: 'Deux semaines d’activités créatives, de sciences, de jeux et de découvertes en plein air.',
  image: 'photo-1472162072942-cd5147eb3902',
  status: 'Inscriptions ouvertes',
  schedule: [
    { day: 'Lundi', activity: 'Creative Lab' },
    { day: 'Mardi', activity: 'Robotique & inventions' },
    { day: 'Mercredi', activity: 'Expériences scientifiques' },
    { day: 'Jeudi', activity: 'Cinéma & expression' },
    { day: 'Vendredi', activity: 'Aventure en plein air' },
  ],
};

export const camps = [{ ...featuredCamp, price: 25000 }];
