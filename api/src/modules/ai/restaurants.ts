export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  category: string;
  cookingTime?: number;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating?: number;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Пицца Хаус',
    cuisine: 'Итальянская',
    rating: 4.5,
    menu: [
      {
        id: '101',
        name: 'Маргарита',
        description: 'Томатный соус, моцарелла, базилик',
        price: 450,
        available: true,
        category: 'Пицца',
        cookingTime: 20,
      },
      {
        id: '102',
        name: 'Пепперони',
        description: 'Томатный соус, моцарелла, пепперони',
        price: 550,
        available: true,
        category: 'Пицца',
        cookingTime: 25,
      },
      {
        id: '103',
        name: 'Цезарь салат',
        description: 'Курица, салат романо, гренки, соус цезарь, пармезан',
        price: 350,
        available: true,
        category: 'Салат',
        cookingTime: 15,
      },
      {
        id: '104',
        name: 'Кока-кола',
        description: '0.5л',
        price: 120,
        available: true,
        category: 'Напиток',
      },
    ],
  },
  {
    id: '2',
    name: 'Бургер Кинг',
    cuisine: 'Американская',
    menu: [
      {
        id: '201',
        name: 'Классический бургер',
        description: 'Говяжья котлета, сыр, салат, томат, лук, соус',
        price: 380,
        available: true,
        category: 'Бургер',
        cookingTime: 15,
      },
      {
        id: '202',
        name: 'Двойной чизбургер',
        description:
          'Две говяжьи котлеты, двойной сыр, лук, соленые огурцы, кетчуп, горчица',
        price: 520,
        available: true,
        category: 'Бургер',
        cookingTime: 20,
      },
      {
        id: '203',
        name: 'Картофель фри',
        description: 'С солью',
        price: 150,
        available: false,
        category: 'Закуска',
        cookingTime: 10,
      },
      {
        id: '204',
        name: 'Милкшейк шоколадный',
        description: '0.4л',
        price: 200,
        available: true,
        category: 'Напиток',
        cookingTime: 5,
      },
    ],
  },
  {
    id: '3',
    name: 'Суши Маркет',
    cuisine: 'Японская',
    rating: 1.5,
    menu: [
      {
        id: '301',
        name: 'Филадельфия',
        description: 'Лосось, сливочный сыр, огурец, рис',
        price: 490,
        available: true,
        category: 'Ролл',
        cookingTime: 30,
      },
      {
        id: '302',
        name: 'Калифорния',
        description: 'Краб, авокадо, огурец, икра тобико, рис',
        price: 450,
        available: true,
        category: 'Ролл',
        cookingTime: 35,
      },
      {
        id: '303',
        name: 'Мисо суп',
        description: 'С тофу и водорослями',
        price: 200,
        available: true,
        category: 'Суп',
        cookingTime: 10,
      },
      {
        id: '304',
        name: 'Зеленый чай',
        description: '0.3л',
        price: 100,
        available: true,
        category: 'Напиток',
        cookingTime: 5,
      },
    ],
  },
  {
    id: '4',
    name: 'Пицца Плюс',
    cuisine: 'Пицца',
    rating: 4.3,
    menu: [
      {
        id: '401',
        name: 'Маргарита',
        description: 'Томатный соус, моцарелла, базилик',
        price: 350,
        available: true,
        category: 'Пицца',
        cookingTime: 15,
      },
      {
        id: '402',
        name: 'Пепперони',
        description: 'Томатный соус, моцарелла, пепперони, базилик',
        price: 450,
        available: true,
        category: 'Пицца',
        cookingTime: 20,
      },
      {
        id: '403',
        name: 'Четыре сыра',
        description:
          'Томатный соус, моцарелла, сыр чеддер, сыр пармезан, сыр моцарелла, базилик',
        price: 550,
        available: true,
        category: 'Пицца',
        cookingTime: 25,
      },
      {
        id: '404',
        name: 'Кока-кола',
        description: '0.5л',
        price: 120,
        available: true,
        category: 'Напиток',
        cookingTime: 5,
      },
    ],
  },
];
