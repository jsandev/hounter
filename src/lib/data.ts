import { ICard } from "components/Card";

export const featuredHouse: ICard[] = [
  {
    image:
      "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "HOUSE",
    status: "Popular",
    name: "Roselands House",
    price: 35000000,
    owner: {
      avatar:
        "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Dianne Russell",
      address: "Manchester, Kentucky",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "HOUSE",
    status: "New House",
    name: "Sam House",
    price: 135000000,
    owner: {
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jimmy Sandoval",
      address: "Lima, Perú",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "HOUSE",
    status: "Popular",
    name: "Velci's House",
    price: 20000000,
    owner: {
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Rosaria Garcia",
      address: "Magdalena del mar, Perú",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "VILLA",
    status: "Popular",
    name: "New Villa Jaimes",
    price: 20000000,
    owner: {
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Robert Fox",
      address: "Dr. San Jose, South Dakota",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/2832183/pexels-photo-2832183.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "VILLA",
    status: "Best Deals",
    name: "Villa House Dominik",
    price: 89000000,
    owner: {
      avatar:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Rogers Gales",
      address: "Callao, Perú",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/430216/pexels-photo-430216.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "APARMENT",
    status: "Best Deals",
    name: "The Old Lighthouse",
    price: 44000000,
    owner: {
      avatar:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ronald Richards",
      address: "Santa Ana, Illinois",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/2077937/pexels-photo-2077937.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "APARMENT",
    status: "Popular",
    name: "The New Centry",
    price: 55000000,
    owner: {
      avatar:
        "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Leo Gamberd",
      address: "Miraflores, Perú",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "HOUSE",
    status: "New House",
    name: "Cosmo's House",
    price: 22000000,
    owner: {
      avatar:
        "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jenny Wilson",
      address: "Preston Rd. Inglewood, Maine 98380",
    },
  },
];

interface ITestimonial {
  image: string;
  title: string;
  description: string;
  user: {
    avatar: string;
    name: string;
    major: string;
  };
}
export const testimonials: ITestimonial[] = [
  {
    image:
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "My house sold out fast!",
    description:
      "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
    user: {
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Courtney Henry",
      major: "CEO Andarafish",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Best! I got the house I wanted through Hounter",
    description:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    user: {
      avatar:
        "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Dianne Russell",
      major: "Manager Director",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Through the Hounter, I can get a house for my self",
    description:
      "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
    user: {
      avatar:
        "https://images.pexels.com/photos/894077/pexels-photo-894077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Esther Howard",
      major: "Head of Marketing",
    },
  },
];

interface ITip {
  image: string;
  user: {
    avatar: string;
    name: string;
  };
  title: string;
  description: string;
  date: string;
}
export const tipsAndTricks: ITip[] = [
  {
    image:
      "https://images.pexels.com/photos/36355/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: {
      avatar:
        "https://images.pexels.com/photos/2118709/pexels-photo-2118709.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Dianne Russell",
    },
    title: "The things we need to check when we want to buy a house",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    date: "4 min read | 25 Apr 2021",
  },
  {
    image:
      "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: {
      avatar:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Courtney Henry",
    },
    title: "7 Ways to distinguish the quality of the house we want to buy",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    date: "6 min read | 24 Apr 2021",
  },
  {
    image:
      "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: {
      avatar:
        "https://images.pexels.com/photos/2962146/pexels-photo-2962146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Darlene Robertson",
    },
    title: "The best way to know the quality of the house we want to buy",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    date: "2 min read | 24 Apr 2021",
  },
  {
    image:
      "https://images.pexels.com/photos/8288954/pexels-photo-8288954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: {
      avatar:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cameron Williamson",
    },
    title: "12 Things to know before buying a house",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    date: "8 min read | 25 Apr 2021",
  },
];
