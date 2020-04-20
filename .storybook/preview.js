import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/mainTheme";
import { MemoryRouter } from "react-router";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
