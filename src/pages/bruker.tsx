import React from "react";
import { type NextPage } from "next";
import Head from "next/head";
import InputField from "../components/inputs/InputField";
import Navbar from "../components/navbar/Navbar";
import { api } from "../utils/api";

const Profile: NextPage = () => {
  const { data: currentUser } = api.profile.getUser.useQuery();

  const ctx = api.useContext();

    const { mutate: updateProfile } = api.profile.create.useMutation({
      onSuccess: (data) => {
        ctx.profile
          .invalidate()
          .then(() => {
            console.log("success");
          })
          .catch((err) => {
            console.log(err);
            alert("Noe gikk galt, prøv igjen");
          });
      },
    });
  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        phone: { value: string };
        address: { value: string };
        city: { value: string };
      };
      const phone = target.phone.value;
      const address = target.address.value;
      const city = target.city.value;
      updateProfile({
        phone: phone,
        address: address,
        city: city,
      });
  
    };
  
    return (
      <>
        <Head>
          <title>Profile</title>
          <meta name="description" content="Din profil" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
          <Navbar />
        
        <div className="container flex flex-col items-center justify-center gap-2 px-4 py-16 ">
            <h1 className="text-4xl font-bold">Min profil</h1>
            <form
            onSubmit={(e) => handleSubmit(e)}>
                <InputField 
                label = "Navn" 
                name="name"
                placeholder="Fornavn Etternavn"
                defaultValue={currentUser?.name}
                disabled
                />
                <InputField 
                label = "E-mail adresse" 
                name="e-mail"
                placeholder="eksempel@mail.no"
                defaultValue={currentUser?.email}
                disabled/>
                <InputField 
                label = "Telefonnummer" 
                name="phone"
                type="tel"
                defaultValue={currentUser?.phone}
                placeholder="12345678"/>
                <InputField 
                label = "Adresse" 
                name="address"
                type="address"
                defaultValue={currentUser?.address}
                placeholder="Daudbilbakken 1A"/>
                <InputField 
                label = "By" 
                name="city"
                defaultValue={currentUser?.city}
                placeholder="Andeby"
                />
              <div className="w-[15rem] self-end py-4">
              <label>
                <input
                  type="submit"
                  value="Lagre endringer"
                  className="w-full cursor-pointer rounded-md bg-black px-4 py-2 text-white hover:bg-emerald-700"
                />
              </label>
            </div>

            </form>
            
            
            
            

        </div>
        
        </main>
      </>
    );
  };
  
//   text,
//   icon,
//   onClick,
//   width,
//   color,

  export default Profile;