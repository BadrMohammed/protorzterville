export const scrollToTarget = (id: string) => {
  let div: any = document.querySelector(`#${id}`);
  if (div) {
    return div.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
