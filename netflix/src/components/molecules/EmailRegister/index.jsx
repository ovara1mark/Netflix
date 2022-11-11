import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Button, Input } from "../../atoms";

export const EmailRegister = () => {
  return (
    <>
      <form className="form-container">
        <div className="email-holder">
          <div className="email-holder-contain">
            <div className="cta-b">
              <Input
                type="email"
                className="landing-email-input"
                label={
                  <>
                    <label className="floating-label">Email address</label>
                  </>
                }
              />
            </div>
            <Button className="landing-email-btn">
              <span className="cta">Get Started</span>
              <span>
                <BsChevronRight className="s-email" />
              </span>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
