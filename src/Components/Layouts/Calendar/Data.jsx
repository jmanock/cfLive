export default{
  getEvents:() =>{
    const eventMeta = [
       {start:'2019-02-04', end:'2019-02-04', title:'Bike Night', link:'www.bikenight.com'},
       {start:'2019-02-14', end:'2019-02-14', title:'CFTV Live @ The Ace', link:'Ace.com'}
    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.link
      }
    });
    return events;
  }
}
