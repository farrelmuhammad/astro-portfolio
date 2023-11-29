export default interface Portfolio {
    id: number;
    attributes: {
        title: string;
        description: string;
        url: string;
        tags: {
            tags: { /* Jika strukturnya lebih spesifik, bisa ditambahkan di sini */ };
        };
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        // Anda dapat menambahkan properti lainnya jika ada
    };
}