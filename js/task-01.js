const categoriesList = document.querySelector('#categories');
const catecoriesItems = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', catecoriesItems.length);

catecoriesItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}\nElements: ${categoryElements}`);
});
