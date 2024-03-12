import { useState } from "react";

const genderOptions = [
  { label: "男", value: "male" },
  { label: "女", value: "female" },
  { label: "中立", value: "normal" },
  { label: "不透露", value: "none" },
];

function Editor(props) {
  const { name, setName, skills, setSkills, gender, setGender } = props;
  const [skillInputText, setSkillInputText] = useState("");

  const handleAddSkill = () => {
    const newSkill = {
      id: Date.now(),
      text: skillInputText,
    };

    const newSkills = [...skills, newSkill];
    setSkills(newSkills);

    setSkillInputText("");
  };

  // 根據 ID 刪除技能
  const handleRemoveSkill = (skillId) => {
    // 建立一個新的陣列，而這個陣列沒有指定 id 的元素
    const newSkills = skills.filter((skill) => skill.id !== skillId);
    setSkills(newSkills);
  };

  return (
    <div className="editor card shrink-0 w-full max-w-sm shadow-2xl backdrop-blur-md bg-white/70">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">姓名: </span>
          </label>
          <div className="join">
            <input
              placeholder="請輸入姓名"
              className="input input-bordered w-4/5 join-item"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              className="btn join-item "
              onClick={() => {
                setName("");
              }}
            >
              清空
            </button>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">性別:</span>
          </label>
          {genderOptions.map((option) => (
            <label key={option.value} className="flex mb-2">
              <input
                className="radio checked:bg-blue-500 mr-2"
                type="radio"
                value={option.value}
                onChange={(e) => setGender(e.target.value)}
                checked={gender === option.value}
              />
              <span className="label-text">{option.label}</span>
            </label>
          ))}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">專業技能:</span>
          </label>
          {skills.map((skill) => (
            // key 只需要加在最外層的元素上即可
            <div key={skill.id} className="chat chat-end">
              <span className="chat-bubble chat-bubble-primary">
                {skill.text}
              </span>
              <button
                className="btn btn-circle btn-outline btn-xs"
                onClick={() => handleRemoveSkill(skill.id)}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
          <div className="join w-100">
            <input
              placeholder="請輸入專業技能"
              className="input input-bordered w-4/5 join-item"
              value={skillInputText}
              onChange={(e) => {
                setSkillInputText(e.target.value);
              }}
            />
            <button className="btn join-item " onClick={handleAddSkill}>
              新增
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Editor;
