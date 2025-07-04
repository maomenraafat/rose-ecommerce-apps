import { Observable } from "rxjs";
import { CategoryRes } from "../interfaces/categoryRes";

export abstract class CategoryApiAbstract {
    abstract getAllCategories(): Observable<CategoryRes>
}