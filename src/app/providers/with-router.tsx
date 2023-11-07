import { Suspense } from "react";
import { HashRouter } from "react-router-dom";

export const withRouter = (Component: React.ComponentType) => () =>
  (
    <HashRouter>
      <Suspense>
        <Component />
      </Suspense>
    </HashRouter>
  );
