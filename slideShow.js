const imagem = [
    {
        'id': '1' , 'url': 'IMG_1037.jpeg'
    },
    {
        'id': '2' , 'url': 'IMG_1038.jpeg'
    },
    {
        'id': '3' , 'url': 'IMG_1039.jpeg'
    },
    {
        'id': '4' , 'url': 'IMG_1020.jpeg'
    },
   {
        'id': '5' , 'url': 'IMG_1021.jpeg'
    },
    {
        'id': '6' , 'url': 'IMG_1022.jpeg'
    },
     {
        'id': '7' , 'url': 'IMG_1030.jpeg'
    },
    {
        'id': '8' , 'url': 'IMG_1024.jpeg'
    },
   {
        'id': '9' , 'url': 'IMG_1025.jpeg'
    },
   {
        'id': '10' , 'url': 'IMG_1026.jpeg'
    },
    {
        'id': '11' , 'url': 'IMG_1027.jpeg'
    },
    {
        'id': '12' , 'url': 'IMG_1028.jpeg'
    }, 
    
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( imagem, container ) => {
    imagem.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( imagem, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
