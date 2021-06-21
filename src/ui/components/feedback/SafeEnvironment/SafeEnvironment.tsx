import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@material-ui/core";

export default function SafeEnvironment() {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente 100% seguro! <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
}
