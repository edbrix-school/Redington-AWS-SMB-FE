export const generateData = (count) => {
    const data = [];
    const types = ['Audio', 'Video', 'Website', 'Document'];

    for (let i = 0; i < count; i++) {
        data.push({
            title: `Announcement ${i + 1}`,
            description: `Description for announcement ${i + 1}`,
            category: 'News',
            documentType: types[Math.floor(Math.random() * types.length)],
            dateCreated: new Date(),
            lastUpdated: new Date()
        });
    }
    return data;
};
