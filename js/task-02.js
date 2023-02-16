/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients. */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

const firstIngredientItem = document.createElement('li');
firstIngredientItem.classList.add('.item')
firstIngredientItem.textContent = 'Potatoes';

const secondIngredientItem = document.createElement('li');
secondIngredientItem.classList.add('.item');
secondIngredientItem.textContent = 'Mushrooms';

const thirdIngredientItem = document.createElement('li');
thirdIngredientItem.classList.add('.item');
thirdIngredientItem.textContent = 'Garlic';

const fourthIngredientItem = document.createElement('li');
fourthIngredientItem.classList.add('.item');
fourthIngredientItem.textContent = 'Tomatos';

const fifthIngredientItem = document.createElement('li');
fifthIngredientItem.classList.add('.item');
fifthIngredientItem.textContent = 'Herbs';

const sixthIngredientItem = document.createElement('li');
sixthIngredientItem.classList.add('.item');
sixthIngredientItem.textContent = 'Condiments';

listOfIngredients.append(firstIngredientItem, secondIngredientItem, thirdIngredientItem, fourthIngredientItem, fifthIngredientItem, sixthIngredientItem);