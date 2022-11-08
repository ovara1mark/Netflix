import React from "react";
import { LandingNavbar } from "../../molecules";
import { LandingHeader } from "../../organisms";
import { PageTemplate } from "../../templates/PageTemplate";

export const LandingPage = () => {
  return (
    <>
      <PageTemplate
        header={
          <>
            <main className="landing-header-contain">
              <section className="landing-header">
                <LandingNavbar />
                <LandingHeader />
              </section>
            </main>
          </>
        }
      ></PageTemplate>
    </>
  );
};
