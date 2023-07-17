import React, { useContext, useEffect } from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import {
  TextSection,
  PhotosSection,
  ElementsSection,
  UploadSection,
} from "polotno/side-panel";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";

import ThemeContext from "../context/ThemeContext";
import Nav from "../components/Nav";
import { createStore } from "polotno/model/store";
import { getTranslations, setTranslations } from 'polotno/config';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const store = createStore({
  key: import.meta.env.VITE_POLOTNO_KEY,
  showCredit: true,
});
const sections = [TextSection, PhotosSection, ElementsSection, UploadSection];

const EditorPage = () => {
  let [theme, _] = useContext(ThemeContext);
  let { t, i18n } = useTranslation('editor');

  useEffect(() => {
    let translation = i18next.getResourceBundle(i18n.resolvedLanguage, "editor")
    setTranslations(translation)

  }, [i18n.language]);

  useEffect(() => {
    const page = store.addPage();
    page.set({
      width: 1000,
      height: 1000,
      background: import.meta.env.BASE_URL + "/images/tshirt_front.jpg",
    });
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("bp4-dark");
    } else {
      document.body.classList.remove("bp4-dark");
    }
  }, [theme]);

  return (
    <div>
      <Nav />
      <link href="https://unpkg.com/normalize.css@^8.0.1" rel="stylesheet" />

      <link
        href="https://unpkg.com/@blueprintjs/icons@^4.0.0/lib/css/blueprint-icons.css"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/@blueprintjs/core@^4.0.0/lib/css/blueprint.css"
        rel="stylesheet"
      />
      <PolotnoContainer style={{ width: "100vw", height: "90vh" }}>
        <SidePanelWrap>
          <SidePanel store={store} sections={sections} defaultSection="text" />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} />
          <Workspace
            store={store}
            components={{ PageControls: () => null }}
            backgroundColor={theme === "dark" ? "#293742" : "#D9D9D9"}
          />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
};

export default EditorPage;
