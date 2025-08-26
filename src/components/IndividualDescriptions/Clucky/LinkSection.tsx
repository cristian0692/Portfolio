import type { ProjectLinks } from "@/types";
import GitHubRef from "./GitHubRef";

type Props = {
  links: ProjectLinks;
};

const LinkSection = ({ links }: Props) => {
  return (
    <div className="w-full flex-4 flex flex-col items-start gap-5">
      <div className="flex w-full justify-between">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={links.liveWebsite}
          className="text-xl text-custom-orange underline"
        >
          Live Server
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={links.tutorial}
          className="underline text-lg"
        >
          Tutorial that I followed
        </a>
      </div>

      <GitHubRef
        backEndLink={links.gitHubBackEnd}
        frontEndLink={links.gitHubFrontEnd}
      />
    </div>
  );
};

export default LinkSection;
