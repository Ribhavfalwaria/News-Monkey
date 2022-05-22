import React, { useEffect, useState } from "react";
// import { JsxEmit } from "typescript";
import styles from "./styles/First.module.css";

interface ContentProps {
  url: string;
}

interface Apires {
  author: string | null;
  content: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    id: any;
    name: string;
  };
}

//  arr=Apires[]

export default function First(props: ContentProps) {
  const [dataa, setapidataa] = useState([]);

  //   let p: {}\\[];

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setapidataa(data.articles);
        console.log(data);
        return;
      });
  }, [props.url]);

  // function avg() {
  //   return dataa.map((item: Apires) => {
  //     console.log(item.author);
  //     <div className={styles.cardcontainer}>
  //       <div className={styles.card}>
  //         <img
  //           src=""
  //           // "https://img.etimg.com/thumb/msid-91679860,width-1070,height-580,imgsize-29048,overlay-etmarkets/photo.jpg"
  //           alt="Not available"
  //           height="200px"
  //           width="200px"
  //         />
  //         <div className={styles.detail}>
  //           <span>
  //             {item.title}
  //           </span>
  //           <br></br>
  //           <p>
  //             {item.description}
  //           </p>
  //           <p>
  //           {item.content}
  //           </p>

  //           <br />
  //           <div className={styles.readmore}>
  //             <a
  //               href={item.url}
  //               target="_blank"
  //               rel="noreferror"
  //             >
  //               Click here to read more ...
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>;
  //   });
  // }

  return (
    <div className={styles.container}>
      <>
        {dataa.map((item: Apires) => {
          return (
            <div className={styles.cardcontainer}>
              <div className={styles.card}>
                <img
                  src={item.urlToImage}
                  // "https://img.etimg.com/thumb/msid-91679860,width-1070,height-580,imgsize-29048,overlay-etmarkets/photo.jpg"
                  alt="Not available"
                  height="200px"
                  width="200px"
                />
                <div className={styles.detail}>
                  <span>{item.title}</span>
                  <br></br>
                  <p>{item.description}</p>
                  <p>{item.content}</p>

                  <br />
                  <div className={styles.readmore}>
                    <a href={item.url} target="_blank" rel="noreferror">
                      Click here to read more ...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
}
