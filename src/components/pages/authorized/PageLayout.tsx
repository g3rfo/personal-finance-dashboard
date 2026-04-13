import HeaderTitle from "./header/HeaderTitle";
import PageHeader from "./header/PageHeader";

interface PageLayoutProps {
  title?: string;
  description?: string;
  popup?: React.ReactNode;
  content?: React.ReactNode;
}

function PageLayout({ title, description, popup, content }: PageLayoutProps) {
  return (
    <>
      <PageHeader>
        <HeaderTitle
          title={title ?? "Page Title"}
          description={description ?? "Page description goes here."}
        />
        {popup ?? null}
      </PageHeader>
      {content ?? null}
    </>
  );
}

export default PageLayout;
