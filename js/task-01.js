/* Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >). */

/* Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const categoriesItem = document.querySelector('#categories');

const catecoriesItemEl = categoriesItem.querySelectorAll('.item');
console.log('Number of categories:', catecoriesItemEl.length);

const firstCategoryItem = categoriesItem.firstElementChild;
const nameOfFirstCategory = firstCategoryItem.querySelector('h2');
const nameAnimalCategory = nameOfFirstCategory.textContent;
console.log('Category:', nameAnimalCategory);

const categoryAnimaItemEl = firstCategoryItem.querySelectorAll('li');
console.log('Elements:', categoryAnimaItemEl.length);

const secondCategoryItem = firstCategoryItem.nextElementSibling;
const nameOfSecondCategory = secondCategoryItem.querySelector('h2');
const nameProductsCategory = nameOfSecondCategory.textContent;
console.log('Category:', nameProductsCategory);

const categoryProductsItemEl = secondCategoryItem.querySelectorAll('li');
console.log('Elements:', categoryProductsItemEl.length);

const thirdCategoryItem = categoriesItem.lastElementChild;
const nameOfThirdCategory = thirdCategoryItem.querySelector('h2');
const nameTechnologiesCategory = nameOfThirdCategory.textContent;
console.log('Category:', nameTechnologiesCategory);

const categoryTechnologiesItemEl = thirdCategoryItem.querySelectorAll('li');
console.log('Elements:', categoryTechnologiesItemEl.length);