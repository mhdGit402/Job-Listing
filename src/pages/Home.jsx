import { CardList } from "../components/CardList";
import { Hero } from "../components/Hero";
import { JobsList } from "../components/JobsList";
import { AllJobs } from "../components/AllJobs";

export const Home = () => {
  return (
    <>
      <Hero />
      <CardList />
      <JobsList title="Latest jobs" limit="3" />
      <AllJobs />
    </>
  );
};
