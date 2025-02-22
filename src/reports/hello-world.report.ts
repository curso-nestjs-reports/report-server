import type { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {
  name: string;
}

export const getHelloWorldReport = (options: ReportOptions) => {
  const docDefinition: TDocumentDefinitions = {
    content: [`Hola ${options.name}!`],
  };

  return docDefinition;
};
