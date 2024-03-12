const genderMap = {
  male: "男",
  female: "女",
  normal: "中性",
  none: "",
};

function Previewer(props) {
  const { name, gender, skills } = props;

  return (
    <div className="previewer text-center min-w-48 lg:text-left">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo bg-slate-800 phone-1">
            <div className="avatar">
              <div className="w-24 rounded-full border-4 border-indigo-600">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar"/>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-100 drop-shadow-lg block py-6">
              {name}
            </h1>

            {genderMap[gender] && (
              <p className="gender font-bold text-slate-100 mb-4">
                性別 | {genderMap[gender]}
              </p>
            )}
            <div>
              <h2 className="text-md font-bold text-slate-100 mb-2">
                專業技能
              </h2>
              <ul className="menu menu-xs bg-base-200 w-56 rounded-box">
                {skills &&
                  skills.map((skill, index) => (
                    <li key={skill.id}>{skill.text}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Previewer;
