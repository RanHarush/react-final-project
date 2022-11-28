const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
];
const loggedIn = [
  {
    label: "Logout",
    path: "/",
  },
];
const loggedOut = [
  {
    label: "Login",
    path: "/login",
  },
  {
    label: "Register",
    path: "/register",
  },
  {
    label: "Business",
    path: "/business",
  },
];
const dropdownLinks = [
  {
    label: "Profile",
    path: "/profile",
    profileLink: [
      {
        label: "Profile Info",
        path: "/profileInfo",
      },
    ],
    bizLinks: [
      {
        label: "My Cards",
        path: "/myCards",
      },
      {
        label: "Create Card",
        path: "/createCard",
      },
    ],
  },
];

export { links, loggedIn, loggedOut, dropdownLinks };
