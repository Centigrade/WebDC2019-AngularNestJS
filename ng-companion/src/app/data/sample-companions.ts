import { Companion, CompanionDetails } from '../types';

export const SAMPLE_USER = {
  id: 'angular',
  name: 'Andre Gular',
  markdownName: '*An*dre *Gular*',
  avatar: 'dragon2',
};
export const SAMPLE_MATCH = {
  id: 'nestjs',
  name: 'Nesta Jason',
  markdownName: '*Nest*a *J*a*s*on',
  avatar: 'dragon',
};

export const SAMPLE_COMPANIONS: Companion[] = [
  {
    id: 'express',
    name: 'Eliza Xopress',
    markdownName: '*E*liza *X*o*press*',
    avatar: 'robotrabbit',
  },
  {
    id: 'vanilla-node',
    name: 'Vanilla Nodesto',
    markdownName: '*Vanilla Node*sto',
    avatar: 'deer',
  },
  { id: 'adonisjs', name: 'Adones Johnson', markdownName: '*Adonis J*ohn*s*on', avatar: 'otter' },
];

export const SAMPLE_COMPANIONS_DETAILS: CompanionDetails[] = [
  {
    ...SAMPLE_COMPANIONS[0],
    characteristics: [
      'quite a fast runner',
      'little structure in life',
      'somewhat popular',
      'a tad messy',
    ],
    favoriteColor: '#88E1F8',
  },
  {
    ...SAMPLE_COMPANIONS[1],
    characteristics: ['bold'],
    favoriteColor: '#E1734E',
  },
  {
    ...SAMPLE_COMPANIONS[2],
    characteristics: ['vain'],
    favoriteColor: '#21D977',
  },
  { ...SAMPLE_USER, characteristics: ['well structured'], favoriteColor: '#81FFCE' },
  { ...SAMPLE_MATCH, characteristics: ['well structured'], favoriteColor: '#6D58DA' },
];
