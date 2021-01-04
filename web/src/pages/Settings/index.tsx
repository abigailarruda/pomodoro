import React from "react";

import "./styles.css";

import Modal from "../../components/Modal";

interface SettingsProps {
  id: string;
}

function Settings(props: SettingsProps) {
  return (
    <Modal target={props.id}>
      <h1 className="title-settings">Settings</h1>
      <form className="w-100">
        <div className="row mb-3">
          <label htmlFor="scheme" className="col-4 col-form-label">
            Scheme
          </label>
          <div className="col-8">
            <select className="custom-select" id="scheme">
              <option defaultValue="default">default · 25 5 15 4</option>
              <option value="personal">personal · 30 2 25 4</option>
              <option value="work">work · 50 10 20 2</option>
            </select>
          </div>
        </div>
        <div className="row">
          <label htmlFor="sound" className="col-4 col-form-label">
            Sound
          </label>
          <div className="col-8">
            <select className="custom-select" id="sound">
              <option defaultValue="bell">bell</option>
              <option value="beep">beep</option>
            </select>
          </div>
        </div>
        <button className="btn btn-save" type="submit">
          Save
        </button>
      </form>
    </Modal>
  );
}

export default Settings;
