export const COLORS = {
  primary: {
    blue: '#2B3674',
    lightBlue: '#4285F4',
    green: '#05CD99',
    red: '#EE5D50',
    yellow: '#FFB547',
    gradient: 'linear-gradient(90deg, #4285F4 0%, #3ABAF4 100%)',
  },
  secondary: {
    gray: '#A3AED0',
    lightGray: '#F4F7FE',
    darkGray: '#707EAE',
  }
};

export const USER_DATA = {
  name: 'Paul Dumartin',
  address: '14 rue du Louvre',
  postalCode: 'Paris 75001',
  score: 'B',
  recentTransaction: '80K',
  segment: 'RET', // RET = Retail
  risque: 'faible',
};

export const LOAN_DATA = {
  societeLoan: {
    amount: '39 234€',
    status: 'validé',
    number: '13452789',
    borrowerId: 'UK567UI8',
    requestedAmount: '39 234€',
    monthlyPayment: '700€',
    duration: '18 mois',
    interestRate: '3%',
    commission: 'Lorem ipsum',
    globalEffectRate: '3',
    requestDate: '01/11/2019',
    expirationDate: '01/04/2022',
  },
  hotdogsLoan: {
    amount: '12 360€',
    status: 'en attente',
    number: '67547860',
    borrowerId: 'UK567UI8',
    requestedAmount: '12 360€',
    monthlyPayment: 'En attente',
    duration: '14 mois',
    interestRate: '8%',
    commission: 'Lorem ipsum',
    globalEffectRate: '5',
    requestDate: '04/09/2021',
    expirationDate: 'En attente',
  },
};

export const MARKET_DATA = [
  { period: '7 DAYS', rate: '0.0000', riskFree: '0', premium: '0.0000', change: '0.0000', variation: '1' },
  { period: '30 DAYS', rate: '0.0000', riskFree: '0', premium: '0.0000', change: '0.0000', variation: '0' },
  { period: '90 DAYS', rate: '0.0000', riskFree: '0.02345', premium: '0.0000', change: '0.0000', variation: '0.02345' },
  { period: '180 DAYS', rate: '0.03500', riskFree: '0.03500', premium: '0.03500', change: '0.03500', variation: '0.03500' },
  { period: '360 DAYS', rate: '0.004400', riskFree: '0.004400', premium: '0.004400', change: '0.004400', variation: '0.004400' },
];

export const NAV_ITEMS = [
  { title: 'Tableau de Bord', icon: 'dashboard', path: '/' },
  { title: 'Mes transactions', icon: 'swap_horiz', path: '/transactions' },
  { title: 'Mes clients', icon: 'people', path: '/clients' },
  { title: 'Assistance', icon: 'help', path: '/assistance' },
];
