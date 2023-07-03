import { lazy } from 'react';

import dos_personas from '../../assets/img/dos_personas.webp'
const Caja_Principal = lazy(()=>import('../Caja_Principal'))

const Sobre_Nosotros = () => {
    const info = {
      titulo: 'Bienvenidos a nuestra asociación',
      texto:'Somos una asociación dedicada al rescate y ' +
        'adopción de perros que se encuentran en situación ' +
        'de calle. Nuestro objetivo es brindarles un hogar ' +
        'seguro y amoroso. ¡Ayúdanos a hacer la ' +
        'diferencia en la vida de estos animales!',
      imagen: dos_personas,
      alt: 'Imagen de dos personas',
      bg:'bg-secondary',
      dir:false,
      no_rounded:true
    };
    const infoHistoria = {
      texto: 'En nuestra organización sin ánimo de lucro, '+
      'nos dedicamos apasionadamente al rescate de animales '+
      'de la calle, centrándonos especialmente en la atención '+
      'y rehabilitación de perros abandonados. Nuestro principal'+
      ' objetivo es brindarles una segunda oportunidad a aquellos '+
      'seres que han sido dejados a su suerte y que merecen una vida '+
      'digna y llena de amor.',
      imagen: dos_personas,
      alt: 'Imagen de un elefante',
      bg:'bg-base-100',
      dir:true,
      no_rounded:true
    };
    const infoFundacion = {
      texto: 'Fundada hace varios años, nuestra organización ha crecido '+
      'y se ha convertido en un refugio seguro para los animales más '+
      'vulnerables. Nos motiva profundamente el deseo de marcar una diferencia '+
      'positiva en la vida de estos seres indefensos y construir un futuro mejor '+
      'para ellos. Trabajamos incansablemente para rescatar, rehabilitar y '+
      'encontrar hogares responsables para los perros que llegan a nuestras instalaciones.',
      imagen: dos_personas,
      alt: 'Imagen de un elefante',
      bg:'bg-secondary',
      dir:false,
      no_rounded:true
    };
    const infoNuestroRefugio = {
        texto: 'En nuestro refugio, los perros reciben atención integral y amor '+
        'incondicional. Contamos con un equipo de profesionales y voluntarios '+
        'comprometidos, dedicados a brindarles los cuidados necesarios. '+
        'Esto incluye atención veterinaria, vacunación, esterilización, '+
        'desparasitación y programas de socialización. Nuestro objetivo es '+
        'garantizar que los perros estén saludables, felices y listos para ser '+
        'adoptados por familias amorosas.',
        imagen: dos_personas,
        alt: 'Imagen de un elefante',
        bg:'bg-base-100',
        dir:true,
        no_rounded:true
      };
    const infoTrabajo = {
      texto: 'Además de nuestro trabajo diario en el refugio, también nos enfocamos en la concienciación y educación comunitaria. Realizamos campañas de sensibilización sobre la importancia de la adopción responsable y el respeto hacia los animales. Organizamos eventos locales para promover la adopción de perros rescatados y fomentar la tenencia responsable de mascotas.',
      imagen: dos_personas,
      alt: 'Imagen de un elefante',
      bg:'bg-secondary',
      dir:false,
      no_rounded:true
    };
    const infoNuestroOrganizacion  = {
        texto: 'En nuestra organización, nos enorgullece el impacto positivo que hemos logrado. Hemos salvado y encontrado hogares para cientos de perros, brindándoles una oportunidad de vida llena de amor y cuidado. Cada historia de adopción exitosa nos llena de alegría y nos impulsa a seguir adelante en nuestra misión.',
        imagen: dos_personas,
        alt: 'Imagen de un elefante',
        bg:'bg-base-100',
        dir:true,
        no_rounded:true
      };
    const infoMasPorHacer  = {
      texto: 'Sin embargo, sabemos que hay mucho más por hacer. La cantidad de perros abandonados en las calles sigue siendo alarmante, y nuestra labor es incesante. Trabajamos en estrecha colaboración con otras organizaciones locales y autoridades para promover políticas de protección animal y mejorar la situación de los animales desamparados.',
      imagen: dos_personas,
      alt: 'Imagen de un elefante',
      bg:'bg-secondary',
      dir:false,
      no_rounded:true
    };
    const infoTuApoyo = {
        texto: 'Tu apoyo es fundamental para continuar nuestra labor. Si compartes nuestra pasión por los animales y deseas marcar la diferencia, te invitamos a unirte a nuestra causa. Hay varias formas de colaborar, ya sea a través de donaciones, voluntariado o promoviendo la adopción responsable. Cada acción cuenta y nos acerca un paso más a un mundo donde todos los perros puedan vivir felices y seguros.',
        imagen: dos_personas,
        alt: 'Imagen de un elefante',
        bg:'bg-base-100',
        dir:true,
        no_rounded:true
      };
      const infoExplora = {
        texto: 'Te damos la bienvenida a nuestro refugio y te invitamos a explorar nuestro sitio web para obtener más información sobre nuestro trabajo, los perros disponibles para adopción y cómo puedes contribuir. Juntos, podemos marcar la diferencia en la vida de estos seres leales y amorosos que tanto nos necesitan. ¡Gracias por tu apoyo!',
        imagen: dos_personas,
        alt: 'Imagen de un elefante',
        bg:'bg-secondary',
        dir:false,
        no_rounded:true
      };
    return (
      <>
        <Caja_Principal {...info} />
        <Caja_Principal {...infoHistoria} />
        <Caja_Principal {...infoFundacion} />
        <Caja_Principal {...infoNuestroRefugio} />
        <Caja_Principal {...infoTrabajo} />
        <Caja_Principal {...infoNuestroOrganizacion} />
        <Caja_Principal {...infoMasPorHacer} />
        <Caja_Principal {...infoTuApoyo} />
        <Caja_Principal {...infoExplora} />
      </>
    );
  };

export default Sobre_Nosotros