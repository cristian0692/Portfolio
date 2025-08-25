const WhatILearned = () => {
  return (
    <div className="bg-custom-beige border-5 rounded-lg border-custom-orange p-4 flex flex-col gap-5">
      <div className="text-4xl">What I Learned</div>
      <div className="text-xl">
        I learned a lot about how{" "}
        <span className="text-custom-orange">React uses Hooks</span> and effects
        to manage data, as well as how to{" "}
        <span className="text-custom-orange">create custom hooks</span> to
        safely retrieve information from a database. The tutorial also gave me
        insight into how a MERN stack infrastructure is structured and how to{" "}
        <span className="text-custom-orange">implement APIs</span> within it.
        Overall, it was extremely helpful and provided me with production-grade
        knowledge.
      </div>
    </div>
  );
};

export default WhatILearned;
