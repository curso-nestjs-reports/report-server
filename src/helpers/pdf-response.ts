import { Response } from 'express';

export const handleResponse = async (
  response: Response,
  data: PDFKit.PDFDocument | Promise<PDFKit.PDFDocument>,
) => {
  response.setHeader('Content-Type', 'application/pdf');
  const pdfDoc = await data;
  pdfDoc.info.Title = 'hola_mundo';
  pdfDoc.pipe(response);
  pdfDoc.end();
};
