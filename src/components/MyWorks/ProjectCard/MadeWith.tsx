type Props = {
  createdBy: string[];
};

const MadeWith = ({ createdBy }: Props) => {
  return (
    <div className="pl-3 flex gap-3 flex-col justify-center items-center">
      {createdBy.length != 0 && <div>Made with the help of:</div>}
      <div className="flex flex-col gap-2">
        {createdBy.map((creator) => (
          <div>{creator}</div>
        ))}
      </div>
    </div>
  );
};

export default MadeWith;
