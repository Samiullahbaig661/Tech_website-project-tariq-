// import HeroSection from "../Components/about_us_hero";
import TeamCard from "../Components/team_card";
import "../Component_styling/component_aboutus.css";
import { useSelector } from "react-redux";
import CoreValuesSection from "../Components/core_values_aboutus";
import HeroSection from "../Components/about_us_hero";

function AboutUs() {
  const teamMembers = useSelector((state) => state.team);
  console.log("Team Data:", teamMembers);

  return (
    <>

    <HeroSection/>
      <div className="container">
        {teamMembers?.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
      <CoreValuesSection />
    </>
  );
}

export default AboutUs;
