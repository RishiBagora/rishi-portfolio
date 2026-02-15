const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default GridOverlay;
