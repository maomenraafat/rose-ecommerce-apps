import { OccasionApiData, OccasionRes } from "./occasionRes";

export interface OccasionAdaptor {
    adaptApiOccasion(data: OccasionApiData): OccasionRes,
}