type Props = {
  children: React.ReactNode;
  link: string;
};

const SocialButton = ({ children, link }: Props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="border-4 border-white rounded-full hover:scale-120 p-5 bg-opacity-5 hover:bg-gray-100/35"
    >
      {children}
    </a>
  );
};

export default SocialButton;
