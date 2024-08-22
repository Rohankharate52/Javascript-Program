

const books =[

    { title : 'book one ',genre : 'fiction', publish: 9181,
      edition : 2004},
      { title : 'book two',genre: 'non-fiction', publish: 1992},

      { title : 'book one ',genre : 'fiction', publish: 9181,
      edition : 2004},
      { title : 'book two',genre: 'non-fiction', publish: 1992},

      { title : 'book one ',genre : 'fiction', publish: 9181,
      edition : 2004},
      { title : 'book two',genre: 'non-fiction', publish: 1992},
      { title : 'book one ',genre : 'fiction', publish: 9181,
      edition : 2004},
      { title : 'book two',genre: 'non-fiction', publish: 1992}

];
 



const userbooks = books.filter( (bk) => bk.genre === 'publish')
console.log(userbooks); 

