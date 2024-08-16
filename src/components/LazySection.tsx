import { Suspense, ComponentType } from "react";

// Types
type LazySectionProps = {
  component: ComponentType;
  fallback: JSX.Element;
};

const LazySection = ({ component: Component, fallback }: LazySectionProps) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default LazySection;
