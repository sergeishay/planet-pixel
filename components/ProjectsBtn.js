import Link from "next/link";

const ProjectsBtn = ({backgroundColor, text, textColor, url}) => {
  return (
    <div>
      <Link
        href={`/${url}`}
        className={`bg-${backgroundColor} text-${textColor} border-lightBlue font-semibold border-2 px-7 mr-5 py-3 z-8 rounded-[6px]`}
      >
        {text}
      </Link>
    </div>
  );
};

export default ProjectsBtn;
