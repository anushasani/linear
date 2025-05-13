import { useState } from "react";
export const CreateIssuePopup = () => {
  const [closePopup, setClosePopup] = useState(true);
  const handleClosePopup = () => {
    setClosePopup(false);
  };

  return (
    <div>
      {closePopup && (
        <div className="createIssuePopup">
          <div className="createIssueHeader">
            <button className="linearButton"> 👨🏼‍💼 LINER ˃</button>
            <h4>New Issue</h4>
            <button onClick={() => handleClosePopup()} className="closeButton">
              X
            </button>
          </div>
          <div className="createIssueBody">
            <input type="text" placeholder="Enter Title" />
            <input type="text" placeholder="Description" />
          </div>
          <div className="createIssueButtons">
            <button >Backlog</button>
            <button>..Priority</button>
            <button>Assignee</button>
            <button>Tag</button>
            <button>...</button>
          </div>
          <div className="whiteLine"></div>
          <div className="createIssueFooter">
            <button>⍖</button>
            <button>Create Issue</button>
          </div>
        </div>
      )}
    </div>
  );
};
