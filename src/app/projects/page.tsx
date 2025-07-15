import ProjectItem from "@/components/ProjectItem";
import { generateRandomProjects } from "@/utils/generateProjects";
const page = () => {
  const projects = generateRandomProjects(6);

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-28 mb-15 px-14 max-w-[1200px]">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
            totalProjects={projects.length}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
