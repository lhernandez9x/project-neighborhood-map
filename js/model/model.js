/**
 * This holds all of the data for our app. Information taken from Visit El Paso's downtown historic walking tour found at http://visitelpaso.com/system/places/documents/634/original/walking%20tour%20brochure.pdf
 **/
var places = [{
    title: 'San Jacinto Plaza',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759675,
        lng: -106.488557
    }
}, {
    title: 'Mills Building',
    description: 'The Mills Building stands on the original site of the 1832 Ponce de L&eacuteon ranch house. Anson Mills hired Henry C. Trost to design and construct the building. Henry C. Trost came to El Paso in 1903 and was the primary designer for the architectual firm of Trost and Trost. The firm designed hundreds of commercial and residentual buildings including, UTEP, El Paso High School, and Loretto Academy to name a few.',
    category: ['Early 20th Century'],
    location: {
        lat: 31.758959,
        lng: -106.488860
    }
}, {
    title: 'Centre Building',
    description: 'The Centre Building, formerly the White House Department Store and Hotel McCoy, is an elegant essay in white terra-cotta in the Chicago Commercial Stryle designed by Henry C. Trost. Opened in 1912, the first floor housed the store and the hotel occupied the other six floors.',
    category: ['Early 20th Century'],
    location: {
        lat: 31.758637,
        lng: -106.489105
    }
}, {
    title: 'Plaza Theatre',
    description: 'The Plaza Theatre, designed by W. Scott Dunne in the Spanish Colonial Revival Style, opened on September 12, 1930 to a capacity of 2,410. Built in the midst of the Great Depression, the Plaza Theatre represents the architectual extravagance associated with the glamorous era of the motion-picture industry. Atmospheric effects created the illusion of hte evening sky complete with twinkling stars and floating clouds. Public Tours are conducted every Tuesday at noon.',
    category: ['Early 20th Century'],
    location: {
        lat: 31.758635,
        lng: -106.489378
    }
}, {
    title: 'Plaza Hotel',
    description: 'The hotel was constructed on the site of the Hotel Sheldon, which burned in 1929. The Sheldon served as the unofficial headquarters for many of the participants in the Mexican Revolution (1910-1920s) from both sides of the border. In the fall of 1929 Conrad Hilton (Hilton Worldwide Hotels) began construction of his first high-rise hotel.',
    category: ['Early 20th Century'],
    location: {
        lat: 31.759005,
        lng: -106.488560
    }
}, {
    title: 'Pioneer Plaza',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758538,
        lng: -106.488801
    }
}, {
    title: 'Hotel Paso Del Norte(Camino Real Hotel)',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.757939,
        lng: -106.489392
    }
}, {
    title: 'Palace Theatre',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.757125,
        lng: -106.488910
    }
}, {
    title: 'Merrick Building / St. Charles Hotel',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.756505,
        lng: -106.488706
    }
}, {
    title: 'Stage Station',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.756519,
        lng: -106.488492
    }
}, {
    title: 'Montgomery Building',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.757244,
        lng: -106.488717
    }
}, {
    title: 'Wigwam Theatre ',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.757869,
        lng: -106.488339
    }
}, {
    title: 'State National Bank',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.757924,
        lng: -106.488104
    }
}, {
    title: 'Acme Saloon',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758299,
        lng: -106.487150
    }
}, {
    title: 'Caples Building',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758062,
        lng: -106.486776
    }
}, {
    title: 'Popular Dept. Store',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758417,
        lng: -106.486681
    }
}, {
    title: 'O.T. Bassett Tower',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759612,
        lng: -106.486150
    }
}, {
    title: 'Singer Building',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759213,
        lng: -106.486752
    }
}, {
    title: 'Martin Building',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759871,
        lng: -106.486876
    }
}, {
    title: 'U.S. Post Office',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.760022,
        lng: -106.487274
    }
}, {
    title: 'Hotel Cortez',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759836,
        lng: -106.487938
    }
}, {
    title: 'Abdou Building',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758675,
        lng: -106.487141
    }
}, {
    title: 'Roberts - Banner Building',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759447,
        lng: -106.487829
    }
}, {
    title: 'S. H. Kress Building',
    description: 'Once home to the stables for Ponce de Leon\'s ranch, today this is El Paso\'s town square. The San Jacinto Plaza is also known as the "Plaza of the Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759110,
        lng: -106.488389
    }
}];