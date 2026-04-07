export interface ServiceRate {
  id: string;
  name: {
    en: string;
    pt: string;
  };
  price: string;
  unit?: string;
  description: {
    en: string;
    pt: string;
  };
}

export const HOSTEL_RATES: ServiceRate[] = [
  {
    id: 'bunk',
    name: { en: 'Social Bunk', pt: 'Cama em Dormitório' },
    price: '€15',
    unit: '/night',
    description: { en: 'Premium bunk beds with privacy curtains and fiber WiFi.', pt: 'Camas premium com cortinas de privacidade e WiFi de fibra.' }
  },
  {
    id: 'private',
    name: { en: 'Private Royalty', pt: 'Realeza Privada' },
    price: '€45',
    unit: '/night',
    description: { en: 'Experience unparalleled luxury in the heart of Rossio.', pt: 'Experimente um luxo incomparável no coração do Rossio.' }
  }
];

export const LUGGAGE_RATES: ServiceRate[] = [
  {
    id: 'standard',
    name: { en: 'Standard Locker', pt: 'Cacifo Standard' },
    price: '€1',
    unit: '/hr',
    description: { en: 'Fits backpacks & shopping bags.', pt: 'Ideal para mochilas e sacos de compras.' }
  },
  {
    id: 'vault',
    name: { en: 'Premium Vault', pt: 'Cacifo Premium' },
    price: '€2.50',
    unit: '/hr',
    description: { en: 'Fits large suitcases & equipment.', pt: 'Ideal para malas grandes e equipamento.' }
  }
];
