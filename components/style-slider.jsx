"use client";

import Link from "next/link";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import tiles from "@/data/tiles.json";

export default function StyleSlider() {
  return (
    <Swiper
      modules={[
        Autoplay,
        Pagination,
      ]}
      spaceBetween={20}
      slidesPerView={1.15}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },
      }}
      className="tile-swiper"
    >
      {tiles.slice(0, 8).map((tile) => (
        <SwiperSlide key={tile.id}>

          <article className="group relative h-[430px] overflow-hidden rounded-[28px]">

            <img
              src={tile.image}
              alt={tile.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
                {tile.category}
              </p>

              <h3 className="mt-2 text-2xl font-black">
                {tile.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/60">
                {tile.description}
              </p>

              <Link
                href={`/tile/${tile.id}`}
                className="mt-5 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#17201d]"
              >
                View Details
              </Link>

            </div>

          </article>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}