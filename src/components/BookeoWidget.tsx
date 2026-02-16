interface BookeoWidgetProps {
  accountId: string;
  course?: string;
}

export const BookeoWidget = ({ accountId, course }: BookeoWidgetProps) => {
  return (
    <iframe
      src={`https://bookeo.com/cailinminingcivil?type=${course}`}
      width="100%"
      height="900px"
      frameBorder="0"
      scrolling="auto"
    />
  );
};
