import Link from "next/link";
import Head from "next/head";
const Header = () => {
  return (
    <head>
      <title>Frugality Book</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        href="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      {/* <Link
        href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
        // rel="stylesheet"
      ></Link>
      <Link
        href="https://fonts.googleapis.com/css2?family=Praise&display=swap"
        // rel="stylesheet"
      ></Link> */}
    </head>
  );
};

export default Header;
