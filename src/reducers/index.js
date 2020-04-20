const initialState = {
  twitters: [
    {
      id: 1,
      title: 'Temporary changes',
      content:
        'We’re experiencing high call volume. If you’re not scheduled to travel in the next several days, please wait to call our Reservations team so they can better help those needing immediate assistance. If you want to cancel your trip, you can do it so. ',
      twitterName: 'americanair',
    },
    {
      id: 2,
      title: 'Special chartered flight',
      content:
        'The embassy is working to arrange a special chartered flight for US citizens and their families departing Dhaka. The flight is not yet authorized or confirmed, but they are targeting April 21',

      twitterName: 'TravelGov',
    },
    {
      id: 3,
      title: 'Working hours of Embassy',
      content:
        'The U.S. Embassy will maintain normal working hours March 29 to April 2, 2020 and thereafter, including American Citizen Services appointments and emergency services. ',

      twitterName: 'usembassydhaka',
    },
    {
      id: 4,
      title: 'MileagePlus Premier',
      content:
        'We are extending current MileagePlus Premier status levels to January 31, 2022 and lowering thresholds for status to help you reach an even higher tier. Learn more about the other steps we’re taking, like extending PlusPoints, to thank you for your loyalty',

      twitterName: '@united',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'The 29 Best Travel Apps in 2020',
      content:
        'Whether you are heading off on a gap year, packing light for a couple of weeks summer break or getting stuck into the culture of a country for the foreseeable, there is one thing we all have in common: the smartphone.',
      articleUrl: 'https://www.danflyingsolo.com/best-apps-for-travel/',
    },
    {
      id: 2,
      title: 'Essential Travel Items',
      content:
        'Wondering what to pack for your first big trip abroad? It’s not always easy to pack the essential travel items only! Especially if you’re a beginner in the backpacking world. Welcome!',
      articleUrl: 'https://abrokenbackpack.com/2018/07/19/essential-travel-items/',
    },
    {
      id: 3,
      title: 'The World’s Best Islands Awards',
      content:
        'Some of the world’s best islands got chosen for their unique nature or cultural significance. And others for their mouthwatering luxury and photo-worthiness.',
      articleUrl: 'https://mylifesamovie.com/worlds-best-islands-awards/',
    },
    {
      id: 4,
      title: 'Iran is NOT What You Think!',

      content:
        'When we (Americans) think about Iran, we tend to only think of negative things such as terrorism.  But what about the 80 million innocent locals who live across this fascinating country?',
      articleUrl: 'https://youtube.com/helloroman',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'Immigration prep',
      content:
        'US Citizens can research visa rules at travel.state.gov, plus required documents, current warnings, vax needed, and local embassy details.',
    },
    {
      id: 2,
      title: 'Submit a debit card travel notice',
      content:
        "Submit a travel notice to my bank with the country or countries of travel so that they are aware of the travel plans, all my bank cards will work when I arrive, and my transactions won't be tagged fraud.",
    },
    {
      id: 3,
      title: 'Download stuff',
      content:
        'Download fun movies or interesting documentaries for offline viewing during travel. Download books!',
    },
    {
      id: 4,
      title: 'Passport',
      content:
        'Check the expiration date of the passport now, and if I need to renew, check the U.S. Department of State’s website to find the nearest passport facility.',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
