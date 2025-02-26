export interface PdfDownload {
  pdf: PDFKit.PDFDocument | Promise<PDFKit.PDFDocument>;
}
