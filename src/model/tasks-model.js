import { mockDestinations } from '../mock/mock-destinations.js';
import { mockOffers } from '../mock/mock-offers.js';
import { getRoutePoints } from '../mock/mock-route-points.js';
import { POINT_COUNT } from '../const.js';

export default class PointModel {
  points = Array.from({length: POINT_COUNT}, getRoutePoints);
  offers = mockOffers;
  destinations = mockDestinations;

  getPoint() {
    return this.points;
  }
}
