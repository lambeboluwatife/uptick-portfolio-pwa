const Loading = () => {
  return (
    <div className="loading">
      <img
        rel="preload"
        src="/lbd.webp"
        alt="loading image"
        width="30px"
        height="30px"
        loading="lazy"
      />
    </div>
  );
};

export default Loading;
