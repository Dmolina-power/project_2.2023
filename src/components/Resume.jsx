import React from "react";
import resumeFile from "../documents/devRes2023.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "1954",
      title: "Commendation for her valuable contribution to the community and for her important contribution to further international Relation, in the artistic development",
      place: "Mayor Stephan P. Clark",
      desc: "Metropolitan Dade County, Miami, Florida.",
    },
    {
      yearRange: "1955",
      title: "Honorable Certificate. Antique Government Document given to Mireya",
      place: " Mrs. Rosa Scopoli Director of the S.S Annunciata al Poggio",
      desc: "Imperiale, Italy, Florence.",
    },
    {
      yearRange: "1955",
      title: "Mention in Art Honorable Document",
      place: "S.S. Annunciata al Poggio Imperiale.",
      desc: "Florence, Italy.",
    },
    {
      yearRange: "1978",
      title: "Plaque Cover Telephone Book White and Yellow pages.",
      place: "II Contest of Caveguías C.A.",
      desc: "Venezuela.",
    },
    {
      yearRange: "1979",
      title: "Honorable Mention Intercontinental Gold Circle.",
      desc: "Valencia,Venezuela.",
    },
    {
      yearRange: "1978-1979",
      title: "First Place Winner.",
      desc: "Caveguías “Mercado de San Jacinto”.",
    },
    {
      yearRange: "1984",
      title: "Distinguish Visitor Certificate.",
      place: "Mayor Maurice Ferré, recognize Mireya for her significant accomplishment and because The City of Miami is proud to welcome a guest.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1984",
      title: "Honorable Mention.",
      place: "International Contest of Merit at A.C.C.A. Classic Painting.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1984",
      title: "Honorable Second Mention.",
      place: "International Contest “Cascade and Forest” ACCA.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1984",
      title: "Honorable Mention.",
      place: "“Mangrove” Poinciana Fiesta",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1984",
      title: "Special Honorable Mention.",
      place: "International Contest  at A.C.C.A. Classic Painting “ A Orillas del Rio”.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1985",
      title: "Certificate of Appreciation.",
      place: "outstanding service to the City of Miami by contributing to the success of the Festival of Miami.  Mayor Maurice Ferré.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1985",
      title: "Commendation for her valuable contribution to the community.",
      place: "for her important contribution to further international Relation   in the artistic development - Mayor Stephan P. Clark.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1985",
      title: "1st Prize Winner “The Best Exhibit”",
      place: "International Festival.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1985",
      title: "1st Prize Winner “The Parade”",
      place: "International Festival.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1987",
      title: "Distinguished Visitor in recognition",
      place: "significant accomplishment and because the City of Miami is proud to welcome a guest.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1987",
      title: "Certificate of Appreciation",
      place: "Recognize to Certificate of appreciation, in recognition of her valuables contribution to our community.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1987",
      title: "Certificate of the Appreciation",
      place: "exemplary contribution to this community - Stephan Clark, Mayor of the City of Miami",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1988",
      title: "Honorable First Mention",
      place: "nternational Contest at A.C.C.A. “Green Waves”",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1988",
      title: "Honorable Mention",
      place: "IInternational Contest at ACCA. - Screen “Tokio” oil and gold leaf.",
      desc: "Miami, Florida.",
    },
  ];

  const experienceDetails = [
    
    {
      yearRange: "1989",
      title: "Commendation for her exemplary efforts to further International Relations and for her exemplary contribution to this community ",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1994",
      title: "Plaque Gold Star F.A.I.C her Art and International Teacher.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1994",
      title: "Certificate and Recognition for participate in “Luces de America” Venezuelan Art Collection",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1995", 
      title: "Certificate of Appreciation in recognition of outstanding service rendered at the Miami Police Department. Florida.  ",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1995", 
      title: "Certificate Distinguish Visitor. City of Miami ",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1996",
      title: "Certificate of Appreciation in recognition of outstanding service rendered at the Miami Police Department. Florida.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1997",
      title: "Plaque “Heros” ",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1998",
      title: "Certificate of Appreciation in recognition of outstanding service rendered at the Miami Police Department. Florida.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "1999",
      title: "Nominated for the Medal National Endowment for The Arts",
      desc: "Washington D.C.",
    },
    {
      yearRange: "1999",
      title: "Letter of recognition at Martin Luther King Library",
      desc: "Washington D.C.",
    },
    {
      yearRange: "2000",
      title: "Nominated for the Medal National Endowment for The Arts",
      desc: "Washington D.C.",
    },
    {
      yearRange: "2000-1999",
      title: "Distinction Cultural Attaches. 8º Art Exhibition Mireya was the sole representative for The Venezuelan Country in the VIII Salon at the Meridian Center,",
      desc: "Washington D.C.",
    },
    {
      yearRange: "2001",
      title: "Nominated for the Medal National Endowment for The Arts",
      desc: "Washington D.C.",
    },
    {
      yearRange: "2001",
      title: "Letter of Appreciation for her contribution to the celebrations of 2001 Miami Police Dept.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "2001",
      title: "Proclamation City of Miami - Mireya Perez-Power’s Day.  On November 4th.    Mayor Joe A. Carollo.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "2002",
      title: "Recognition to Mireya Power by The Venezuelan Consulate of Miami.- Angostura Magazine",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "2002",
      title: "Certificate of Participation “A Musical and Montage and Art Exhibition Mayor Many Diaz",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "2002",
      title: "2002 Plaque Hispanic Magazine for 0ne of the 100 Successful Hispanic Women in all the Nation",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "2002",
      title: "Special Recognition for her recently named one of the top Successful Women in the Country by Mayor Don Slesnick,  at the City of Coral Gables.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "2003",
      title: "Nominated for the Florida Artists Hall of Fame. Florida Department of the States, Division of Cultural Affairs.",
      desc: "Miami, Florida.",
    },
    {
      yearRange: "2018",
      title: "Medal Narrative Poetry of City of Battaglia Provincia",
      desc: "Salerno Italy",
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-2" : "")}
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
            Recognition
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Awards
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
