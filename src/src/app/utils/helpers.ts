
export const toTitleCase = (input: string): string => {
  return input.length === 0 ? '' :
    input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
};

export const generateSlugFromTitle = (titles: string[]): string => {
  let slug = '';
  titles.forEach(element => {
    slug += '-' + element.replace(new RegExp(', ', 'g'), '-').replace(new RegExp(' ', 'g'), '-').toLowerCase();
  });
  return slug.substr(1);
};

export const generateTitleFromSlug = (slug: string): string => {
  let title = '';
  const slugArr = slug.split('-').slice(0, slug.split('-').length - 1);
  slugArr.forEach(element => {
    title += element + ' ';
  });
  return toTitleCase(title);
};

export const shuffle = (input: any[]): any[] => {
  if (!input) {
    return null;
  }
  const output = [...input];
  for (let i = output.length; i; --i) {
    const j = Math.floor(Math.random() * i);
    const x = output[i - 1];
    output[i - 1] = output[j];
    output[j] = x;
  }
  return output;
}
