# Capstone Proposal

### Name of Student: Gareth Grindeland

### Name of Project: XLerate

### Project's Purpose or Goal: 

_Interactive Fitness E-commerce website to display clothing products, gear, workout plans, supplements, and more._

### List the absolute minimum features the project requires to meet this purpose or goal:
* Fitness themed E-commerce website
* Interactive UI built with React & Next.js
* Ability to view products (clothing, workout plans, supplements, etc.) and navigate between pages to view additional details like price, amount, description.
* Basic webpage styling elements at a minimum. Ideally it is fully styled and responsive.

### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
* HTML, CSS, and JavaScript
* React & Redux
* Next.js Framework
* CSS styling library (Bootstrap, MUI, or Tailwind)

### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.
* Database integration & hosted to a live site
* Add a cart and checkout widget (potentially integrated with Stripe Checkout or similar API/Library)
* Add ability to sort by category and/or search for a product
* Basic CRUD functionality (a user can add additional items for sale)
* Add smooth animations and scrolling effects using GSAP version 3.0 or other animation libraries. These could be used primarily on a "Featured" section of the website.
* Add a fitness blog section 
* Change which components on the page are loaded server-side, client-side, and hybrid
* Explore nutrition / food APIs integration, potentially add a calorie calculator and data visualization tools


### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
* NoSQL with Firebase / Firestore
* web hosting service (Firebase, AWS, Vercel, or gh-pages)
* GSAP version 3.0 + pluggins (i.e. ScrollTrigger and ScrollSmoother)
* React-Spring library, Nivo data vizualization library
* Tailwind CSS
* Spoonacular API (or similar API like Tasty)
* Stripe Checkout / Shopify


### Is there anything else you'd like your instructor to know?
* My goal is to create a functional, fullstack project that is interactive and looks professional, as well as to learn the Next.js framework and further my understanding of React. The theme/name/style of the project may change if something more exciting comes to mind as I get working on this. 

## Research & Planning Log

