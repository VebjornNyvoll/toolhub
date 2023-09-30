# Toolhub

This is a group project from the course TDT4140 at NTNU. The project was created by group 43 consisting of:
- Mattias Tofte
- Klara Wüstenberg
- Idun Skretting
- Håkon Hoelsæter
- Vebjørn Nyvoll

The project utilizes [T3 Stack](https://create.t3.gg/) and has been designed based on criteria from a product owner (student assistant). It is therefore based on the following technologies:
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
## About toolhub
Toolhub is designed as a website for tool rental. The website allows users to sign up using NextAuth.js (for instance by using their Google accounts) and they can then either rent other peoples' tools, rent out their own tools or do both. 
Users can search for tools based on categories or name. 
In addition users can give eachother ratings based on whether they were happy with the rental or not. 
When uploading a tool for rental users can give it a title, a description, price and add a picture if they want to. 
The tool page shows users the available tools and once you have booked a tool it will appear in the "Your bookings" page for both the user renting the tool and the one renting it out.


## How to use the project

Intiializing the project for the first time is rather easy. All you have to do is run the following commands:
'''
yarn
yarn dev
'''
Running the yarn command will automatically load the environment variables and run prisma generate, which will load the Prisma schema.
