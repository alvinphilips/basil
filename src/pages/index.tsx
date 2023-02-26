import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer";
import { MdOutlineRamenDining } from "react-icons/md";
import { TbSwords } from "react-icons/tb";
import { GiBread } from "react-icons/gi";
import { IoBeerOutline } from "react-icons/io5";
import { AiFillCar } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/gotham13/World-Map-India-Complete/master/TopoJson/topo.json";

type Area = string;
type CoolnessCategory = "noodles" | "bread" | "beer" | "swords" | "cars";

const noodle_data = new Array<[string, string]>(
  ["geo-7", "maggi"],
  ["geo-239", "ramen"],
  ["geo-4", "lo mein"]
);
const noodle_map = new Map<Area, string>(noodle_data);

type MapChartProps = {
  content: string;
  setContentOnClick: React.Dispatch<React.SetStateAction<string>>;
  category: CoolnessCategory;
};

function MapChart({ content, setContentOnClick, category }: MapChartProps) {
  return (
    <ComposableMap projection="geoMercator" className="w-full h-full">
      <ZoomableGroup center={[105, 20]} zoom={3.5}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              /** ts-ignore */
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className={`${
                  geo.rsmKey == content
                    ? "fill-sky-400 hover:fill-sky-200"
                    : "fill-amber-100  hover:fill-amber-300"
                } stroke-stone-700 stroke-[0.5]`}
                onClick={() => setContentOnClick(geo.rsmKey)}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}

export default function Home() {
  let [country, setCountry] = useState("geo-7");
  let [category, setCategory] = useState<CoolnessCategory>("noodles");
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
        <h1>basil | {country}</h1>
      </header>
      <main className="w-full sm:flex h-screen">
        <div className="bg-gradient-to-b from-purple-500 to-violet-700 h-full flex w-full sm:max-w-sm  justify-center items-start pt-10 px-8">
          <ul className="grid sm:grid-cols-4 gap-4 w-full text-violet-100">
            <li
              className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center"
              onClick={() => setCategory("noodles")}
            >
              <MdOutlineRamenDining className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                noodles
              </span>
            </li>
            <li
              className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center"
              onClick={() => setCategory("bread")}
            >
              <GiBread className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                bread
              </span>
            </li>
            <li
              className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center"
              onClick={() => setCategory("swords")}
            >
              <TbSwords className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                swords
              </span>
            </li>
            <li
              className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center"
              onClick={() => setCategory("beer")}
            >
              <IoBeerOutline className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                beer
              </span>
            </li>
            <li
              className="w-full sm:w-16 h-20 bg-violet-900 rounded-lg flex px-5 sm:flex-col sm:justify-center items-center"
              onClick={() => setCategory("cars")}
            >
              <AiFillCar className="text-4xl" />
              <span className="text-lg sm:text-xs ml-5 sm:ml-0 sm:text-violet-200">
                cars
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-sky-900 h-full w-full">
          <MapChart
            content={country}
            setContentOnClick={setCountry}
            category={category}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
