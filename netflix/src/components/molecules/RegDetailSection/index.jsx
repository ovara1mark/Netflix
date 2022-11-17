import React from "react";
import { Button, Text } from "../../atoms";
import { Link } from "react-router-dom";
import { RegisterContain, RegisterHold, RegisterSection } from "./app";

export const RegDetailSection = () => {
  return (
    <>
      <RegisterSection>
        <RegisterHold>
          <RegisterContain>
            <div className="register-text-contain reg-contain">
              <span className="register-text">
                STEP <b>1</b> OF <b>3</b>
              </span>
              <Text type="h1" className="register-h1 reg-txt">
                Create a password to start your membership
              </Text>
              <div className="register-p reg-txt reg-txt-2">
                Just a few more steps and you're done! We hate paperwork, too.
              </div>

              <Button className="register-btn">
                <Link to="/signup/regform" className="link-btn-reg">
                  Next
                </Link>
              </Button>
            </div>
          </RegisterContain>
        </RegisterHold>
      </RegisterSection>
    </>
  );
};
