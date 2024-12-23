import { Route, Routes } from "react-router-dom";
import { DeadliestAttack } from "../pages/deadliest-attack/DeadliestAttack";
import { Casualty_regions } from "../pages/casualty_regions/Casualty_regions";
import { Incident_trends } from "../pages/incident-trends/Incident_trends";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DeadliestAttack />} />
        <Route path="/Casualty_regions" element={<Casualty_regions />} />
        <Route path="/Incident_trends" element={<Incident_trends />} />
      </Routes>
    </>
  );
};
