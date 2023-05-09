import React from "react";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About The Artist
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-12 col-xl-12 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Mireya Power-Perez,</span>{" "}
              Director and founder of Piag Museum, a non profit organization.
              Venezuelan painter, inventor, art instructor and sculptor.
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              Born in Caracas, Venezuela . Daughter of a family of nine kids .
              Father Maximiliano Perez a business man and her mother Amada
              Monagas Nuñez a housewife. Her early interest in oil painting was
              obvious to her family and at the age of 18 she traveled to
              Florence Italy to study arts for a year at SS. Annunziata Poggie
              Imperiale. She took classes with Enzo Faraoni a well known artist.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              Mireya captures in her works the elements of nature: lights,
              shades and colors especially browns and greens making her
              landscapes incredibly real. Her art has been exhibited in many
              important venues in countries such as Argentina, Colombia,
              Guatemala, Canada, France, Italy, Mexico, Puerto Rico, Rumania,
              United States, Venezuela, Sweden, Spain and in some countries in
              the Caribbean Islands. She received many award and honorary
              mentions among these, she won first prize in National Competition
              “Caveguias” in Venezuela. Her works are in the traditional flat
              format and also in this original way: undulating canvas. Her
              creation, unique tri-dimensional landscapes on undulating canvases
              utilize classic characteristics in an original new format. This
              Canvas provides a unique kinetic-sculptural element to painting.
              The artist titles her creation “Landscape on waves”.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              Besides being an artist , she believed art is essential in any
              healthy society so she began as an art instructor in Caracas
              Venezuela in Power Academy which she founded in 1975. Her secret
              was to create intensive courses that guaranteed students that they
              could learn to paint an artwork in 25 hrs. Because of the great
              success, she was invited as an art instructor in an international
              cooperation between the Venezuelan Government and the ministry of
              education of many Caribbean Islands such a Trinidad y Tobago,
              Antigua, St Lucie, St Vincent , Jamaica, Barbados. She was a
              significant contribution to the development of art education to
              students and teachers as well. Later she founded Power
              International Art Gallery in Venezuela in 1982 in order to exhibit
              the artists works internationally. She believes in promoting
              emerging as well as established artists by implementing art
              exhibits focused on the individual creative qualities rather than
              on extensive resumes.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              She moved her residency to Miami Florida in 1992 but before she
              participated in an event invited by City of Miami and gave her
              with a “ distinguish visitor certificate” for representing
              Venezuela’s folklore and art in “Miami Festival” in 1985 and in
              the Public Library System as an art instructor. Her contribution
              to South Florida community as an artist, art instructor and with
              her non Profit has been recognized with numerous letters of
              supports, awards.
            </p>
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "text-center" )
              }
            >
              COMMISIONED WORK
            </h2>
          </div>
          {/* About me content end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>67</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>22</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                 Paintings-Caribbean Development Bank. Barbados W.I.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>100</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                Paintings-Sears Gallery of Venezuela. 
                </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>45</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                Paintings-Maraven Gallery. Caracas Venezuela 
                </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>24</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                Paintings-Privates Commissioned Works
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
