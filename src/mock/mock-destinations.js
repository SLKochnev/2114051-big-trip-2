const mockDestinations = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808s',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Le Brevent',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808e',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Servoz',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building'
      }
    ]
  }
];

const getRandomDestinations = () => mockDestinations;

const getDestinationById = (id) => mockDestinations.find((destination) => destination.id === id);


export {getRandomDestinations, getDestinationById};
