import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/initial/Welcome";
import { AddComplaints } from "../pages/complaints/AddComplaints";
import { ComplaintSuccess } from "../pages/complaints/ComplaintSuccess";
import { ShowComplaint } from "../pages/complaints/ShowComplaint";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Home } from "../pages/dashboard/Home";
import { Areas } from "../pages/dashboard/areas/Areas";
import { EditAreas } from "../pages/dashboard/areas/EditAreas";




function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Welcome />} />
        <Route path={'/complaint'} element={<AddComplaints />} />
        <Route path={'/complaint_success'} element={<ComplaintSuccess />} />
        <Route path={'/show_complaint/:id'} element={<ShowComplaint />} />

        <Route path={'/admin/'} element={<Dashboard />}>
          <Route path={'/admin/home'} element={<Home />} />
          <Route path={'/admin/areas'} element={<Areas />} />
          <Route path={'/admin/areas/edit/:id'} element={<EditAreas />} />
        </Route>

        
        {/* <Route path={'*'} element={''} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export { Index }