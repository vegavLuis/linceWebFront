import { ref } from 'vue'
import { defineStore } from 'pinia'
import imagen1 from '../assets/bannerComunidad/1.webp'
import imagen2 from '../assets/bannerComunidad/2.webp'
import imagen3 from '../assets/bannerComunidad/3.webp'
import imagen4 from '../assets/bannerComunidad/4.webp'
import imagen5 from '../assets/bannerComunidad/5.webp'
import imagen6 from '../assets/bannerComunidad/6.webp'
import imagen7 from '../assets/bannerComunidad/7.webp'
// import imagen8 from '../assets/bannerComunidad/8.webp'
import imagen8 from '../assets/bannerComunidad/8.jpeg'
import imagen9 from '../assets/bannerComunidad/9.webp'
import imagen10 from '../assets/bannerComunidad/10.webp'
import imagen11 from '../assets/bannerComunidad/11.webp'
import imagen12 from '../assets/bannerComunidad/12.webp'
import imagen13 from '../assets/bannerComunidad/13.webp'
import imagen14 from '../assets/bannerComunidad/14.webp'
import imagen15 from '../assets/bannerComunidad/15.webp'
import imagen16 from '../assets/bannerComunidad/16.webp'
import imagen17 from '../assets/bannerComunidad/17.webp'
import imagen18 from '../assets/bannerComunidad/18.webp'
import imagen19 from '../assets/bannerComunidad/19.webp'
import imagen20 from '../assets/bannerComunidad/20.webp'
import imagen21 from '../assets/bannerComunidad/21.webp'

