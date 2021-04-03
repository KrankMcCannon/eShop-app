const allProducts = [
  {
    id: 1,
    name: "Nulla",
    price: 207,
    category: { id: "1", name: "Food" },
    rate: 2.44,
    content: "Culpa sed tenetur incidunt quia veniam sed molliti",
    imageUrl: "https://dummyimage.com/400x350",
  },
  {
    id: 2,
    name: "Corporis",
    price: 271,
    category: { id: "1", name: "Food" },
    rate: 2.18,
    content: "Nam incidunt blanditiis odio inventore. Nobis volu",
    imageUrl: "https://dummyimage.com/931x785",
  },
  {
    id: 3,
    name: "Minus",
    price: 295,
    category: { id: "1", name: "Food" },
    rate: 0.91,
    content: "Quod reiciendis aspernatur ipsum cum debitis. Quis",
    imageUrl: "https://dummyimage.com/556x985",
  },
  {
    id: 4,
    name: "Qui",
    price: 280,
    category: { id: "1", name: "Food" },
    rate: 3.11,
    content: "Occaecati dolore assumenda facilis error quaerat. ",
    imageUrl: "https://dummyimage.com/855x573",
  },
  {
    id: 5,
    name: "Similique",
    price: 262,
    category: { id: 2, name: "Food" },
    rate: 0.29,
    content: "Autem blanditiis similique saepe excepturi at erro",
    imageUrl: "http://www.lorempixel.com/577/852",
  },
  {
    id: 6,
    name: "Soluta",
    price: 109,
    category: { id: "1", name: "Food" },
    rate: 0.28,
    content: "Quos accusamus distinctio voluptates ducimus neque",
    imageUrl: "https://dummyimage.com/400x350",
  },
  {
    id: 7,
    name: "Quos",
    price: 247,
    category: { id: "1", name: "Food" },
    rate: 4.74,
    content: "Error voluptate recusandae reiciendis adipisci nec",
    imageUrl: "https://dummyimage.com/400x350",
  },
  {
    id: 8,
    name: "Sunt",
    price: 297,
    category: { id: "1", name: "Food" },
    rate: 4.38,
    content: "Tempora sed explicabo quae recusandae vitae debiti",
    imageUrl: "https://dummyimage.com/400x350",
  },
  {
    id: 9,
    name: "Nemo",
    price: 143,
    category: { id: "1", name: "Food" },
    rate: 1.06,
    content: "Id pariatur at modi esse distinctio error. Dolores",
    imageUrl: "http://www.lorempixel.com/539/402",
  },
  {
    id: 10,
    name: "Quo",
    price: 150,
    category: { id: "1", name: "Food" },
    rate: 3.07,
    content: "Explicabo distinctio labore eius. Culpa provident ",
    imageUrl: "https://dummyimage.com/786x94",
  },
  {
    id: 11,
    name: "Nobis",
    price: 195,
    category: { id: "1", name: "Food" },
    rate: 1.68,
    content: "Reprehenderit iste quos amet. Natus consequatur in",
    imageUrl: "https://dummyimage.com/974x504",
  },
  {
    id: 12,
    name: "Explicabo",
    price: 253,
    category: { id: "1", name: "Food" },
    rate: 0.7,
    content: "Nihil magni libero sapiente voluptate. Perspiciati",
    imageUrl: "https://dummyimage.com/400x350",
  },
  {
    id: 13,
    name: "Hic",
    price: 178,
    category: { id: "1", name: "Food" },
    rate: 4.83,
    content: "Ut assumenda soluta esse officia. Quos quaerat sus",
    imageUrl: "http://www.lorempixel.com/152/368",
  },
  {
    id: 14,
    name: "Occaecati",
    price: 199,
    category: { id: "1", name: "Food" },
    rate: 3.17,
    content: "Aut quam nisi libero distinctio. Temporibus rerum ",
    imageUrl: "https://dummyimage.com/686x327",
  },
  {
    id: 15,
    name: "Consequatur",
    price: 152,
    category: { id: "2", name: "Beverage" },
    rate: 1.74,
    content: "Iste repudiandae nostrum ea iste voluptate ducimus",
    imageUrl: "http://www.lorempixel.com/264/459",
  },
  {
    id: 16,
    name: "Assumenda",
    price: 236,
    category: { id: "2", name: "Beverage" },
    rate: 2.89,
    content: "Sint aperiam voluptatum laudantium laborum at debi",
    imageUrl: "https://dummyimage.com/400x350",
  },
  {
    id: 17,
    name: "Placeat",
    price: 115,
    category: { id: "2", name: "Beverage" },
    rate: 4.7,
    content: "Temporibus reiciendis inventore ratione asperiores",
    imageUrl: "https://dummyimage.com/698x680",
  },
  {
    id: 18,
    name: "Facilis",
    price: 130,
    category: { id: "2", name: "Beverage" },
    rate: 0.64,
    content: "In sequi cumque quisquam corrupti doloribus suscip",
    imageUrl: "http://www.lorempixel.com/10/116",
  },
  {
    id: 19,
    name: "Ratione",
    price: 117,
    category: { id: "2", name: "Beverage" },
    rate: 3.62,
    content: "Corrupti sint occaecati doloribus maiores. Exceptu",
    imageUrl: "https://dummyimage.com/357x988",
  },
  {
    id: 20,
    name: "Non",
    price: 230,
    category: { id: "2", name: "Beverage" },
    rate: 2.28,
    content: "Exercitationem debitis enim eum nemo necessitatibu",
    imageUrl: "https://dummyimage.com/400x350",
  },
  {
    id: 21,
    name: "Quaerat",
    price: 274,
    category: { id: "2", name: "Beverage" },
    rate: 1.97,
    content: "A similique facilis facilis. Excepturi repudiandae",
    imageUrl: "http://www.lorempixel.com/904/25",
  },
  {
    id: 22,
    name: "Fugiat",
    price: 167,
    category: { id: "2", name: "Beverage" },
    rate: 3.67,
    content: "Maiores eveniet dolores laudantium quae doloribus ",
    imageUrl: "https://dummyimage.com/400x350",
  },
  {
    id: 23,
    name: "Voluptas",
    price: 278,
    category: { id: "2", name: "Beverage" },
    rate: 1.86,
    content: "Quas a at officia quod in quod. Impedit deserunt t",
    imageUrl: "https://dummyimage.com/572x213",
  },
  {
    id: 24,
    name: "Repellendus",
    price: 285,
    category: { id: "3", name: "Snack" },
    rate: 4.46,
    content: "Alias maiores soluta ab earum asperiores praesenti",
    imageUrl: "https://dummyimage.com/396x712",
  },
  {
    id: 25,
    name: "Quibusdam",
    price: 209,
    category: { id: "4", name: "Cigarettes" },
    rate: 0.21,
    content: "Assumenda debitis voluptatem magnam temporibus mol",
    imageUrl: "http://www.lorempixel.com/1016/738",
  },
];

const categories = [
  { id: "1", name: "Food" },
  { id: "2", name: "Beverage" },
  { id: "3", name: "Snack" },
  { id: "4", name: "Cigarettes" },
];

export function getAllProducts() {
  return allProducts;
}

export function getAllCategories() {
  return categories.filter((c) => c);
}