#### Friday, July 7th
* 8:10: Read lessons on indpendent capstone proposal and creating a README with a research & planning log
* 8:35: Brainstorm ideas and potential features, preliminary research on tools, frameworks, and libraries
* 9:00: Set up initial github repo for the capstone
* 9:20: Watch video about GSAP at [greensock.com/get-started](https://greensock.com/get-started/)
* 9:45: Research GSAP version 3.0 for website animations with a React/JS project -- [GreenSock Docs](https://greensock.com/docs/)
* 10:15: Research React-Spring library at [react-spring getting started](https://www.react-spring.dev/docs/getting-started)
* 10:50: Research parallax effect, view website demos
* 11:25: Research Next.js framework-- routing, rendering (client vs server sided), pages, API & data fetching
* 1:45: Research NoSQL with Firebase/Firestore
* 2:45: Test Next.js / React [project](https://github.com/gareth-24/nextjs-blog)
  - 3:30: pre-rendering and data fetching
  - 4:15: adding dynamic routes
* 4:45: Create project MVP proposal

#### Friday, July 14th
* 8:10: Plan / map out daily tasks
* 8:35: Research Tailwind css [core concepts](https://tailwindcss.com/docs/utility-first)
* 10:00: Continue working on next.js practice project and tutorial
  - 11:20: create posts library and implement getStaticProps, render markdown files
  - 1:15: create API enpoints as serverless function
  - 1:55: Refactor code, add css, add title page and links to pages
  - 2:10: Research differences and benefits of rendering data or website pages server-side vs. using static generation
* 2:35: Install Vercel for Github and read how to deploy a Next.js App
* 3:00: Register/Configure a Vercel account and the practice project
* 3:40: Test out deployment of the next.js app:
  - [link to live site](https://nextjs-blog-eta-snowy-14.vercel.app/)
  - [Github repo](https://github.com/gareth-24/nextjs-blog)
* 4:15: Test out tailwind css styling elements
* 4:35: Narrow MVP to 3 goals per feedback on initial proposal
  - (Note: elements beyond the 3 goals have been moved to the stretch goals section)
* 4:45: Begin mapping out design/layout for the website, diagram of components

#### Friday, July 21st
* 8:15: Plan out daily tasks and goals
* 9:15: After bootstrapping initial project with create-next-app, finish the rough draft of the website layout / component diagram / routes needed
* 1:05: Research TypeScript types/interfaces
* 1:35: Research Prisma.io docs
* 2:00: Research Clerk API authentication / user management
  - 2:30: Register account & project for Clerk Authentication
  - 2:50: Test Clerk Auth with a test next.js app
* 4:00: Research Shadcn UI dashboard components
* 4:30: Research Cloudinary image upload API
  - Register account and configure environment & upload presets
  - 4:50: Test out image banner upload 

#### Tuesday, July 25th
* 8:15: Dev team meetup & planning out daily tasks and goals
* 8:45: Signup for presentation timeslot
* 1:25: Find stock images for product listings

#### Wednesday, July 26th
* 8:20: Plan out daily tasks and goals, meet with dev team
* 8:40: Add more products to the store db
* 9:10: Test out dashboard and prisma connection
* 1:00: Test out all current UI routes
* 1:30: Add new demo branch to the github repo
* 4:15: Research Zustand state management
  - End of day 07/26 checkpoint: have working UI with product gallery popup pages
  - Note tasks and goals that take priority for tomorrow

#### Thursday, July 27th
* 8:40: Test out demo site with products added 
* 8:40-9:20: Initialize git repository for the admin dashboard/backend
* 9:40: Bugfixing the deployment of the admin dashboard
  - Fixed: needed to import the env variables under project settings in the vercel dashboard.
* 10:10: Test out accessing the api routes and navigating on the hosted admin page
* 10:40: Update env variables in this directory for the new api url routes with the hosted admin dashboard.
* 12:05: Store UI successfully hosted, WIP: testing out the routes on the live site
* 1:30: Add custom domain url and begin prep for demo

#### Friday, July 28th
* 9:30-10:15: Research shopify api for handling payments/cart

## Helpful Resources and Links:

* [GreenSock Docs](https://greensock.com/docs/) - Animation Toolset for JS
  - [ScrollTrigger plugin](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
  - [ScrollSmoother plugin](https://greensock.com/docs/v3/Plugins/ScrollSmoother)
  - [Example with codepen.io](https://codepen.io/isladjan/pen/abdyPBw)
* [React-Spring Docs](https://www.react-spring.dev/docs) - Library for interactive/animated UI components
* [Nivo Docs](https://nivo.rocks/) - Library for Data Visualization components
* [Next.js Docs](https://nextjs.org/docs) - React Framework for building web apps
  - [Deploying with GitHub Pages](https://github.com/vercel/next.js/tree/canary/examples/github-pages)
  - [Next.js + Tailwind CSS example](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss)
  - [Next.js next-learn Github folder](https://github.com/vercel/next-learn/tree/master/basics)
  - [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app)
* [Redux Docs](https://redux.js.org/introduction/getting-started)
* [React](https://react.dev/reference/react)
* [Firebase](https://firebase.google.com/)
  - [Integrate with Next.js](https://firebase.google.com/docs/hosting/frameworks/nextjs)
  -[Firestore (cloud based BaaS)](https://firebase.google.com/products/firestore)
* [Prisma](https://www.prisma.io/docs)
* [Clerk Authentication](https://clerk.com/)
* [PlanetScale (serverless MySQL)](sk_test_Sthrk6DpKEjTT57ZPIbHL8wujReRMenL0hsjciZ4Nt)
* [Shadcn/ui](https://ui.shadcn.com/)
* [Cloudinary Image API](https://cloudinary.com/documentation/cloudinary_references)
* [Spoonacular API](https://spoonacular.com/food-api)
* [Stripe Checkout](https://stripe.com/docs/payments/checkout)
* [TypeScript Docs](https://www.typescriptlang.org/docs/)
* [Lucide-React Docs (icon library)](https://lucide.dev/guide/)
* [query-string npm package install](https://www.npmjs.com/package/query-string)
* [Headless UI](https://headlessui.com/)