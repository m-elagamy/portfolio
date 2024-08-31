const ScrollIndicator = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div
      className="fixed left-0 top-0 z-[51] h-[3px] rounded bg-[#3bb5e6]"
      style={{
        width: `${scrollProgress}%`,
      }}
    />
  );
};
export default ScrollIndicator;
