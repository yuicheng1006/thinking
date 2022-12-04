const Marquee = ({ color }) => {
  return (
    <div className="marquee_wrap">
      <div className={`home_marquee ${color && 'green'}`}>
        <span>為什麼要思考？因為學校沒有教 •_ゝ•</span>
        <span>為什麼要思考？因為學校沒有教 •_ゝ•</span>
        <span>為什麼要思考？因為學校沒有教 •_ゝ•</span>
      </div>
    </div>
  );
};

export default Marquee;
