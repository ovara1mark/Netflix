import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Button, Input } from "../../atoms";

export const EmailRegister = () => {
  return (
    <>
      <div className="email-holder">
        <div className="email-holder-contain">
          <div className="cta-b">
            <Input
              className="landing-email-input"
              placeholder="Email address"
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
    </>
  );
};
