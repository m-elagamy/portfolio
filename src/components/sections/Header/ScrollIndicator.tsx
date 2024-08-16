const ScrollIndicator = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="relative">
      <div
        className="absolute left-0 top-0 h-1 rounded bg-[#3bb5e6]"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};
export default ScrollIndicator;
