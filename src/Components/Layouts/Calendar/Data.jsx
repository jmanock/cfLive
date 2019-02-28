export default{
  getBikeEvents:() =>{
    const eventMeta = [
      {start:'2019-02-04', end:'2019-02-04', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"', time:'6:00pm', where:'Castle Church Brewing'},
      {start:'2019-03-04', end:'2019-03-04', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"', time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-04-01', end:'2019-04-01', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"',time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-02-14', end:'2019-02-14', title:'Live Bike Night @ The Ace', description:'CFTV is live every 2nd and 4th Thursday of the month', where:'Ace Cafe', time:'8:00pm', link:'https://www.facebook.com/CycleFeverTV/'},

      {start:'2019-02-28', end:'2019-02-28', title:'Live Bike Night @ The Ace', description:'CFTV is LIVE every 2nd and 4th Thursday of the month', where:'Ace Cafe', time:'8:00pm', link:'https://www.facebook.com/CycleFeverTV/'},

      {start:'2019-05-06', end:'2019-05-06', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"', time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-07-01', end:'2019-07-01', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"', time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-08-01', end:'2019-08-01', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"',time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-09-02', end:'2019-09-02', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"', time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-10-07', end:'2019-10-07', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"', time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-11-04', end:'2019-11-04', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"',time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-12-02', end:'2019-12-02', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"', time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-06-03', end:'2019-06-03', title:'VEMA Bike Night', link:'https://www.facebook.com/events/313173569308217', description:'Veteran Enforcers Motorcycle Association (VEMA) rides with charities that support our local community. Their motto says it all "Riding for those who saw more!"', time:'6:00pm', where:'Castle Church Brewing'},

      {start:'2019-03-09', end:'2019-03-09', title:'DeLand Bike Rally', link:'https://www.facebook.com/events/2274905852835051/', description:'Come out and visit Horses 2 Harleys to get all your riding attire at the DeLand Bike Rally.', time:'10:00am - 7:00pm', where:'Downtown DeLand historic District'},

      {start:'2019-03-13', end:'2019-03-17', title:'Orlando Bike Week', link:'https://www.facebook.com/photo.php?fbid=10161362656005006&set=a.126863725005&type=3&theater', description:'Meet TV Cast Memebers from MOONSHINERS, Live Bands, Stunt Crews,', time:'10:00am - 7:00pm', where:'Orlando Harley-Davidson South'},

      {start:'2019-03-10', end:'2019-03-10', title:"Central Florida's 2nd Annual Wounded Vet Run", description:'Benefiting Wounded Veteran: PATRICK WICKENS', link:'https://www.facebook.com/photo.php?fbid=575015412967045&set=a.133906170411307&type=3&theater', time:'12:00pm', where:'Horsepower Ranch'},

      {start:'2019-09-21', end:'2019-09-21', title:'15th Annuall USO Motorcycle Benefit Ride', link:'https://www.facebook.com/events/272753123581814/', description:'To show the men and women in our Armed Forces that the Central Florida Motorcycle Community has not forgotten their sacrifce and thank them for the job they do by supporting the USO.', where:'Orlando Harley-Davidson South', time:'8:30am - 3:00pm'},

      {start:'2019-04-26', end:'2019-04-28', title:'Leesburg Bikefest', link:'https://www.facebook.com/events/288198628522699/', description:"The World's Largest 3-day Motorcycle & Music Event!", where:'Downtown Lessburg', time:'6:00pm - 12:00am'},

      {start:'2019-02-24', end:'2019-02-24', title:'Falcons Fury Harley-Davidson', link:'https://www.facebook.com/falconsfuryhd/', description:'Join us for our 5th annual Iron Elite Day and Bike Show: $2000 in cash and prizes! Best Custom Bike - $500, Best Sound - $500, Best Vintage Bike - $500, Best Club Participation - $500', time:'11:00am', where:'Falcons Fury Harley-Davidson'},


    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.description,
        link:data.link,
        where:data.where,
        time:data.time
      }
    });
    return events;
  },

  getCarEvents:() =>{
    const eventMeta = [
      {start:'2019-02-11', end:'2019-02-11', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-03-11', end:'2019-03-11', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-04-08', end:'2019-04-08', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-05-13', end:'2019-05-13', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-06-10', end:'2019-06-10', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-07-08', end:'2019-07-08', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-08-12', end:'2019-08-12', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-09-09', end:'2019-09-09', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-10-14', end:'2019-10-14', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-11-11', end:'2019-11-11', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-12-09', end:'2019-12-09', title:'Storm the Castle for Car & Bike Night!', description:'Free Entrance, Free Parking, Free Food, Drink Specials, incredible prizes, Cars, Bikes & Awesome People', where:'Castle Church Brewing', time:'6:00pm', link:'https://www.facebook.com/events/1010450619140654/'},

      {start:'2019-03-18', end:'2019-03-18', title:'Live Porsche & Mercedes Night @ The Ace', description:'CFTV is LIVE every 3rd Monday of the month for Porsche & Mercedes Night', where:'Ace Cafe', time:'6:00pm', link:'https://www.facebook.com/CycleFeverTV/'},

      {start:'2019-02-18', end:'2019-02-18', title:'Live Porsche & Mercedes Night @ The Ace', description:'CFTV is LIVE every 3rd Monday of the month for Porsche & Mercedes Night', where:'Ace Cafe', time:'6:00pm', link:'https://www.facebook.com/CycleFeverTV/'},

      {start:'2019-02-24', end:'2019-02-24', title:'"Goodvibes" Cars for Cancer Charity Meet', description:'Local car enthusiast & founder of Dub Empire has been battling cancer for the past few years', where:'Castle Church Brewing', time:'1pm - 6pm', link:'https://www.facebook.com/events/458386924699589/'},

      {start:'2019-04-06', end:'2019-04-06', title:'Vettes for Vets - Charity Corvette Night', description:'Car show open to ALL makes and Models, Motorcycles, Classic Cars, Hot Rods... come show off your wheels!', where:'Castle Church Brewing', time:'12pm - 12am', link:'https://www.facebook.com/events/1950110891768624/'},

      {start:'2019-03-27', end:'2019-03-27', title:'Coming Together at Mercedes Benz of Orlando', description:'A fundraising event at Mercedes Benz of Orlando in coordination with 98.9 WMMO to raise funds for the The Lifeboat Project to help provide housing, support services, and other efforts against human trafficking.', where:'Mercedes Benz of Orlando', time:'6:00pm - 8:00pm', link:'https://www.facebook.com/events/361604854424265/'}
    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.description,
        link:data.link,
        time:data.time,
        where:data.where
      }
    });
    return events;
  },
  getSpecialEvents:() =>{
    const eventMeta = [
      
    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.description,
        link:data.link,
        time:data.time,
        where:data.where
      }
    });
    return events;
  }
}
