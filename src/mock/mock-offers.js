const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to a business class',
        price: 120
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: 'Choose seats',
        price: 50
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa11',
        title: 'Book a sleeping car',
        price: 250
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'flight-1',
        title: 'Add luggage',
        price: 50
      },
      {
        id: 'flight-2',
        title: 'Switch to comfort class',
        price: 80
      },
      {
        id: 'flight-3',
        title: 'Add meal',
        price: 15
      }
    ]
  },
  {
    type: 'ship',
    offers: []
  },
  {
    type: 'drive',
    offers: []
  },
  {
    type: 'check-in',
    offers: []
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'restaurant',
    offers: []
  }
];

const getRandomOffers = () => mockOffers;

const getOffersByType = (type) => {
  const offerGroup = mockOffers.find((group) => group.type === type);
  return offerGroup ? offerGroup.offers : [];
};

export {getRandomOffers, getOffersByType};
