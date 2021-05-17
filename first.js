const itemListElement = document.getElementById('item-list');
const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
let requestUrlComments = 'https://jsonplaceholder.typicode.com/posts/:id/comments'

const sendRequest = (method, url) => {
    return fetch(url).then( response => {
        return response.json()
    })
}

const itemList = (product) => {
    let result = (item, index) => {
        return `<ul>
                    <li>${item.title}</li>
                    <li>${item.body}</li>
                    <li>${item.id}</li>
                    <button onclick="getProduct(${index})">GET</button>
                </ul>
                `
    }
    return product.map(result);
}

getProduct = (index) => {
    sendRequest('GET', requestUrl)
        .then(data => {
            const array = data[index];
            const renderItem = (array) => {
                return `<ul>
                            <li>${array.title}</li>
                            <li>${array.body}</li>
                            <li>${array.id}</li>
                            <button onclick="openComments(${array.id})">Comment</button>
                        </ul>`
            }
            const getItem = renderItem(array);
            itemListElement.innerHTML = getItem;
        })
}

openComments = (id) => {
    let url = requestUrlComments.replace(':id', id)
    sendRequest('GET', url, id)
        .then(data => {
            const itemComment = (data) => {
                let result = (item) => {
                    return `<ul>
                    <li>postId: ${item.postId}</li>
                    <li>id: ${item.id}</li>
                    <li>name: ${item.name}</li>
                    <li>email: ${item.email}</li>
                    <li>${item.body}</li>
                </ul>
                `
                }
                return data.map(result);
            }
            const productsList = itemComment(data);
            let productsHtml = productsList.join('')
            itemListElement.innerHTML = productsHtml;
        })
}

sendRequest('GET', requestUrl)
    .then(data =>  {
        const productsList = itemList(data);
        let productsHtml = productsList.join('')
        itemListElement.innerHTML = productsHtml;

    })
    .catch(err => console.log(err))

