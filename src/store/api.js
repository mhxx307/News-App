// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

import { REACT_APP_API_BASE_URL } from '@env';
import images from '../../assets/images';

export const categories = [
    {
        code: '',
        pic: images.news64,
        name: 'general',
    },
    {
        code: '',
        pic: images.hardWorking64,
        name: 'business',
    },
    {
        code: '',
        pic: images.movieProjector64,
        name: 'entertainment',
    },
    {
        pic: images.stethoscope64,
        name: 'health',
    },
    {
        pic: images.microscope64,
        name: 'science',
    },
    {
        pic: images.trophy64,
        name: 'sports',
    },
    {
        pic: images.mindMap64,
        name: 'technology',
    },
];

export const country = [
    {
        code: 'in',
        name: 'India',
    },
    {
        code: 'us',
        name: 'USA',
    },
    {
        code: 'au',
        name: 'Australia',
    },
    {
        code: 'ru',
        name: 'Russia',
    },
    {
        code: 'fr',
        name: 'France',
    },
    {
        code: 'gb',
        name: 'United Kingdom',
    },
];

export const sources = [
    {
        id: 'bbc-news',
        name: 'BBC News',
        pic: images.bbc,
    },
    {
        id: 'cnn',
        name: 'CNN',
        pic: images.cnn,
    },
    {
        id: 'fox-news',
        name: 'Fox News',
        pic: images.foxNews,
    },
    {
        id: 'google-news',
        name: 'Google News',
        pic: images.googleNews,
    },
];

export const getNewsAPI = (category, country = 'us') => {
    return `${REACT_APP_API_BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
    return `${REACT_APP_API_BASE_URL}/everything/${source}.json`;
};
