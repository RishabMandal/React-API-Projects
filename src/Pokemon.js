import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Pokemon() {
  //   const [pokemon, setPokemon] = useState(["Pikachu", "Bulbasur"]);
  const [num, setNum] = useState("1");
  const [pokemonname, setPokemonName] = useState();
  const [pokemonweight, setPokemonweight] = useState();
  const [pokemonimage, setPokemonimage] = useState();
  let number = num;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);

      console.log(res.data);

      setPokemonName(res.data.name);
      setPokemonweight(res.data.weight / 10); // Dividing weight by 10
      setPokemonimage(res.data.sprites.front_default);
    }

    getData();
  });

  // Dark Mode ( Click on PokeDex )
  const [darkmode, setDarkmode] = useState("text-black");
  function dark() {
    if (darkmode === "white") {
      setDarkmode("black");
    } else {
      setDarkmode("white");
    }
  }

  return (
    <>
      <div className={`bg-${darkmode} w-100% py-9`}>
        <div className="block w-[600px] mx-auto mt-14 mb-96 rounded-lg border-8 border-red-500 text-white bg-red-600">
          <div
            className={`text-center text-2xl text-${darkmode} font-bold p-4`}
            onClick={dark}
          >
            PokeDex
          </div>
          <div className="justify-center mt-12 bg-gray-700 mx-auto rounded-lg w-[400px] border-8 border-white">
            <img
              src={pokemonimage}
              className="bg-gray-700 mx-auto w-[200px]"
              alt=""
            />
          </div>
          <div className="mx-auto bg-gray-700 w-[400px] text-center mt-5 mb-2 rounded-lg">
            <div className="text-2xl font-bold py-2 px-4">
              Name : {pokemonname}
            </div>
            <div className="text-xl px-4 pb-4">Weight : {pokemonweight}kg</div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                // New syntax
                num !== 1 && setNum(--number);
              }}
              className="my-8 mx-3 px-6 pt-2 pb-3 bg-yellow-500 text-black text-lg hover:text-yellow-500 hover:bg-black rounded-xl"
            >
              Prev
            </button>
            <button
              onClick={() => {
                setNum(++number);
              }}
              className="my-8 mx-3 px-6 pt-2 pb-3 bg-yellow-500 text-black text-lg hover:text-yellow-500 hover:bg-black rounded-xl"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="my-14 text-4xl font-bold text-center">PokeTab</div>
      <div>
        <img src={pokemonimage} alt="" />
        {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" /> */}
      </div>
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
      <div className="flex justify-center">
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
