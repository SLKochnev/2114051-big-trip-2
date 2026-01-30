import { getRandomDestinations, getDestinationById } from '../mock/mock-destinations.js';
import { getRandomOffers, getOffersByType } from '../mock/mock-offers.js';
import { getRoutePoints } from '../mock/mock-route-points.js';
import { POINT_COUNT } from '../const.js';

export default class PointModel {
  #points = Array.from({length: POINT_COUNT}, getRoutePoints);
  #offers = getRandomOffers();
  #destinations = getRandomDestinations();

  get points() {
    return this.#points;
  }

  // Получаю инфу о точке
  getFullPointInfo(point) {
    if (!point) {
      return null;
    }

    // Нахожу город по ID
    const cityInfo = getDestinationById(point.destination);

    // Шаг 3: Нахожу опции для типа точки
    const allOffersForType = getOffersByType(point.type);

    // Шаг 4: Нахожу выбранные опции проходя по всем ID
    const selectedOffers = [];

    for (const offerId of point.offers) {
      const foundOffer = allOffersForType.find((offer) => offer.id === offerId);

      if (foundOffer) {
        selectedOffers.push(foundOffer);
      }
    }

    // Возвращаю точку с полной инфой
    return {
      ...point,
      destination: cityInfo,
      offers: selectedOffers
    };
  }
}

