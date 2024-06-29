import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { AddComplaints } from "../pages/complaints/AddComplaints";
import { ComplaintSuccess } from "../pages/complaints/ComplaintSuccess";
import { ShowComplaint } from "../pages/complaints/ShowComplaint";




function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/complaint'} element={<AddComplaints />} />
        <Route path={'/complaint_success'} element={<ComplaintSuccess />} />
        <Route path={'/show_complaint/:id'} element={<ShowComplaint />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Index }