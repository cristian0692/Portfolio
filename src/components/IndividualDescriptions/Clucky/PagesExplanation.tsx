import type { PageDescriptions } from "@/types";
import CustomSeparator from "./CustomSeparator";
import { useImageStore } from "@/lib/imageStore";

type Props = {
  pages: PageDescriptions[];
};

const PagesExplanation = ({ pages }: Props) => {
  const getPageImageURLs = () => {
    const URLs = pages.map((page) => page.imageUrl);

    return URLs;
  };

  const setImages = useImageStore((state) => state.setImages);
  return (
    <div className="flex flex-col gap-10 items-start">
      <div id="moreDetails" className="text-3xl">
        Each Page Explained
      </div>
      <div className="flex flex-col gap-15">
        {pages.map((page, index) => (
          <div className="flex flex-col gap-10">
            <div className="flex lg:flex-row flex-col gap-10 ">
              <div className="h-full text-3xl flex items-center justify-center">
                {index + 1}.
              </div>
              <div
                onClick={() => setImages(getPageImageURLs(), index)}
                className="md:flex-3 md:max-w-100 h-full flex justify-start"
              >
                <img
                  className="hover:scale-105 w-full h-auto object-contain"
                  src={`/images/${page.imageUrl}`}
                />
              </div>
              <div className="md:flex-4 flex flex-col gap-3">
                <div className="text-2xl">{page.title}</div>
                <div className="text-lg">{page.description}</div>
              </div>
            </div>
            {index != pages.length - 1 && <CustomSeparator />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesExplanation;
