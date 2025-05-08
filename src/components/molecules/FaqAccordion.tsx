import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqAccordion = ({
  answer,
  question,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-fundable-violet-lighter/50 mb-4 py-2 px-6 rounded-xl text-fundable-white bg-black isolate"
    >
      <AccordionItem value={`item-${question}`}>
        <AccordionTrigger className="text-base cursor-pointer">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-base">{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
