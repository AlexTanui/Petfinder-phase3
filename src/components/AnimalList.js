import React, { useState } from 'react';
import { useEffect } from 'react';

function AnimalCollection() {
  // State to store the list of available bots and the search term
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch the list of available bots from the API
  useEffect(() => {
    fetch('https://api.npoint.io/1704063fce247b818289/pets/')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  // Filter the list of bots based on the search term
  const filteredBots = bots.filter(bot =>
    bot.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle adding a bot to the selected bots list
  const handleAddBot = bot => {
    if (!selectedBots.includes(bot)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  return (
    <>
      <div>
      <div id="searchpets" class="input-group mb-3">
  <input  placeholder="Search by bot title"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} type="text" class="form-control"  aria-label="Recipient's username" aria-describedby="button-addon2"></input>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
       
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {filteredBots.map(bot => (
            <div
              id="card"
              className="col-3, p-1, mb-2  "
              key={bot.id}
            >
              <div id="card-bg" className="card h-100 w-20 ">
                <img
                  className="card-img-top"
                  src={bot.image}
                  alt="news item"
                />
                <div className="card-body">
                  <h4 className="card-title">Name🏴‍☠️: {bot.title}</h4>
                  <p className="card-text">status💔: {bot.description}</p>

                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddBot(bot)}
                  >
                    Add Pet
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{' '}
      <YourBotArmy
        selectedBots={selectedBots}
        setSelectedBots={setSelectedBots}
      />
    </>
  );
}
function YourBotArmy({ selectedBots, setSelectedBots }) {
  // Function to handle removing a pet from the selected pets list
  const handleRemoveBot = bot => {
    setSelectedBots(selectedBots.filter(b => b !== bot));
  };

  // Function to handle deleting a pet
  const handleDeleteBot = async bot => {
    await fetch(`https://api.npoint.io/1704063fce247b818289/pets/${bot.id}`, { method: 'DELETE' });
    handleRemoveBot(bot);
  };

  return (
    <div id='yourbot' >
      <h1>👇Your pets👇</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {selectedBots.map(bot => (
         <div id="card" className="col-3, p-1, mb-2  " >
         <div id="card-bg" className="card h-100 w-20 " key={bot.id}>
             <img className="card-img-top" src={bot.image} alt="news item" />
             <div className="card-body">
                 <h4 className="card-title">Name🏴‍☠️: {bot.title}</h4>
                 <p className="card-text">Status💔: {bot.description}</p>
                 <button className="btn btn-primary" onClick={() => handleRemoveBot(bot)}>Remove</button>
                   <button id="delete" onClick={() => handleDeleteBot(bot)}>❌</button>
             </div>
         </div>
     </div>
           
        
        ))}
      </div>
    </div>
  );
}
export default AnimalCollection