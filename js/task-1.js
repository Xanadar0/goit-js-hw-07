const count = document.querySelectorAll('ul#categories li.item');
console.log(`Number of catagories: ${count.length}`);

count.forEach(category => {
    const itemTitle = category.querySelector('h2').textContent;
    console.log(`Category: ${itemTitle}`);
    const itemList = category.querySelectorAll('ul li').length;
    console.log(`Elements: ${itemList}`);
});