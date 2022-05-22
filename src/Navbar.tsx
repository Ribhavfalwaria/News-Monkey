import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles/Navbar.module.css";

interface NavbarProps {
  setcategory: Dispatch<SetStateAction<string>>;
  country: string;
  category: string;
}

// let url: string;

export default function Navbar(props: NavbarProps) {
  // if (props.category === "") {
  //   url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=08b411d01bcd456b88f0954c6fa59f3e`;
  // } else {
  //   url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=08b411d01bcd456b88f0954c6fa59f3e`;
  // }
  // console.log(url);

  return (
    <div id={styles.container}>
      <div id={styles.navitems}>
        <div
          onClick={() => {
            props.setcategory("technology");
          }}
        >
          TECHNOLOGY
        </div>
        <div
          onClick={() => {
            props.setcategory("sports");
          }}
        >
          SPORTS
        </div>
        <div
          onClick={() => {
            props.setcategory("business");
          }}
        >
          BUSINESS
        </div>
        <div
          onClick={() => {
            props.setcategory("health");
          }}
        >
          HEALTH
        </div>
        <div
          onClick={() => {
            props.setcategory("science");
          }}
        >
          SCIENCE
        </div>
        <div
          onClick={() => {
            props.setcategory("entertainment");
          }}
        >
          ENTERTAINMENT
        </div>
      </div>
      <div id={styles.logcontainer}>
        <div></div>
        <div id={styles.logout}>LOGOUT</div>
      </div>
    </div>
  );
}
