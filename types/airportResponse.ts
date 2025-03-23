import { Airport } from "./airport";

export interface AirportsResponse {
  pagination: Pagination;
  data: Airport[];
}

export interface Pagination {
  offset: number;
  limit: number;
  count: number;
  total: number;
}
