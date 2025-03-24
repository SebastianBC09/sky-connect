'use client';
import apiClient from '@/lib/api/config';
import { Airport } from '@/types/airport';
import { AirportsResponse, Pagination } from '@/types/airportResponse';
import { create } from 'zustand';

interface AirportStoreState {
  loading: boolean;
  airports: Airport[];
  pagination: Pagination | null;
  currentAirport: Airport | null;
  fetchAllAirports: () => Promise<void>;
  getAirportById: (id: string) => Airport | undefined;
  getAirportByIataCode: (iata_code: string) => Airport | undefined;
  setCurrentAirport: (id: string) => Promise<boolean>;
  setCurrentAirportByIataCode: (iata_code: string) => Promise<boolean>;
  clearCurrentAirport: () => void;
}

export const useAirportStore = create<AirportStoreState>((set, get) => ({
  loading: false,
  airports: [],
  pagination: null,
  currentAirport: null,

  fetchAllAirports: async () => {
    set({ loading: true });
    try {
      const { data } = await apiClient.get<AirportsResponse>('/airports');

      if (data && data.data && Array.isArray(data.data)) {
        set({
          airports: data.data,
          pagination: data.pagination || null,
          loading: false
        });
      } else {
        console.error('Formato de respuesta inesperado:', data);
        set({ airports: [], pagination: null, loading: false });
      }
    } catch (error) {
      console.error('Error fetching airports:', error);
      set({ airports: [], pagination: null, loading: false });
    }
  },

  getAirportById: (id: string) => {
    const { airports } = get();
    return airports.find((airport) => airport.id === id);
  },

  getAirportByIataCode: (iata_code: string) => {
    const { airports } = get();
    return airports.find((airport) => airport.iata_code === iata_code);
  },

  setCurrentAirport: async (id: string) => {
    const airport = get().getAirportById(id);
    if (airport) {
      set({ currentAirport: airport });
      return true;
    }
    if (get().airports.length === 0) {
      await get().fetchAllAirports();
      const airportAfterFetch = get().getAirportById(id);
      if (airportAfterFetch) {
        set({ currentAirport: airportAfterFetch });
        return true;
      }
    }

    return false;
  },

  setCurrentAirportByIataCode: async (iata_code: string) => {
    const airport = get().getAirportByIataCode(iata_code);
    if (airport) {
      set({ currentAirport: airport });
      return true;
    }
    if (get().airports.length === 0) {
      await get().fetchAllAirports();
      const airportAfterFetch = get().getAirportByIataCode(iata_code);
      if (airportAfterFetch) {
        set({ currentAirport: airportAfterFetch });
        return true;
      }
    }

    return false;
  },

  clearCurrentAirport: () => {
    set({ currentAirport: null });
  }
}));
