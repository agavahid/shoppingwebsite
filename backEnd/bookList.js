
const books = [
    {
        author: "Celil Memmedquluzade",
        piece: "Ölüler",
        photoUrl: "https://sonavaliyeva.com/file/articles/2021/08/20/1629428869_celil-1.jpg",
        id: 1
    },
    {
        author: "Mirze Elekber Sabir",
        piece: "Hop-Hop name",
        photoUrl: "https://mbdincaslan.com/media/k2/items/cache/2cf3de1421350014af841348e8a1b0fb_XL.jpg",
        id: 2
    },
    {   
        author: "Nizami Gencevi",
        piece: "Xemse",
        photoUrl: "https://upload.wikimedia.org/wikipedia/az/8/8c/Nizaminin_portreti_Q%C9%99z%C9%99nf%C9%99r_Xal%C4%B1qov.jpg",
        id: 3
    },
    {
        author: "Füzuli",
        piece: "Leyla ile Mecnun",
        photoUrl: "https://mehriban-aliyeva.az/store/Fizuli_201208.jpg",
        id: 4
    },
    {
        author: "Nesimi",
        piece: "Heqq Menem",
        photoUrl: "https://i2.milimaj.com/i/milliyet/75/869x477/60af977d5542852f906b41fa.jpg",
        id: 5
    },
    {
        author: "Mirze Feteli Axundov",
        piece: "Aldanmış Kevakib",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Mirza_Fatali_Akhundov_2.jpg?20061231090052",
        id: 6
    },
    {
        author: "Sefiqe Axundova",
        piece: "Ana Can Ana",
        photoUrl: "https://portal.azertag.az/uploads/news-files/2020/Oktyabr2020/%C5%9F%C9%99fiq%C9%99.jpg",
        id: 7
    },
    {
        author: "Mikayil Müsfiq",
        piece: "Yene O Bag Olaydi",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsuit8Kgw6cu8N_oTtAGVDVqbfsORJcQVWQ&usqp=CAU",
        id: 8
    },
    {
        author: "Seyid Ezim Sirvani",
        piece: "Yene Geldim",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Seyid_Azim_Shirvani.jpg/250px-Seyid_Azim_Shirvani.jpg",
        id: 9
    },
    {
        author: "Mehseti Gencevi",
        piece: "Rübailer",
        photoUrl: "https://upload.wikimedia.org/wikipedia/az/thumb/d/d3/M%C9%99hs%C9%99ti_G%C9%99nc%C9%99vi_portreti.jpg/280px-M%C9%99hs%C9%99ti_G%C9%99nc%C9%99vi_portreti.jpg",
        id: 10
    }
]
function changeList(id, buttonParam, author, piece){
    //console.log(author, piece)
    let newID = Number(id);
    if(buttonParam === 'remove'){
        for(let i = 0; i < books.length; i++){
            if(books[i].id === newID){
                const index = books.indexOf(books[i])
                books.splice(index, 1)
            }
        }
    }else if(buttonParam === 'set'){
        for(let i = 0; i < books.length; i++){
            if(books[i].id === newID){
                books[i].author = author;
                books[i].piece = piece;
            }
        }
    }
}
module.exports  = {
    books,
    changeList
}