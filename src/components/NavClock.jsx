export const NavClock = () => {
  const date = new Date();
  const time =
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0");

  return <h1>{time}</h1>;
};
