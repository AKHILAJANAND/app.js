class Media{
  constructor(title){
    this._title = title;
    this._isCheckOut =false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckOut(){
    this._isCheckOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckOut(value){
    this._isCheckOut = value;
  }
  toggleCheckOutStatus() {
    this._isCheckOut = !this._isCheckOut;
  }
getAverageRating(){
  let sumRating = this._ratings.reduce((accumulator,rating) => accumulator + rating);
  return sumRating / this.ratings.length;
}
addRatings(value){
  return this.ratings.push(value);
}
}
class book extends Media {
  constructor(author,title,pages){
    super(title);
    this._author=author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  
}
}
class movie extends Media{
  constructor(director,title,runTime){
    super(title);
    this._director =director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}
const historyOfEverything = new book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckOut);
historyOfEverything.addRatings(4);
historyOfEverything.addRatings(2);
historyOfEverything.addRatings(1);
console.log(historyOfEverything.getAverageRating());
const speed =  new movie('Jan de Bont','Speed',116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckOut);
speed.addRatings(1);
speed.addRatings(3);
speed.addRatings(5);
console.log(speed.getAverageRating());