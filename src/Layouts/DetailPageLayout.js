import { Outlet } from "react-router";

export default function DetailPageLayout() {
  return (
    <div>
      <div className="detail-page-top-bar"></div>
      <div className="detail-page-frame">
        <Outlet />
      </div>
    </div>
  );
}
