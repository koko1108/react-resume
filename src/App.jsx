import { useState, useEffect } from "react";
import Previewer from "./previewer";
import Editor from "./editor";

function useResume() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState("");

  const [isAlreadyLoad, setIsAlreadyLoad] = useState(false);

  useEffect(() => {
    const loadedName = localStorage.getItem("name") || "";
    setName(loadedName);
    const loadedSkills = JSON.parse(localStorage.getItem("skills") || "[]");
    setSkills(loadedSkills);
    const storedGender = localStorage.getItem("gender") || "";
    setGender(storedGender);

    setIsAlreadyLoad(true);
  }, []);

  useEffect(() => {
    if (!isAlreadyLoad) {
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("gender", gender);
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [name, gender, skills, isAlreadyLoad]);

  return {
    name,
    setName,
    gender,
    setGender,
    skills,
    setSkills,
  };
}

function App() {
  const { name, setName, gender, setGender, skills, setSkills } = useResume();

  return (
    <div className="app hero min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="hero-content flex-col gap-x-24 lg:flex-row-reverse">
        <Editor
          name={name}
          setName={setName}
          skills={skills}
          setSkills={setSkills}
          gender={gender}
          setGender={setGender}
        />
        <Previewer name={name} gender={gender} skills={skills} />
      </div>
    </div>
  );
}

export default App;
