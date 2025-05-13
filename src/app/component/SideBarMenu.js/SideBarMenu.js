import { useState } from "react";
import "./SideBarMenu.css";
import { ProfileNamePopup } from "./ProfileNamePopup.js";
import { CreateIssuePopup } from "./CreateIssuePopup.js";

export const SideBarMenu = () => {
  const [profilePopup, setProfilePopup] = useState(false);
  const [createIssuePopup, setCreateIssuePopup] = useState(false);

  return (
    <div className="mainContainer">
      <section className="sidebarMenuContainer">
        <section className="sidebarMenuItem">
          <button
            type="button"
            name="Initials"
            className="profileInitials"
            onClick={() => setProfilePopup((prev) => !prev)}
          >
            AN
          </button>
          <button
            type="button"
            onClick={() => setProfilePopup((prev) => !prev)}
            className="profileName"
          >
            Anusha's ˅
          </button>
          <button type="button" className="searchWorkPlace">
            🔍
          </button>
          <button
            type="button"
            className="createIssue"
            onClick={() => setCreateIssuePopup((prev) => !prev)}
          >
            {" "}
            ＋
          </button>
        </section>
        {profilePopup && <ProfileNamePopup />}
      </section>
      <section className="homeContainer">
        {createIssuePopup && <CreateIssuePopup closePopup={true} />}
      </section>
      <section>
        <button type="button"> Inbox</button>
        <button type="button" > My Issues</button>
        <button> </button>
      </section>
    </div>
  );
};
