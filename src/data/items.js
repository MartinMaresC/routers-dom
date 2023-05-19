export const items = [
    {
        id: '0',
        name: 'Martin',
        telephone: '449 000 00 00',
        favorite: true
    },
    {
        id: '1',
        name: 'Arturo',
        telephone: '449 000 00 01',
        favorite: false
    },
];

export function getContact(id) {
    return items.find((item) => item.id === id);
}