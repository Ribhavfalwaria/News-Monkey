import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles/Sidebar.module.css";

interface SidebarProps {
  setcountry: Dispatch<SetStateAction<string>>;
  category: string;
}

//   const countries = [
//     "Argentina",
//     "Australia",
//     "Austria",
//     "Belgium",
//     "Brazil",
//     "Bulgaria",
//     "Canada",
//     "China",
//     "Colombia",
//     "Cuba",
//     "Czech Republic",
//     "Egypt",
//     "France",
//     "Germany",
//     "Greece",
//     "Hong Kong",
//     "Hungary",
//     "India",
//     "Indonesia",
//     "Ireland",
//     "Israel",
//     "Italy",
//     "Japan",
//     "Latvia",
//     "Lithuania",
//     "Malaysia",
//     "Mexico",
//     "Morocco",
//     "Netherlands",
//     "New Zealand",
//     "Nigeria",
//     "Norway",
//     "Philippines",
//     "Poland",
//     "Portugal",
//     "Romania",
//     "Russia",
//     "Saudi Arabia",
//     "Serbia",
//     "Singapore",
//     "Slovakia",
//     "South Africa",
//     "South Korea",
//     "Sweden",
//     "Switzerland",
//     "Taiwan",
//     "Thailand",
//     "Turkey",
//     "UAE",
//     "Ukraine",
//     "United Kingdom",
//     "United States",
//     "Venuzuela",
//   ];
export default function Sidebar(props: SidebarProps) {
  //   const [endpoint, setendpoint] = useState(
  //     `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=08b411d01bcd456b88f0954c6fa59f3e`
  //   );
  // console.log(props.category);

  return (
    <div id={styles.container}>
      <h2>COUNTRIES</h2>

      {/* {countries.map((item) => {
        return <span>{item}</span>;
        
      })} */}

      <div
        onClick={() => {
          props.setcountry("ar");
        }}
      >
        Argentina
      </div>
      <div
        onClick={() => {
          props.setcountry("au");
        }}
      >
        Australia
      </div>
      <div
        onClick={() => {
          props.setcountry("at");
        }}
      >
        Austria
      </div>
      <div
        onClick={() => {
          props.setcountry("be");
        }}
      >
        Belgium
      </div>
      <div
        onClick={() => {
          props.setcountry("br");
        }}
      >
        Brazil
      </div>
      <div
        onClick={() => {
          props.setcountry("bg");
        }}
      >
        Bulgaria
      </div>
      <div
        onClick={() => {
          props.setcountry("ca");
        }}
      >
        Canada
      </div>
      <div
        onClick={() => {
          props.setcountry("cn");
        }}
      >
        China
      </div>
      <div
        onClick={() => {
          props.setcountry("co");
        }}
      >
        Colombia
      </div>
      <div
        onClick={() => {
          props.setcountry("cu");
        }}
      >
        Cuba
      </div>
      <div
        onClick={() => {
          props.setcountry("cz");
        }}
      >
        Czech Republic
      </div>
      <div
        onClick={() => {
          props.setcountry("eg");
        }}
      >
        Egypt
      </div>
      <div
        onClick={() => {
          props.setcountry("fr");
        }}
      >
        France
      </div>
      <div
        onClick={() => {
          props.setcountry("de");
        }}
      >
        Germany
      </div>
      <div
        onClick={() => {
          props.setcountry("gr");
        }}
      >
        Greece
      </div>
      <div
        onClick={() => {
          props.setcountry("hk");
        }}
      >
        Hong Kong
      </div>
      <div
        onClick={() => {
          props.setcountry("hu");
        }}
      >
        Hungary
      </div>
      <div
        onClick={() => {
          props.setcountry("in");
        }}
      >
        India
      </div>
      <div
        onClick={() => {
          props.setcountry("id");
        }}
      >
        Indonesia
      </div>
      <div
        onClick={() => {
          props.setcountry("ie");
        }}
      >
        Ireland
      </div>
      <div
        onClick={() => {
          props.setcountry("il");
        }}
      >
        Israel
      </div>
      <div
        onClick={() => {
          props.setcountry("it");
        }}
      >
        Italy
      </div>
      <div
        onClick={() => {
          props.setcountry("jp");
        }}
      >
        Japan
      </div>
      <div
        onClick={() => {
          props.setcountry("lv");
        }}
      >
        Latvia
      </div>
      <div
        onClick={() => {
          props.setcountry("lt");
        }}
      >
        Lithuania
      </div>
      <div
        onClick={() => {
          props.setcountry("my");
        }}
      >
        Malaysia
      </div>
      <div
        onClick={() => {
          props.setcountry("mx");
        }}
      >
        Mexico
      </div>
      <div
        onClick={() => {
          props.setcountry("ma");
        }}
      >
        Morocco
      </div>
      <div
        onClick={() => {
          props.setcountry("nl");
        }}
      >
        Netherlands
      </div>
      <div
        onClick={() => {
          props.setcountry("nz");
        }}
      >
        New Zealand
      </div>
      <div
        onClick={() => {
          props.setcountry("ng");
        }}
      >
        Nigeria
      </div>
      <div
        onClick={() => {
          props.setcountry("no");
        }}
      >
        Norway
      </div>
      <div
        onClick={() => {
          props.setcountry("ph");
        }}
      >
        Philippines
      </div>
      <div
        onClick={() => {
          props.setcountry("pl");
        }}
      >
        Poland
      </div>
      <div
        onClick={() => {
          props.setcountry("pt");
        }}
      >
        Portugal
      </div>
      <div
        onClick={() => {
          props.setcountry("ro");
        }}
      >
        Romania
      </div>
      <div
        onClick={() => {
          props.setcountry("ru");
        }}
      >
        Russia
      </div>
      <div
        onClick={() => {
          props.setcountry("sa");
        }}
      >
        Saudi Arabia
      </div>
      <div
        onClick={() => {
          props.setcountry("rs");
        }}
      >
        Serbia
      </div>
      <div
        onClick={() => {
          props.setcountry("sg");
        }}
      >
        Singapore
      </div>
      <div
        onClick={() => {
          props.setcountry("sk");
        }}
      >
        Slovakia
      </div>
      <div
        onClick={() => {
          props.setcountry("si");
        }}
      >
        Slovenia
      </div>
      <div
        onClick={() => {
          props.setcountry("za");
        }}
      >
        South Africa
      </div>
      <div
        onClick={() => {
          props.setcountry("kr");
        }}
      >
        South Korea
      </div>
      <div
        onClick={() => {
          props.setcountry("se");
        }}
      >
        Sweden
      </div>
      <div
        onClick={() => {
          props.setcountry("ch");
        }}
      >
        Switzerland
      </div>
      <div
        onClick={() => {
          props.setcountry("tw");
        }}
      >
        Taiwan
      </div>
      <div
        onClick={() => {
          props.setcountry("th");
        }}
      >
        Thailand
      </div>
      <div
        onClick={() => {
          props.setcountry("tr");
        }}
      >
        Turkey
      </div>
      <div
        onClick={() => {
          props.setcountry("ae");
        }}
      >
        UAE
      </div>
      <div
        onClick={() => {
          props.setcountry("ua");
        }}
      >
        Ukraine
      </div>
      <div
        onClick={() => {
          props.setcountry("za");
        }}
      >
        United Kingdom
      </div>
      <div
        onClick={() => {
          props.setcountry("us");
        }}
      >
        United States
      </div>
      <div
        onClick={() => {
          props.setcountry("ve");
        }}
      >
        Venuzuela
      </div>
    </div>
  );
}
