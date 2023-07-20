
//Create  a card
document.querySelector('#reserve-btn').addEventListener
('click', buildCard)

function buildCard(){
   let card = document.createElement('div ')
   card.className = 'reservations-card'
   card.innerHTML = `
    <form class="reservation-form" >
        <label for="name">Name</label>
        <input type="text" name="Name" placeholder="Enter your name" > 
        <label for="email">Email</label>
        <input type="email" placeholder="Enter your email" >
        <button>Find a Table</button>
    </form>
    
   `

}

