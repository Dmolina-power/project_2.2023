import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Slider from "react-slick";

const Portfolio = ({ classicHeader, darkTheme }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);

  const reviews = [
    {
      src: "images/gallery1.webp",
      desc: "Landscape of Tobago",
    },
    {
      src: "images/gallery2.webp",
      desc: "Angyle Waterfall Tobago Island 2013",
    },
    {
      src: "images/gallery3.webp",
      desc: "Agua que gime traslucides",
    },
    {
      src: "images/gallery4.webp",
      desc: "Choza de Amazonas, Venezuela",
    },
    {
      src: "images/gallery5.webp",
      desc: "Reflejos",
    },
    {
      src: "images/gallery6.webp",
      desc: "Macuro - Sculpture",
    },
    {
      src: "images/gallery7.webp",
      desc: "Mangos -Floating Cube",
    },
    {
      src: "images/gallery8.webp",
      desc: "Henry Pittier Park - Venezuela",
    },
    {
      src: "images/gallery9.webp",
      desc: "Caracas Ayer y Hoy - Serie Rostros de Caracas",
    },
    {
      src: "images/gallery10.webp",
      desc: "Lotto Flower and live Cocodrilo",
    },
    {
      src: "images/gallery11.webp",
      desc: "Mireya Painting on undulating canvas",
    },
    {
      src: "images/gallery12.webp",
      desc: "Homage to Venezuela Juan Griego undulating canva",
    },
    {
      src: "images/gallery13.webp",
      desc: "El Avila después de.........",
    },
    {
      src: "images/gallery14.webp",
      desc: "Guatopo - Venezuela",
    },
    {
      src: "images/gallery15.webp",
      desc: "Mangroves in Margarita Island",
    },
  ];

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-1" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              GALLERY
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Art
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          <Slider {...settings}>
            {reviews.length > 0 &&
              reviews.map((value, index) => (
                <div className="item" key={index}>
                  <div
                    className={
                      " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                    }
                  >
                    <div className="d-flex align-items-center mt-auto mb-4">
                      <img
                        className="img-fluid border d-inline-block w-auto"
                        src={value.src}
                        alt=""
                      />
                    </div>
                    <p
                      className={
                        " fw-500 mb-4 " +
                        (darkTheme ? "text-white" : "text-dark")
                      }
                    >
                      “{value.desc}”
                    </p>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
