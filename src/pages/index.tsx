import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { MdOutlineRamenDining } from "react-icons/md";
import { TbSwords } from "react-icons/tb";
import { GiBread } from "react-icons/gi";
import { IoBeerOutline } from "react-icons/io5";
import { AiFillCar } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

function MapChart() {
  return (
    <ComposableMap projection="geoMercator" className="w-full h-full">
      <ZoomableGroup center={[105, 20]} zoom={3.5}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="fill-amber-100 stroke-slate-700"
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>basil</title>
        <meta name="description" content="badass stuff i like :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full h-16 bg-slate-900 flex justify-center items-center text-white text-2xl font-semibold font-serif">
        <FaLeaf />
        &nbsp;
        <h1>basil</h1>
      </header>
      <main className="w-full sm:flex h-screen">
        <div className=" bg-gradient-to-b from-purple-500 to-violet-700 h-full w-full sm:max-w-sm flex justify-center items-start pt-10 px-8">
          <ul className="grid sm:grid-cols-4 gap-4 w-full text-violet-100">
            <li className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center">
              <MdOutlineRamenDining className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                noodles
              </span>
            </li>
            <li className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center">
              <GiBread className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                bread
              </span>
            </li>
            <li className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center">
              <TbSwords className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                swords
              </span>
            </li>
            <li className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center">
              <IoBeerOutline className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                beer
              </span>
            </li>
            <li className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center">
              <AiFillCar className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                cars
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-sky-900 h-full w-full">
          <MapChart />
        </div>
      </main>
      <footer className="bg-slate-900 text-white py-2 flex flex-col justify-center items-center">
        <span>
          Copyright &copy; 2023 Alvin Philips. You are now legally obligated to
          eat noodles :P
        </span>
        <span>Also, thanks for scrolling :&#41;</span>
      </footer>
    </>
  );
}
