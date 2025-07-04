import { Observable } from "rxjs";
import { OccasionRes } from "../interfaces/occasionRes";

export abstract class OccasionApiAbstract {
    abstract getAllOccasions(): Observable<OccasionRes>
}