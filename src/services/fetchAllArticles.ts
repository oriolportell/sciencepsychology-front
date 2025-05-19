import { Article } from '../types/Article';

export const getAllArticles = async (page: number): Promise<Article[]> => {
    console.log(page)
    return [
        {
            id: 1,
            title: 'TÉCNICA ROVIRALTA: Para la resolución de hematomas',
            description: 'En 2008 se describió la técnica Roviralta, por el enfermero Santiago Roviralta, para el abordaje de los en el drenaje de éstos realizando.',
            contentCreator: {
                id: 1,
                name: 'Anna Garcia',
                description: 'Cualquier cosa'
            },
            updateDate: '30/10/2023',
            image: 'https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png',
            likesNumber: 55,
            commentariesNumber: 30,
            commentaries: [{
                username: 'oriolportell',
                date: '30/10/2023',
                content: 'Pues la verdad esque tremenda cosa el articulo este'
            }],
            sections: [
                {
                    type: 0,
                    title: '¿QUÉ ES?',
                    text: 'Se trata de una enfermedad compleja, también conocida como Síndrome de Sudeck o actualmente Síndrome Doloroso Regional Complejo, del que se desconocen los mecanismos de aparición de forma precisa pero se asocia con traumatismos, fracturas, cirugías, etc. Afecta más mujeres que a hombres.'
                },
                {
                    type: 0,
                    title: '¿CUÁLES SON LAS CAUSAS??',
                    text: 'Se trata de una enfermedad compleja, también conocida como Síndrome de Sudeck o actualmente Síndrome Doloroso Regional Complejo, del que se desconocen los mecanismos de aparición de forma precisa pero se asocia con traumatismos, fracturas, cirugías, etc. Afecta más mujeres que a hombres.'
                },
                {
                    type: 0,
                    title: '¿CUÁLES SON LAS CAUSAS?',
                    text: 'Se trata de una enfermedad compleja, también conocida como Síndrome de Sudeck o actualmente Síndrome Doloroso Regional Complejo, del que se desconocen los mecanismos de aparición de forma precisa pero se asocia con traumatismos, fracturas, cirugías, etc. Afecta más mujeres que a hombres.'
                },
                {
                    type: 0,
                    title: '¿CÓMO SE PRESENTA?',
                    text: 'Se trata de una enfermedad compleja, también conocida como Síndrome de Sudeck o actualmente Síndrome Doloroso Regional Complejo, del que se desconocen los mecanismos de aparición de forma precisa pero se asocia con traumatismos, fracturas, cirugías, etc. Afecta más mujeres que a hombres.'
                },
                {
                    type: 0,
                    title: 'EL TRATAMIENTO',
                    text: 'Se trata de una enfermedad compleja, también conocida como Síndrome de Sudeck o actualmente Síndrome Doloroso Regional Complejo, del que se desconocen los mecanismos de aparición de forma precisa pero se asocia con traumatismos, fracturas, cirugías, etc. Afecta más mujeres que a hombres.'
                },
                {
                    type: 2,
                    title: 'BIBLIOGRAFÍA',
                    text: 'González Rebollo A. Mª., Antón, Andrés Mª J., Fuertes González S., et al. Implicaciónde la termografía en el diagnóstico de la distrofia simpático refleja: a propósito de un cas. PATOLOGÍA DEL APARATO LOCOMOTOR, 2007 · VOL.5 · Nº 1 · 68-74 | https://www.hospitallamoraleja.es/es/actualidad/144/sindrome-sudeck-tratamiento'
                }
            ]
        }
    ]
}