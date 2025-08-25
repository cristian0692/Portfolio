import type { PageDescription } from "@/types";

export const CLUCKY: PageDescription = {
  title: "Clucky",
  imageURLs: [
    "myWorks/clucky1.png",
    "myWorks/clucky2.png",
    "myWorks/clucky3.png",
  ],
  keyFeatures: [
    "User Authentication/Registration/Profile",
    "Search/Sort/Filter/Pagination of the restaurants",
    "Manage Restaurant and Image Upload",
    "Shopping Cart and Stripe Payment",
    "Real-Time Order Tracking",
    "Responsive & Mobile-Friendly",
  ],
  description: [
    "A simulation of a food ordering app build with MERN stack. It also utilizes Stripe for simulating the payment process (you can use a stripe filler card to test) and Auth0 for secure Authentication. The login info is safely stored on their db. The information about the restaurants and orders is stored in the Mongodb database.",
  ],
  whatILearned:
    "I learned a lot about how React uses Hooks and effects to manage data, as well as how to create custom hooks to safely retrieve information from a database. The tutorial also gave me insight into how a MERN stack infrastructure is structured and how to implement APIs within it. Overall, it was extremely helpful and provided me with production-grade knowledge.",
  skillsUsed: ["React", "MongoDB", "TypeScript", "Tailwind"],
  APIsUsed: ["Auth0", "Express", "NodeJS", "Stripe"],
  pageDescriptions: [
    {
      imageUrl: "clucky/mainPage.png",
      title: "Main Page",
      description:
        "This is the first page the user sees. It is the page from which the user types in the city from which he wants to order food from. Also, the user can authenticate from here and can access his orders or manage restaurant if he is logged in already.",
    },
    {
      imageUrl: "clucky/searchPage.png",
      title: "Search Page",
      description:
        "The page where you search for the restaurants in the selected city, in here all of the sorting, pagination and filtering is implemented",
    },
    {
      imageUrl: "clucky/detailsPage.png",
      title: "Restaurant Page",
      description:
        "This is the page where the user can actually order. After selecting the products the users goes to checkout where he is asked to fill the address details, they are automatically filled if the user has filled his details in the profile page. After confirming the details the user is redirected to the stripe page. If the stripe form is completed successfully, the order will appear in the users orders with the message, Awaiting Restaurant Confirmation.",
    },
    {
      imageUrl: "clucky/orderStatusPage.png",
      title: "Order Status Page",
      description:
        "This is where all your orders appear with their status and all the information. The order details are re-rendered every 5 seconds for the user to receive the latest order status.",
    },
    {
      imageUrl: "clucky/manageOrdersPage.png",
      title: "Manage Orders Page",
      description:
        "This is where all the orders for the restaurant appear. Here the owner of the restaurant can update the status of the order.",
    },
    {
      imageUrl: "clucky/manageRestaurantPage.png",
      title: "Manage Restaurant Page",
      description:
        "Here is where you can create/update your restaurant. Every user can have only one restaurant.",
    },
    {
      imageUrl: "clucky/userProfilePage.png",
      title: "User Profile Page",
      description:
        "here is where the user can change his details which are used for auto-filling at the checkout.",
    },
  ],
  links: {
    liveWebsite: "https://clucky-frontend.onrender.com/",
    gitHubFrontEnd: "https://github.com/cristian0692/Clucky-Frontend",
    gitHubBackEnd: "https://github.com/cristian0692/Clucky-Backend",
    tutorial: "https://www.youtube.com/watch?v=ardeKHEN1j4",
  },
};