export const useComunidad = defineStore('comunidad', () => {
  const datos = ref([
    {
      src: imagen1,
      nombre: 'Angelica bernal',
      deporte: '',
      redsocial:
        'https://www.instagram.com/angelicabernalvillalobos/?fbclid=IwAR3LmLOaKqWDAGAmsiXbcKasxXJQhf0LnbBrkPgAMJQ6iYFJzxdaZ49SCf4'
    },
    {
      src: imagen2,
      nombre: 'Luis Ernesto Oviedo',
      deporte: 'Atletismo pista',
      redsocial:
        'https://www.instagram.com/angelicabernalvillalobos/?fbclid=IwAR3LmLOaKqWDAGAmsiXbcKasxXJQhf0LnbBrkPgAMJQ6iYFJzxdaZ49SCf4'
    },
    {
      src: imagen3,
      nombre: 'Moises Poot',
      deporte: 'Artesano y diseñador Yucateco',
      redsocial: 'https://www.instagram.com/moisespoot.mx/?igshid=NDk5N2NlZjQ%3D'
    },
    {
      src: imagen4,
      nombre: 'Gabriela Michell Navarro',
      deporte: 'Basquetbol en silla de ruedas',
      redsocial:
        'https://www.instagram.com/isabel_lopezch55/?fbclid=IwAR25tPsasDNlxjPzMR6XItjb_eou3NQu_MogTW_-SgNQhNCVcl63KweyGRs'
    },
    {
      src: imagen5,
      nombre: 'ParaDance',
      deporte: 'Nuevo Leon',
      redsocial: 'https://www.instagram.com/paradacenl/?igshid=YmMyMTA2M2Y%3D'
    },
    {
      src: imagen6,
      nombre: 'Yeni Aide Hernandez',
      deporte: 'Atletismo pista',
      redsocial: 'https://www.instagram.com/jeniferaid/?igshid=MzRlODBiNWFlZA%3D%3D'
    },
    {
      src: imagen7,
      nombre: 'Aline Ramos',
      deporte: 'Danza deportiva',
      redsocial: 'https://www.instagram.com/ramos_aline7/?igshid=MzRlODBiNWFlZA%3D%3D'
    },
    // {
    //   src: imagen8,
    //   nombre: 'Sabri Bedzeti',
    //   deporte: 'Basquetbol',
    //   redsocial:
    //     'https://www.instagram.com/sabribedzeti/?fbclid=IwAR3D7yMNXOVbaA9yK4iES1z5FANTtZpgI9T3IvsqT7waL4l4Q-JFd72oBQk'
    // },
    {
      src: imagen8,
      nombre: 'Dimitri Tanghe',
      deporte: 'Basquetbol',
      redsocial: 'https://www.instagram.com/dimitri_tanghe8/?igsh=MWVlY3IxYzJ6MzBvZQ%3D%3D'
    },
    {
      src: imagen9,
      nombre: 'Whellchair Basketball',
      deporte: 'Nuevo Leon',
      redsocial: 'https://www.instagram.com/nuevoleonwb/?igshid=YmMyMTA2M2Y%3D'
    },
    {
      src: imagen10,
      nombre: 'Jose Arellano',
      deporte: 'Atletismo pista',
      redsocial: 'https://www.instagram.com/ppwheelz/?igshid=NDk5N2NlZjQ%3D'
    },
    {
      src: imagen11,
      nombre: 'Eduardo Prieto',
      deporte: 'Basquetbol',
      redsocial:
        'https://www.instagram.com/laloprieto14/?fbclid=IwAR0k-fap6DBp3AZbbsSZpzuUO8wtX7XrL06mTZ0leRroyFRy-75FaukL7Ro'
    },
    {
      src: imagen12,
      nombre: 'Lourdes Narcia',
      deporte: 'Basquetbol en silla de ruedas',
      redsocial: 'https://www.instagram.com/lourdesorozcoo/?igshid=MzRlODBiNWFlZA%3D%3D'
    },
    {
      src: imagen13,
      nombre: 'Paradance',
      deporte: 'Hidalgo',
      redsocial: 'https://www.instagram.com/paradancehidalgo/?igshid=YmMyMTA2M2Y%3D'
    },
    {
      src: imagen14,
      nombre: 'Benditaslisiadxs',
      deporte: 'Comunidad y podcast',
      redsocial: 'https://www.instagram.com/benditaslisiadxs/?igshid=MzRlODBiNWFlZA%3D%3D'
    },
    {
      src: imagen15,
      nombre: 'Luis Eduardo Jasso',
      deporte: 'Basquetbol',
      redsocial:
        'https://www.instagram.com/jasso_luise15/?fbclid=IwAR0k-fap6DBp3AZbbsSZpzuUO8wtX7XrL06mTZ0leRroyFRy-75FaukL7Ro'
    },
    {
      src: imagen16,
      nombre: 'Odin Lachino',
      deporte: 'Escritor',
      redsocial: 'https://www.instagram.com/odin.lachino/?igshid=YmMyMTA2M2Y%3D'
    },
    {
      src: imagen17,
      nombre: 'Antya Posada',
      deporte: 'Danza deportiva',
      redsocial: 'https://www.instagram.com/antya_posada/?igshid=YmMyMTA2M2Y%3D'
    },
    {
      src: imagen18,
      nombre: 'Belen Sanchez',
      deporte: 'Lanzamiento de discos',
      redsocial:
        'https://www.instagram.com/belensanchez_28/?fbclid=IwAR1X49DUeVwcqsybzfBkAWUbKmpe9ZNYGvhUBMPQeRawxMFwcItCybRJJ-M'
    },
    {
      src: imagen19,
      nombre: 'Lucero Anahi Vazquez',
      deporte: 'Atletismo pista',
      redsocial:
        'https://www.instagram.com/vazquezlucero_53/?fbclid=IwAR0D5aHnVVE4awYEL2RxZFuV1tsUJO6OzGCzEV3Tkt4nfN6YG-cz9whnXgg'
    },
    {
      src: imagen20,
      nombre: '',
      deporte: 'Activista y fotografa',
      redsocial:
        'https://www.instagram.com/jenmulini.photo/?fbclid=IwAR27C73LyWaoh_YFnTffh1dVcO2OhVoa0mDRMNvFzsNADxk2k97qR3RM3Mc'
    },
    {
      src: imagen21,
      nombre: 'Haydee Gpe. Reynosa',
      deporte: 'Danza deportiva',
      redsocial: 'https://www.instagram.com/reynosa.guerrero.haydee/?igshid=YmMyMTA2M2Y%3D'
    }
  ])
  return {
    datos
  }
})
