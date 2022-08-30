import React from "react";
import { useState, useEffect } from "react";

function SiemenApi() {
  const [items, setItems] = useState([]);
  const [readMore, setReadMore] = useState(true);

  const url = "https://boiling-inlet-40081.herokuapp.com/articles";
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setItems(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h1 className="middle">News From Api</h1>
      {items.map((item) => {
        const { image, Title, id, content } = item;
        return (
          <div key={id} className="card">
            {image.map((img) => {
              return (
                <>
                  <div className="grid-box">
                    <div>
                      <img src={img.url} alt="" />
                    </div>
                    <div>
                      <h2>{Title}</h2>
                      <p>
                        {readMore ? content : `${content.substring(0, 400)}...`};
                        <button className="btn" onClick={() => setReadMore(!readMore)}>
                          {readMore ? "show less" : "Read More"}
                        </button>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

export default SiemenApi;
