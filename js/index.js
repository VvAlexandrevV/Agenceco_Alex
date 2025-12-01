fetch('http://localhost:3000/articles')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const lastThree = data.slice(-3).reverse();
    console.log(lastThree);

    
    const blocks = document.querySelectorAll('.block1, .block2, .block3');// selection des 3 blocks

    lastThree.forEach((article, index) => {
      const block = blocks[index];
      
      const lastThree =data.slice(-3).reverse(); //selection des 3 dernieres actualites publiées
//------------------------------------Block1---------------------------------//
      document.getElementById('titre1').textContent = lastThree[0].title;
      document.getElementById('date1').textContent = lastThree[0].publicationDate;
      document.getElementById('description1').textContent = lastThree[0].description;
      document.getElementById('contenu1').textContent = lastThree[0].content;
     
//...................................Block2................................//
      document.getElementById('titre2').textContent = lastThree[1].title;
      document.getElementById('date2').textContent = lastThree[1].publicationDate;
      document.getElementById ('description2').textContent = lastThree[1].description; 
      document.getElementById('contenu2').textContent = lastThree[1].content;

//...................................Block3................................// 
      document.getElementById('titre3').textContent = lastThree[2].title;
      document.getElementById('date3').textContent = lastThree[2].publicationDate;
      document.getElementById ('description3').textContent = lastThree[2].description; 
      document.getElementById('contenu3').textContent = lastThree[2].content;
      
     });
  })
  .catch(err => console.error(err));

   