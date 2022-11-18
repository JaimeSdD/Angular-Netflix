import { Isection, Itop } from './../models/interfaces.app.';

export const sectionsData: Isection[] = [
  {
    section: 'Action',
    films: [
      {
        title: 'John Wick 2',
        image: {
          src: '../assets/Accion/johnwick2.webp',
        },
      },
      {
        title: 'Terminator 2',
        image: {
          src: '../assets/Accion/terminator2.webp',
        },
      },
      {
        title: 'Misión Imposible',
        image: {
          src: '../assets/Accion/misionimposiblenacion.webp',
        },
      },
      {
        title: 'Equalizer 2',
        image: {
          src: '../assets/Accion/equalizer2.webp',
        },
      },
    ],
  },
  {
    section: 'Comedy',
    films: [
      {
        title: 'Casi 300',
        image: {
          src: '../assets/Comedia/casi300.webp',
        },
      },
      {
        title: 'Dictador',
        image: {
          src: '../assets/Comedia/dictador.webp',
        },
      },
      {
        title: 'Scary Movie 3',
        image: {
          src: '../assets/Comedia/scarymovie3.webp',
        },
      },
      {
        title: 'Ted 2',
        image: {
          src: '../assets/Comedia/ted2.webp',
        },
      },
    ],
  },
  {
    section: 'Anime',
    films: [
      {
        title: 'Castillo ambulante',
        image: {
          src: '../assets/Anime/castilloambulante.webp',
        },
      },
      {
        title: 'Princesa mononoke',
        image: {
          src: '../assets/Anime/mononoke.webp',
        },
      },
      {
        title: 'Chihiro',
        image: {
          src: '../assets/Anime/chihiro.webp',
        },
      },
      {
        title: 'Porco Rosso',
        image: {
          src: '../assets/Anime/porcorosso.webp',
        },
      },
    ],
  },
];

export const topData: Itop[] = [
  {
    number: {
      src: '../assets/Numbers/1.png',
    },
    film: {
      src: '../assets/Top10/1-papel.webp',
    },
  },
  {
    number: {
      src: '../assets/Numbers/2.png',
    },
    film: {
      src: '../assets/Top10/3-titanes.webp',
    },
  },
  {
    number: {
      src: '../assets/Numbers/3.png',
    },
    film: {
      src: '../assets/Top10/7-blacklist.webp',
    },
  },
  {
    number: {
      src: '../assets/Numbers/4.png',
    },
    film: {
      src: '../assets/Top10/6-aquinohay.webp',
    },
  },
  {
    number: {
      src: '../assets/Numbers/5.png',
    },
    film: {
      src: '../assets/Top10/4-lostinspace.webp',
    },
  },
];
