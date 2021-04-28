import './App.css';
import './composant.js/images'
import {Button} from 'react-bootstrap'
import React from 'react-bootstrap'
import Images from './composant.js/images';
import City from './composant.js/city'
import Part from './composant.js/partie3';
import Footer from './composant.js/footer';

const ville=[
  {name : 'Tunis',temp : '2 heures de route',image :"https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240"},
  { name : 'Marsa',temp :'2.5 heures de route',image :'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240'},
  {name : 'Kelibia',temp : '3 heures de route',image :'https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240'},
  {name : 'Yassmine Hammamet',temp : '1.5 heures de route',image :'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240'},
  {name : 'Hammamet Sud',temp : '1.5 heures de route',image :'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240'},
  {name : 'Hergla',temp : 'Temps de traget :45 min',image :'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240'},
  {name : 'Korba',temp : '2.5 heures de route',image :'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240'},
  {name : 'Aghir',temp : '6.5 heures de route',image :'https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240'},
]

const Citys =[
  {name:"Escapades en pleine nature",image:'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320', },
  {name:"Des logements uniques",image:'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320',},
  {name:"Logements entiers",image:'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320',},
  {name:"Animaux de compagnie acceptés",image:'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320',}
]

const Desc =[
  {name:"Collection à la une : Envies d'évasion",image:'https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320',desc:'Voyagez depuis chez vous grâce aux expériences en ligne.' },
  {name:"Expériences en ligne",image:'https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320',desc:'Activités interactives en direct, animées par des hôtes.'},
  {name:"Expériences",image:'https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320',desc:'Prenez part à des activités locales, où que vous soyez.'},
]

function App() {
  return (
    <div >

    <div className="fond">
    <div className="fon">
      <section>
      <h1>En pleine nature</h1>
    <p>Favoris sélectionnés par Airbnb.</p>
    <Button className="bton" variant="primary">Trouver l'inspiration</Button>
      </section>
    </div>
    </div>

      <div>
      <h1>Explorez les environs</h1>
      <Images child1={ville} />
    </div>
    <div>
      <h1>Chez vous, partout</h1>
      <City child2={Citys} />
    </div>

    <div className="back">
    <div className="bac">
    <h1>Devenez hôte</h1>
    <p> Gagnez un revenu complémentaire et saisissez <br/> de nouvelles opportunités en louant <br></br>votre logement.</p>
    <Button className="buton" variant="primary">En savoir plus</Button>
    </div>
    </div>

    <div>
      <h1>Découvrez les expériences</h1>
      <h3>Des activités uniques avec des experts locaux, en personne ou en ligne.</h3>
      <Part child3={Desc} />
    </div>

    <Footer />    
    </div>
  );
}

export default App;
