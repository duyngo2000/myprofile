import Aos from "aos";
import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import Summary from "./components/Summary/Summary.jsx"
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import Skills from "./components/Skills/Skills.jsx";
import WorkExperiences from "./components/WorkExperiences/WorkExperiences.jsx";


const Education = React.lazy(() => import('./components/Education/Education.jsx'))

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, debounceDelay: 50 })
  }, [])

  const [page, setPage] = useState("Summary")
  const callbackFuntion = (childData) => {
    setPage(childData)
  }
  const [topPageSummary, setTopPageSummary] = useState()
  const [topPageAboutMe, setTopPageAboutMe] = useState()
  const [topPageEducation, setTopPageEducation] = useState()
  const [topPageSkills, setTopPageSkills] = useState()
  const [topPageWorkExperiences, setTopPageWorkExperiences] = useState()
  const [topPageContact, setTopPageContact] = useState()

  const getOffsetTopSummary = (data) => {
    setTopPageSummary(data)
  }
  const getOffsetTopAboutMe = (data) => {
    setTopPageAboutMe(data)
  }
  const getOffsetTopEducation = (data) => {
    setTopPageEducation(data)
  }
  const getOffsetTopSkills = (data) => {
    setTopPageSkills(data)
  }
  const getOffsetTopWorkExperiences = (data) => {
    setTopPageWorkExperiences(data)
  }
  const getOffsetTopContact = (data) => {
    setTopPageContact(data)
  }
  // console.log("page", page)
  // console.log("topPageSummary", topPageSummary)
  // console.log("topPageAboutMe", topPageAboutMe)
  // console.log("topPageEducation", topPageEducation)
  // console.log("topPageSkills", topPageSkills)
  // console.log("topPageWorkExperiences", topPageWorkExperiences)
  // console.log("topPageContact", topPageContact)
  return (
    <>
      <Header parentCallback={callbackFuntion}
        TopSummary={topPageSummary}
        TopAboutMe={topPageAboutMe}
        TopEducation={topPageEducation}
        TopSkills={topPageSkills}
        TopWorkExperiences={topPageWorkExperiences}
        TopContact={topPageContact}
      />
      <Summary getOffsetTopSummary={getOffsetTopSummary} />
      <AboutMe getOffsetTopAboutMe={getOffsetTopAboutMe} />
      <Suspense fallback={<p style={{ "margin": "10px" }}>Loading map...</p>}>
        <Education getOffsetTopEducation={getOffsetTopEducation} />
      </Suspense>
      <Skills getOffsetTopSkills={getOffsetTopSkills} />
      <WorkExperiences getOffsetTopWorkExperiences={getOffsetTopWorkExperiences} />
      <Contact getOffsetTopContact={getOffsetTopContact} />
    </>
  );
}

export default App;
