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

      {start:'2019-02-28', end:'2019-02-28', title:'Live Porsche & Mercedes Night @ The Ace', description:'CFTV is LIVE every 3rd Monday of the month for Porsche & Mercedes Night', where:'Ace Cafe', time:'6:00pm', link:'https://www.facebook.com/CycleFeverTV/'},

      {start:'2019-03-18', end:'2019-03-18', title:'Live Porsche & Mercedes Night @ The Ace', description:'CFTV is LIVE every 3rd Monday of the month for Porsche & Mercedes Night', where:'Ace Cafe', time:'6:00pm', link:'https://www.facebook.com/CycleFeverTV/'},

      {start:'2019-02-24', end:'2019-02-24', title:'"Goodvibes" Cars for Cancer Charity Meet', description:'Local car enthusiast & founder of Dub Empire has been battling cancer for the past few years', where:'Castle Church Brewing', time:'1pm - 6pm', link:'https://www.facebook.com/events/458386924699589/'},

      {start:'2019-04-06', end:'2019-04-06', title:'Vettes for Vets - Charity Corvette Night', description:'Car show open to ALL makes and Models, Motorcycles, Classic Cars, Hot Rods... come show off your wheels!', where:'Castle Church Brewing', time:'12pm - 12am', link:'https://www.facebook.com/events/1950110891768624/'}
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
    })
  }
}
