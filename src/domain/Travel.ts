import Coordinates from "./Coordinates";
import Image from "./Image";

export enum TravelStatus {
  Pending,
  Approved,
  Rejected,
} 

export default interface Props {
    id: number;
    travelDate: string;
    status: TravelStatus;
    arrivelDate: string;
    destinationDate: string;
    travelDatesAbbr: string;
    jumpingoffCampus: string;
    jumpingoffCampusAbbr: string;
    arrivalCampusAbbr: string;
    arrivalCampus: string;
    imageRides: Image[];
    imageDriver: Image[];
    coordinatesRegionTravel: Coordinates;
    coordinatesOrigin: Coordinates;
    coordinatesDestination: Coordinates;
  }