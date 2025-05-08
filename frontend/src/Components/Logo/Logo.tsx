const WhiteLogo = () => {
  return (
    <div className="flex flex-row items-center">
      <img src="/tw.png" alt="logo" className="w-14" />
      <h2 className="oswald-regular text-4xl cursor-default">TizzTree</h2>
    </div>
  );
};

const BlackLogo = () => {
  return (
    <div className="flex flex-row items-center">
      <img src="/T.png" className="w-14 justify-center" alt="logo" />
      <h2 className="oswald-regular text-4xl cursor-default">TizzTree</h2>
    </div>
  );
};

export { WhiteLogo, BlackLogo };
