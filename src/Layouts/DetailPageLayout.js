import { Outlet } from "react-router";

export default function DetailPageLayout() {
  return (
    <div>
      <div className="detail-page-top-bar"></div>
      <h1>Detail Page</h1>
      <Outlet />
    </div>
  );
}
