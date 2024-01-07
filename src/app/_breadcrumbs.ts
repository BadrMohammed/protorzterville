export const breadcrumbs: any = {
  news: {
    title: 'News Listing',
    breadcrumb: [{ label: 'News Listing', url: '' }],
    isViewSearch: true,
  },
  ['news/']: {
    title: 'News Details',
    breadcrumb: [
      { label: 'News Listing', url: '/news' },
      { label: 'News Details', url: '' },
    ],
    isViewSearch: false,
  },
  courses: {
    title: 'Internship Courses',
    breadcrumb: 'Home Internship Courses Listing',
    isViewSearch: true,
  },

  ['virtual-program']: {
    title: 'Virtual Program',
    breadcrumb: [{ label: 'Virtual Program', url: '' }],
    isViewSearch: false,
  },
  ['virtual-program/']: {
    title: 'Virtual Program',
    breadcrumb: [
      { label: 'Virtual Program', url: '/virtual-program' },
      { label: '', url: '' },
    ],
    isViewSearch: false,
  },
};
