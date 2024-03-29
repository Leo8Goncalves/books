import { BooksSection } from "../../components/BookSection";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { TitleSection } from "../../components/TitleSection";

export const HomePage = () => {
  return (
    <DefaultTemplate>
      <TitleSection />
      <BooksSection />
    </DefaultTemplate>
  );
};
