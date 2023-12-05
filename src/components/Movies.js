import React from "react";

const movies = [
  {
    id: 100,
    posterURl:
      "https://imgs.search.brave.com/rpWs8H4X8RVGJ1FUuWTJPWf7pLpYsxWbs7XUbllYJkk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2luZW1hdGVyaWFs/LmNvbS9wLzI5N3gv/bnQ0NG15ZmIvdGhl/LWJhdG1hbi1tb3Zp/ZS1wb3N0ZXItbWQu/anBnP3Y9MTY0MzE5/NTIzNg",
    title: "The Batman",
  },
  {
    id: 200,
    posterURl:
      "https://imgs.search.brave.com/khRwKGfVVgSY9S8mKDOCMSV1EN98xniitmupvBECz6g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFFK282MDM2a0wu/anBn",
    title: "The Joker",
  },
  {
    id: 300,
    posterURl:
      "https://imgs.search.brave.com/bC_02YpQElABsjfME9a-zf3djSa2tUtiILPGL1zFVRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9teXBv/c3RlcmNvbGxlY3Rp/b24uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA4L1Ro/ZS1EYXJrLUtuaWdo/dC1Qb3N0ZXItMjAx/OC1NeVBvc3RlckNv/bGxlY3Rpb24uY29t/LTEtNjgzeDEwMjQu/anBn",
    title: "The Dark Knight",
  },
  {
    id: 300,
    posterURl:
      "https://imgs.search.brave.com/bC_02YpQElABsjfME9a-zf3djSa2tUtiILPGL1zFVRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9teXBv/c3RlcmNvbGxlY3Rp/b24uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA4L1Ro/ZS1EYXJrLUtuaWdo/dC1Qb3N0ZXItMjAx/OC1NeVBvc3RlckNv/bGxlY3Rpb24uY29t/LTEtNjgzeDEwMjQu/anBn",
    title: "The Dark Knight",
  },
  {
    id: 300,
    posterURl:
      "https://imgs.search.brave.com/bC_02YpQElABsjfME9a-zf3djSa2tUtiILPGL1zFVRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9teXBv/c3RlcmNvbGxlY3Rp/b24uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA4L1Ro/ZS1EYXJrLUtuaWdo/dC1Qb3N0ZXItMjAx/OC1NeVBvc3RlckNv/bGxlY3Rpb24uY29t/LTEtNjgzeDEwMjQu/anBn",
    title: "The Dark Knight",
  },
  {
    id: 300,
    posterURl:
      "https://imgs.search.brave.com/bC_02YpQElABsjfME9a-zf3djSa2tUtiILPGL1zFVRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9teXBv/c3RlcmNvbGxlY3Rp/b24uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA4L1Ro/ZS1EYXJrLUtuaWdo/dC1Qb3N0ZXItMjAx/OC1NeVBvc3RlckNv/bGxlY3Rpb24uY29t/LTEtNjgzeDEwMjQu/anBn",
    title: "The Dark Knight",
  },
];

function Movies() {
  return (
    <div>
      <div className="text-2xl mt-4 mb-8 font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div
              style={{
                backgroundImage: `url(${movie.posterURl})`,
              }}
              key={movie.id}
              className="w-[200px] h-[35vh] bg-center bg-cover m-4 md:h-[40vh] md:w-[250px] flex items-end rounded-xl"
            >
              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
