import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  margin: [0, 0, 0, 20],
};

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showDate?: boolean;
  showLogo?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, showDate = true, showLogo = true } = options;

  const headerLogo: Content = showLogo && logo;
  const headerDate: Content = showDate && {
    text: DateFormatter.getStringDate(new Date()),
    style: 'headerDate',
  };
  const headerTitle: Content = title && { text: title, style: { bold: true } };

  return {
    columns: [headerLogo, headerTitle, headerDate].filter(Boolean),
  };
};
