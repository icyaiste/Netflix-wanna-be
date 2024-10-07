  import { render, screen, waitFor, fireEvent } from "@testing-library/react";
  import { MemoryRouter, Routes, Route } from "react-router-dom";
  import FilmInfo from "../pages/filmInfo/FilmInfo"; 
  import { Movie } from "../interfaces/Interfaces";
  import { beforeAll, afterAll, afterEach, describe, it, expect, vi } from "vitest";
  
   // Mocking localStorage
   const mockLocalStorage = (() => {
    //Create an empty "store" object to hold data
    let store: { [key: string]: string } = {};
  
    return {
      //get data from the store, if the key exist get value otherwise null
      getItem: (key: string) => store[key] || null,
      //save data in store, a label on a value and put it in storage
      setItem: (key: string, value: string) => (store[key] = value),
      //remove data by key from store
      removeItem: (key: string) => delete store[key],
      //clear data in store
      clear: () => (store = {}),
    };
  })();
  
  
  // Mock movies data
  const mockMovie: Movie = {
    title: "Test Movie",
    year: 2021,
    rating: "PG-13",
    genre: "Action",
    actors: ["Actor One", "Actor Two"],
    synopsis: "An exciting test movie.",
    thumbnail: "test-thumbnail.jpg"
  };
  
  vi.mock('../../movies/movies.json', () => ({
    default: [mockMovie],
  }));
  
  describe("FilmInfo", () => {
    beforeAll(() => {
      Object.defineProperty(window, "localStorage", {
        value: mockLocalStorage,
      });
    });
  
    afterEach(() => {
      window.localStorage.clear();
    });
  
    it("renders loading state initially", () => {
      render(
        <MemoryRouter initialEntries={["/films/Test Movie"]}>
          <Routes>
            <Route path="/films/:title" element={<FilmInfo />} />
          </Routes>
        </MemoryRouter>
      );
  
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  
    it("displays 'Movie not found' if no movie is found", async () => {
      render(
        <MemoryRouter initialEntries={["/films/Unknown Movie"]}>
          <Routes>
            <Route path="/films/:title" element={<FilmInfo />} />
          </Routes>
        </MemoryRouter>
      );
  
      // Wait for the loading state to complete
      await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  
      expect(screen.getByText(/movie not found/i)).toBeInTheDocument();
    });
  
   
  });
  