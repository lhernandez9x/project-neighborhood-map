/**
 * This holds all of the data for our app. Information taken from Visit El Paso's downtown historic walking tour found at http://visitelpaso.com/system/places/documents/634/original/walking%20tour%20brochure.pdf
 **/
var places = [{
    title: 'San Jacinto Plaza',
    description: 'Today\'s San Jacinto Plaza was once the site of the corrals for Ponce de Leon\'s ranch. The San Jacinto Plaza is also known as the "Plaza de los Lagartos", or Alligator Plaza, because it once had three live alligators in the pond located within. Today there is an alligator sculpture honoring the days of the live alligators. ',
    category: ['Old-West', 'Early 20th Century'],
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
    description: 'The Pioneer Plaza was the hub of public activity in early El Paso. a U.S. military guard was posted here in the late 1870s to defend citizens from Apache attacks, and military bands performed in the small plaza. The El Paso Acequia Madre (main irrigation ditch), flowed along the south boundary and nourished a line of trees, which shaded the area. One of these trees, known as the "Newspaper Tree" which was used to display public notices. Major roads and trails passed through the plaza. This plaza was replaced when the San Jacinto Plaza was donated to the city.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758538,
        lng: -106.488801
    }
}, {
    title: 'Hotel Paso Del Norte',
    description: 'Built in 1912, Zach T. White hired Henry C. Trost and together they studied the structures in San Francisco which had withstood the Great Earthquake of 1906. They designed a brick, steel, and terra-cotta building with interior walls made of gypsum from nearby White Sands, New Mexico. The interior of the hotel was the most elegant in the area. The ornate lobby includes a 25-foot Tiffany style stained glass dome, simulated marble pillars and a round relief sculpture signed "H.C. Trost" The roof-top ballroom was a favorite place to gather and watch the progress of the Mexican Revolution across the river. The hotel became the headquarters for cattlemen. Some claimed that more cattle were bought and sold in its lobby than any other location in the world. ',
    category: ['Early 20th Century'],
    location: {
        lat: 31.757939,
        lng: -106.489392
    }
}, {
    title: 'Palace Theatre',
    description: 'The Palace Theatre, originally called the Alhambra, opened on August 1, 1914. It was designed by architect Henry C. Trost to be used either as a playhouse for live theatre or as a movie house. The theatre displays a Spanish Colonial format with Moorish influence, with the façade exhibiting a delicate overall tracery of Arabesque. Although it has been significantly altered for use as a nightclub, the original character of the building can still be seen.',
    category: ['Early 20th Century'],
    location: {
        lat: 31.757125,
        lng: -106.488910
    }
}, {
    title: 'Merrick Building / St. Charles Hotel',
    description: 'Designed and constructed by John J. Stewart and William J. Carpenter in 1887. The combination of materials, stone blocks, brick, cast iron, tile and tin is typical of the elaborate Victorian Style. Charles Merrick, a “famous clothier, tailor, hatter, shoer and furnisher” operated the building. The Shelton Payne Arms Company, a major arms supplier, was located here during the Mexican Revolution. The St. Charles Hotel, above the dry goods store, was the longest continuously operating hotel in El Paso until 1996. In 1931, the Hollywood Café replaced the store. In 2000 the building was restored and now features apartments on the upper floors. The ground floor continues to be operated for retail purposes.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.756505,
        lng: -106.488706
    }
}, {
    title: 'Stage Station',
    description: 'In 1858, Anson Mills was commissioned by the Butterfield Overland Mail Company to build its El Paso stage station. The adobe station was the largest and best-equipped station on the Overland Mail route from St. Louis, Missouri to San Francisco, California. The imposing structure served as the dividing point between the Eastern and Western divisions of the 2,700 mile line. The Civil War and the consequent removal of the troops put Butterfield out of business in 1861. During and after the Civil War, the building served a variety of purposes including a Confederate Army Hospital in 1862, U.S. Army Barracks (1878-1880), hotel and a saloon. El Paso continued to have stage service under various contractors until the railroads arrived in 1881. The stage building was demolished in 1898.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.756519,
        lng: -106.488492
    }
}, {
    title: 'Montgomery Building',
    description: 'The Montgomery Building is the last surviving false front wood structure in the city of El Paso. It was completed in 1882 as El Paso underwent a great transformation from an adobe village to a thriving city following the arrival of the railroads. Named for its builder, William J. Montgomery (1837-1899), it was typical of western frontier architecture of the late 19th century. The simple box-shaped building is adorned with a decorative wood cornice that can still be seen above the remodeled storefront. It is the oldest commercial building in the city of El Paso.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.757244,
        lng: -106.488717
    }
}, {
    title: 'Wigwam Theatre ',
    description: 'During its heyday (1880s-1890s), the Wigwam Saloon ranked as one of El Paso’s top five prestigious saloons. The bar was at street level. Gambling, since it was often illegal, was upstairs. A stairway extended from the second floor into the alley alongside (note bricked-up windows and doors). Constable and gunman John Selman, who killed John Wesley Hardin, exited to that alley in 1896 and was slain by Deputy U.S. Marshal George Scarborough. The existing building was redesigned by Henry C. Trost for use as the Wigwam Theatre in 1912. It was later renamed the State Theatre which closed during the 1970s and the structure was converted to retail space.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.757869,
        lng: -106.488339
    }
}, {
    title: 'State National Bank',
    description: 'Founded in 1881 with the arrival of the railroads, the State National Bank was instrumental in the early growth and development of El Paso. This was the second building for the bank which commissioned architect Henry C. Trost to design a handsome classic building, with careful detailing based on Roman and Italian Renaissance motifs entirely from terra-cotta. The State National Bank moved in 1962, and the building eventually became retail space in the early 1990s.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.757924,
        lng: -106.488104
    }
}, {
    title: 'Acme Saloon',
    description: 'This northwest corner of Mesa Street and San Antonio Avenue is the site of the former Acme Saloon. The original building was of adobe and wood.1 17 On the night of August 19, 1895, gunslinger John Wesley Hardin was at the bar rolling dice for drinks. His last words were, “Brown, you have four sixes to beat.” At that instant, John Selman elbowed through the batwing doors and shot Hardin in the head, killing him instantly. This part of downtown was the beginning of the “Parlor House District” which extended south along Utah Street (today’s Mesa Street). The city fathers eventually cleaned up the district which had its heyday from the early 1880s until the late 1890s.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758299,
        lng: -106.487150
    }
}, {
    title: 'Caples Building',
    description: 'Richard Caples, mayor of El Paso from 1889 to 1893, commissioned Henry C. Trost to design what would become El Paso’s first reinforced concrete building. Originally five stories tall, two additional stories were added to the building in 1915-1916. The commercial building contained retail space on the ground floor with office towers on a rectangular base with a U-shaped shaft. Most of the principal facades were covered with brick, and the concrete shows only in the sparse use of ornamentation. The top two stories have terra-cotta detailing and arched windowns. During the Mexican Revolution the building housed the offices of various notable Mexican political figures. Revolutionary leader Francisco Madero plotted the pivotal revolutionary battle of Juárez in 1911 in the fifth floor offices where Abraham González had set up a revolutionary junta. Dr. Ira J. Bush, an American physician who subsequently assisted the Maderista armies’ medical services had his offices here. A historical marker, Caples Building, is located at the southeast corner of E. San Antonio Avenue at Mesa Street.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758062,
        lng: -106.486776
    }
}, {
    title: 'Popular Dept. Store',
    description: 'The Popular Department Store is another design by architect Henry C. Trost in the Chicago Commercial Style using all white terra cotta. Adolph Schwartz founded the Popular Dry Goods Company in 1902. The store first operated at a location at South El Paso and Overland streets, followed shortly by a move to the old Masonic Building formerly located at this site. The Popular, “La Popular,” served the El Paso, southern New Mexico and Chihuahua region for 93 years. Historical markers include the Popular Dry Goods Company and site of the First Masonic Lodge in El Paso.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758417,
        lng: -106.486681
    }
}, {
    title: 'O.T. Bassett Tower',
    description: 'Charles N. Bassett built the Bassett Tower in honor of his father, O.T. Bassett, a prominent El Pasoan who was one of the founders of the State National Bank. Henry C. Trost was commissioned to design the building. Completed in 1930, the fifteen-story, setback skyscraper rises over a larger one-story base. The entrance is an elaborate display of Art Deco design elements including a frieze of plant designs in square plaques just above the ground story. Ten eagle sentries guard the 15th floor. The mustachioed face over the main entrance is reputed to be that of Henry C. Trost himself.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759612,
        lng: -106.486150
    }
}, {
    title: 'Singer Building',
    description: 'Designed by Henry C. Trost, the Singer Building is the only existing structure in the Downtown Historic District that illustrates Mediterranean architectural features with a balanced harmony of windows and walls. A historical marker for the Singer Sewing Co. is located on the building',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759213,
        lng: -106.486752
    }
}, {
    title: 'Martin Building',
    description: 'This seven-story commercial building was constructed in 1917. Designed by the architectural firm of Brauhton and Leibert, it features Chicago Commercial Style detailing in the use of decorative terra-cotta and large windows. A historical marker for the Martin Building is located at the main entrance',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759871,
        lng: -106.486876
    }
}, {
    title: 'U.S. Post Office',
    description: 'This Post Office, located one block from the Plaza, is a massively scaled public building designed by Architect James A. Wetmore. Constructed in 1917, and in continuous operation since then, the two-story building is considered one of the most noteworthy eclectic Roman styles in far West Texas. It is reminiscent of turn of the century federal buildings in Washington D.C. with its dignified classical detailing. The building is of sandstone and concrete ashlar masonry and retains its original exterior wood windows. The interior lobby is a two-story space covered with a massive, paneled dome and a stained-glass skylight. Polished marble walls, ornamental grilles of bronze and original postal boxes adorn the interior. The lobby’s ceramic tile floor dates from 1960, and contains mosaic depictions of eight commemorative U. S. Postage stamps.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.760022,
        lng: -106.487274
    }
}, {
    title: 'Hotel Cortez',
    description: 'The Hotel Cortez is the last of three hotels that have occupied this site. The hotel was designed by Henry C. Trost and opened on September 10, 1926. When it opened it was advertised as a “Castle of Old Spain on the Plaza of El Paso”. The hotel is an elaborate representation of the Spanish Colonial Revival Style. One of the building’s unique features is a series of portrait heads of conquistadors staring out of roundels above the first floor level. The hotel’s most famous guest was President John F. Kennedy, who visited on June 5, 1963. The building continued to serve the lodging needs of El Paso until 1970. In 1984 the building was restored and renovated into professional offices. A historical marker for the Hotel Cortez is located at the Mesa Street entrance.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759836,
        lng: -106.487938
    }
}, {
    title: 'Abdou Building',
    description: 'Constructed in 1910 as the Rio Grande Valley Bank Building, the Abdou Building, as it is known today, was renamed after being purchased by prominent businessman Sam Abdou in 1925. Designed by Henry C. Trost, the beautifully detailed reinforced concrete building has no two sides parallel on the quadrilateral site. Today, the building houses retail space on the ground floor and apartments on the upper floors.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.758675,
        lng: -106.487141
    }
}, {
    title: 'Roberts - Banner Building',
    description: 'The fourth concrete building by Henry C. Trost is a magnificent U-shaped concrete structure with wonderful detailing and matching flag poles. M.D. Roberts and W.M. Banner, prominent New Mexico stockmen, commissioned the structure.',
    category: ['Early Years', 'Old-West'],
    location: {
        lat: 31.759447,
        lng: -106.487829
    }
}];