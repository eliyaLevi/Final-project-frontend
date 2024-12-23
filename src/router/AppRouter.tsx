import { Route, Routes } from "react-router-dom";
import { DeadliestAttack } from "../pages/deadliest-attack/DeadliestAttack";
import { Casualty_regions } from "../pages/casualty_regions/Casualty_regions";
import { Incident_trends } from "../pages/incident-trends/Incident_trends";
import { AddingTerroristAct } from "../pages/adding-terrorist-act/AddingTerroristAct";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/Final-project-frontend" element={<DeadliestAttack />} />
        <Route path="/Casualty_regions" element={<Casualty_regions />} />
        <Route path="/Incident_trends" element={<Incident_trends />} />
        <Route path="/Adding_terrorist_act" element={<AddingTerroristAct />} />
      </Routes>
    </>
  );
};
