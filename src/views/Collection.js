import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "components/Icons";

export default function Collection() {
  const items = [
    {
      id: 1,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      image: "https://pagalnew.com.se/siteuploads/thumb/sft5/2141_4.jpg",
      src: "https://pagalnew.com.se/files/download/id/2141"
    },

    {
      id: 2,
      title: "Deja Vu",
      artist: "Olivia Rodrigo",
      image: "https://source.boomplaymusic.com/group10/M00/04/05/e7b8416e542e43688d54221a91edcfa8_464_464.webp",
    },

    {
      id: 3,
      title: "295",
      artist: "Siddhu Moosewala",
      image: "https://pagalnew.com/coverimages/295-Moosetape-500-500.jpg",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl text-white font-bold tracking-tight mb-4">
        Playlist
      </h3>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="h-[296px] bg-gradient-to-r from-gra3 to-gra4 rounded p-6 group relative">
          <div className="mt-20">
            <span className="text-sm font-semibold">Lut Gaye</span>{" "}
            <span className="opacity-70"> • Jubin Nautiyal </span>
            <span className="text-sm font-semibold">O Maahi</span>{" "}
            <span className="opacity-70"> • Arijit Singh </span>
            <span className="text-sm font-semibold">Good 4 U</span>{" "}
            <span className="opacity-70"> • Olivia Rodrigo </span>
            <span className="text-sm font-semibold">Levitating</span>{" "}
            <span className="opacity-70"> • Dua Lipa </span>
            <span className="text-sm font-semibold">Save your tears</span>{" "}
            <span className="opacity-70"> • Ariana Grande </span>
            <span className="text-sm font-semibold">Butter</span>{" "}
            <span className="opacity-70"> • John </span>
            <span className="text-sm font-semibold">Emir Can İğrek</span>{" "}
            <span className="opacity-70"> • Nevale </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mt-6">Popular Songs</h3>
            <p>2024 popular songs</p>
          </div>
          <button className="w-12 h-12 bg-primary absolute right-4 bottom-4 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
            <Icon name="play" />
          </button>
        </div>

        <div className="grid">
          <div className="flex gap-x-4">
            {items.map((item) => (
              <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
