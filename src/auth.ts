const auth = {
  loggedIn() {
    const notUser = Boolean(localStorage.blackCat);
    return notUser ? JSON.parse(localStorage.blackCat) : false;
  },
};

export default auth;
