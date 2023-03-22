import { type NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../../components/navbar/Navbar";
import { signIn, signOut, useSession } from "next-auth/react";
import {Rating} from '@mui/material';
import { useRouter } from "next/router";

import { api } from "../../../utils/api";
import { contextProps } from "@trpc/react-query/shared";

import { Listbox, Transition } from "@headlessui/react";
import Dialog from "./../../../components/dialogs/Dialog";
import Container from "../../../components/annonse/Container";
import Swiper from "../../../components/swiper/Swiper";
import { PencilIcon } from "@heroicons/react/24/outline";
import InputField from "../../../components/inputs/InputField";

const NyAnnonse: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const ctx = api.useContext();

  // get id from nextjs router
  const { id } = router.query;

  const { data: user } = api.profile.getUser.useQuery(
    {
      id: id as string,
    },
    {
      enabled: !!id,
    }
  );

  const { mutate: addRating } = api.profile.addRating.useMutation({
    onSuccess: () => {
      ctx.advertisement
        .invalidate()
        .then(() => {
          console.log("success");
          void router.push(`/`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Eyyo");
    e.preventDefault();
    
    const target = e.target as typeof e.target & {
      rating: { value: string };
    };
    console.log(target.rating.value);
    const rating: number = +target.rating.value;
    let totalRatingsPoints = rating;
    let totalRatings = 1;
    let userid = "";
    if (user?.totalRatingpoints == null) {
      return null;
    } else {
      totalRatingsPoints += user.totalRatingpoints;
      totalRatings += user.totalRatings;
      userid = user?.id;
    }
    

    addRating({
      rating: totalRatingsPoints,
      amountraters: totalRatings,
      userid: userid,
    });
  };

  return (
    <>
      <Head>
        <title>Toolhub | Annonser</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-[120px] flex h-screen flex-col items-center justify-center overflow-hidden bg-gray-100">
        <Navbar />
        <div className="mt-[6rem] flex h-[20rem] w-[20rem] flex-col items-center rounded-2xl bg-white shadow-md">
          <div className="flex h-[6rem] w-full flex-row items-center gap-3 rounded-md px-8">
            <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-black"></div>
            <div className="flex flex-col">
              <p className="cursor-pointer text-green-700">{user?.name}</p>
              <p>{user?.phone ? user.phone : "Mangler tlf"}</p>
            </div>
          </div>
          <p>{`Epost: ${user?.email ? user?.email : "Har ikke epost"}`}</p>
          <p>
            {user?.totalRatingpoints
              ? (
                  Math.round(
                    (user.totalRatingpoints / user.totalRatings) * 100
                  ) / 100
                ).toString() +
                "/5 (" +
                user.totalRatings.toString() +
                " rangeringer)"
              : "Ikke fått noen ratinger"}
          </p>
          
          <form
            title="Gi rating"
            onSubmit={(e) => handleSubmit(e)}
            className="flex w-full flex-col"
          >
            <div className="flex w-full flex-col items-center">
              <Rating 
                name="rating"
                precision={0.5}
                defaultValue={user?.totalRatingpoints ? user.totalRatingpoints / user.totalRatings : 0}
                ></Rating>
              <input
                type="submit"
                value="Gi rating"
                className="cursor-pointer rounded-md bg-black px-4 py-2 text-white hover:bg-emerald-700"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default NyAnnonse;
