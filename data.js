export const generateData = (count) => {
  const data = [];
  const types = ['Audio', 'Video', 'Website', 'Document'];
  
  for (let i = 0; i < count; i++) {
    data.push({
      title: `File Title ${i + 1}`,
      description: `Description for file ${i + 1}`,
      category: 'General',
      documentType: types[Math.floor(Math.random() * types.length)],
      dateCreated: new Date(),
      lastUpdated: new Date()
    });
  }
  return data;
};
