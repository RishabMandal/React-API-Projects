import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Pokemon() {
  //   const [pokemon, setPokemon] = useState(["Pikachu", "Bulbasur"]);
  const [num, setNum] = useState("1");
  const [pokemonname, setPokemonName] = useState();
  const [pokemonweight, setPokemonweight] = useState();
  let number = num;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);

      console.log(res.data);

      setPokemonName(res.data.name);
      setPokemonweight(res.data.weight / 10); // Dividing weight by 10
    }

    getData();
  });

  return (
    <>
      <div className="my-14 text-4xl font-bold text-center">PokeTab</div>
      {/* <div>{pokemon}</div> */}
      <div className="m-4 text-2xl text-center">
        Enter a number between 1 to 850
      </div>
      <input
        onChange={(event) => {
          // If value!=0 then setNum will run
          event.target.value !== 0 && setNum(event.target.value);
        }}
        type="number"
        className="block my-4 mx-auto p-3 border-4 border-red-700 rounded-xl text-center"
        placeholder="Enter a number"
      />
      <div className="text-4xl text-center">Pokemon name : {pokemonname}</div>
      <div className="text-4xl text-center">
        Pokemon weight : {pokemonweight}kg
      </div>
      <div className="flex justify-center" >
        <button
          onClick={() => {
            // New syntax
            num !== 1 && setNum(--number);
          }}
          className="my-8 mx-3 px-4 pt-2 pb-3 text-2xl hover:text-white hover:bg-red-700 border-2 border-red-700 rounded-xl"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setNum(++number);
          }}
          className="my-8 mx-3 px-4 pt-2 pb-3 text-2xl hover:text-white hover:bg-red-700 border-2 border-red-700 rounded-xl"
        >
          Next
        </button>
      </div>
    </>
  );
}
