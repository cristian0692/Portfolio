type Props = {
  backEndLink?: string;
  frontEndLink?: string;
};

const GitHubRef = ({ backEndLink, frontEndLink }: Props) => {
  return (
    <div className="flex w-full justify-start items-center gap-10">
      <div className="text-xl">GitHub:</div>
      <div className="flex gap-3 items-center">
        <a
          className="text-xl text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
          href={backEndLink}
        >
          BackEnd
        </a>
        <div className="text-4xl">/</div>
        <a
          className="text-xl text-custom-orange underline"
          target="_blank"
          rel="noopener noreferrer"
          href={frontEndLink}
        >
          FrontEnd
        </a>
      </div>
    </div>
  );
};

export default GitHubRef;
