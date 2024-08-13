import { ReactNode } from "react";

// Types
type SocialLinkProps = {
  link: string;
  title: string;
  icon: ReactNode;
};

const SocialLink = ({ link, title, icon }: SocialLinkProps) => {
  return (
    <a
      href={link}
      className="group/item btn btn-ghost btn-sm hover:scale-110 hover:bg-[#ffffff0a]"
      target="_blank"
      title={title}
    >
      {icon}
    </a>
  );
};
export default SocialLink;
